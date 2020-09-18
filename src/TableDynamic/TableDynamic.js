import { Table } from 'ant-design-vue';
import testMio from "./testMio"
import testMiMi from "./testMiMi.vue";
const TablesList = []
export default {
    name: 'TableDynamic',
    componentName:'TableDynamic',
    components:{
        testMio,
        testMiMi
    },
    props:{
        ...Table.props,
        'name':{
            type:String,
            default(){
                return ''
            }
        },
        'columns':{
            type:Array,
           required:true
        }
    },
    data() {
        return {
            storageName:this.$route.path + '@dynamicColumns'+(this.name?'_'+this.name:''),
            draggingMap:{},
            draggingState:null,
            customHeader:{
                header: {
                    cell: this.ResizeableTitle,
                },
            },
            visible:false,
            confirmLoading:false,
            dynamicColumns:[]
        }
    },
    methods:{
        updateColumns(cols = []) {
            const columns = [];
            const { $slots, $scopedSlots } = this;
            cols.forEach(col => {
                const { slots = {}, scopedSlots = {}, ...restProps } = col;
                const column = {
                    ...restProps,
                };
                Object.keys(slots).forEach(key => {
                    const name = slots[key];
                    if (column[key] === undefined && $slots[name]) {
                        column[key] = $slots[name].length === 1 ? $slots[name][0] : $slots[name];
                    }
                });
                Object.keys(scopedSlots).forEach(key => {
                    const name = scopedSlots[key];
                    if (column[key] === undefined && $scopedSlots[name]) {
                        column[key] = $scopedSlots[name];
                    }
                });
                // if (slotScopeName && $scopedSlots[slotScopeName]) {
                //   column.customRender = column.customRender || $scopedSlots[slotScopeName]
                // }
                if (col.children) {
                    column.children = this.updateColumns(column.children);
                }
                columns.push(column);
            });
            return columns;
        },
        handleOk(){
            var columns = this.getColumns()
            let inputList = Array.prototype.slice
                .call(this.$refs.tableDdynamicColumns.querySelectorAll('input[type="checkbox"]'));
            let checkedList = inputList.filter(it=>it.checked);
            let dataIndexList = checkedList.map(it=>it.value);
            this.dynamicColumns = columns.filter(it=>dataIndexList.includes(it.dataIndex));
            localStorage.setItem(this.storageName,JSON.stringify(this.dynamicColumns));
            this.visible=false;
        },
        handleCancel(){
            this.visible = false;
        },
        setDragState(columns){
            let _this = this;
            columns.forEach(col => {
                try{
                    _this.draggingMap[col.key] = col.width;
                }catch (e) {
                    throw '${col.key} width错误'
                }
            });
            this.draggingState ={... _this.draggingMap} //Vue.observable(this.draggingMap);
        },
        ResizeableTitle (h,props,children) {
            let _this = this;
            let thDom = null;
            const { key, ...restProps } = props;
            const col = this.columns?this.columns.find(col => {
                const k = col.dataIndex || col.key;
                return k === key;
            }):[];
            if (col==null || !col.width) {
                return <th {...restProps}>{children}</th>;
            }

            const onDrag = (x, y) => {
                _this.draggingState[key] = 0;
                col.width = Math.max(x, 1);
            };

            const onDragstop = () => {
                _this.draggingState[key] = thDom.getBoundingClientRect().width;
            };

            return (
                <th {...restProps} v-ant-ref={r => (thDom = r)} width={col.width} class="resize-table-th">
                {children}
                <vue-draggable-resizable
            key={col.key}
        class="table-draggable-handle"
            w={10}
            x={_this.draggingState[key] || col.width}
            z={1}
            axis="x"
            draggable={true}
            resizable={false}
            onDragging={onDrag}
            onDragstop={onDragstop} ></vue-draggable-resizable>
                </th>
        );
        },
        getColumns(){
            var _this = this;
          return  this.columns?this.columns:this.getSlots(this).default.map(item=>{
              return _this.getOptionProps(item);
          });
        },
        modalTags(h){
            var dynamicColumns = this.dynamicColumns;
            var columns = this.getColumns();
            console.log(columns)
            var list = columns.map((item)=>{
                console.log(dynamicColumns)
                return (<a-checkbox
                key={item.dataIndex} value={item.dataIndex}
                defaultChecked={ dynamicColumns.find(it=>it.dataIndex==item.dataIndex)!=null } >
                    {item.title}
                    </a-checkbox>)
            })
            return (<a-modal title="自定义筛选表头"
            onOk={this.handleOk}
            visible={true}
            confirmLoading={this.confirmLoading}
            onCancel={this.handleCancel}>
                <p>筛选要显示的字段</p>
                <div ref="tableDdynamicColumns">
                {list}
                </div>
                </a-modal>)
        },
        alertModal(){
            this.visible = true;

        },
        init(){
            var storageList =  localStorage.getItem(this.storageName);
            var columns = this.getColumns();
            if(storageList){
                let dataIndexList = JSON.parse(storageList).map(it=>it.dataIndex);
                this.dynamicColumns =columns.filter(it=>dataIndexList.includes(it.dataIndex));
            }else{
                this.dynamicColumns = this.columns.filter(it=>it.visible);
            }
            this.setDragState(this.dynamicColumns);
        }
    },
    mounted() {
        this.init();
        TablesList.push(this)
     /*   if(TablesList.length>1){
            throw "一个页面内只能允许存在一个动态表头组件"
        }
*/
    },
    render(h){

     const vcTableProps = {
            ref: 'table',
            props: {
                ...this.$props,
                columns:this.dynamicColumns,
                size:"small",
                components:this.customHeader,
            },
            on: this.$listeners,
        };
    return (<section class="table-dynamic">
                <div class="table-dynamic-filter-btn" onClick={this.alertModal}>
                     <a-icon style={{'transform': 'rotate(90deg)'}} type="ellipsis" />
                </div>
                <a-table  {...vcTableProps} >
                </a-table>
                {this.visible?this.modalTags(h):null}
        </section>)
    }
};
