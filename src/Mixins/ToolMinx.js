export function isEmptyElement(c) {
    return !(c.tag || (c.text && c.text.trim() !== ''));
}

const getScopedSlots = ele => {
    return (ele.data && ele.data.scopedSlots) || {};
};

function getType(fn) {
    const match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
}
const filterProps = (props, propsData = {}) => {
    const res = {};
    Object.keys(props).forEach(k => {
        if (k in propsData || props[k] !== undefined) {
            res[k] = props[k];
        }
    });
    return res;
};

export default  {
    methods:{
        dispatch(componentName, eventName, params) {
            var parent = this.$parent || this.$root;
            var name = parent.$options.componentName;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.componentName;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        getSlots(ele){
            let componentOptions = ele.componentOptions || {};
            if (ele.$vnode) {
                componentOptions = ele.$vnode.componentOptions || {};
            }
            const children = ele.children || componentOptions.children || [];
            const slots = {};
            children.forEach(child => {
                if (!isEmptyElement(child)) {
                    const name = (child.data && child.data.slot) || 'default';
                    slots[name] = slots[name] || [];
                    slots[name].push(child);
                }
            });
            return { ...slots, ...getScopedSlots(ele) };
        },
         getOptionProps(instance){
            if (instance.componentOptions) {
                const componentOptions = instance.componentOptions;
                const { propsData = {}, Ctor = {} } = componentOptions;
                const props = (Ctor.options || {}).props || {};
                const res = {};
                for (const [k, v] of Object.entries(props)) {
                    const def = v.default;
                    if (def !== undefined) {
                        res[k] =
                            typeof def === 'function' && getType(v.type) !== 'Function' ? def.call(instance) : def;
                    }
                }
                return { ...res, ...propsData };
            }
            const { $options = {}, $props = {} } = instance;
            return filterProps($props, $options.propsData);
        }
    }
}
