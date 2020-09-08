import Vue from 'vue';
import TWEEN from 'tween';
import {imgError} from "./imgError";
import './EnlargeImageModal.css';
let Pool = [];
let stop = null;
function animate() {
  stop = requestAnimationFrame(animate);
  TWEEN.update()
}
requestAnimationFrame(animate);

//constructor
let getAnInstance = (el,option) => {
  if (Pool.length > 0) {
    let instance = Pool[0];
    Pool.splice(0, 1);
    return instance;
  }
  return new Vue({
    el:el,
    data(){
      return{
        ...option
      }
    },
    methods:{
      handleLoad(event){
        var _this = this;
        if(!this.$refs.img)return;
        var rect = this.$refs.img.getBoundingClientRect();
        this.$refs.close.style.right =(( rect.right - rect.width ) - ( this.$refs.close.offsetWidth/2 )) + 'px';
        this.$refs.close.style.top = (rect.top - ( this.$refs.close.offsetHeight/2 )) + 'px';
        var coords = {o:0}
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({o:100}, 300) // Move to (300, 200) in 1 second.
           .easing(TWEEN.Easing.Quintic.In) // Use an easing function to make the animation smooth.
            .onUpdate(() => {
              _this.$refs.img.style.setProperty('opacity', coords.o)
            })
            .start()
      },
      handleError(){
        this.loading = false;
        this.$refs.img.src = imgError;
      },
      close(event){
        event.stopPropagation()
        var _this = this;
        var coords = {o:100}
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({o:0}, 300) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quintic.Out) // Use an easing function to make the animation smooth.
            .onUpdate(() => {
              _this.$refs.img.style.setProperty('opacity', coords.o)
            })
            .start().onComplete(()=>{
              setTimeout(()=>{
                _this.$el.parentNode.removeChild(_this.$el);
                //window.cancelAnimationFrame(stop);
              })
            })

      }
    },
    dispose(){
      window.cancelAnimationFrame(stop);
    },
    render(h){
      return   <div onClick={this.close}  class="enlarge-image">
                  <img
                    style={{'width':this.width+'px',height:this.height+'px'}}
                    src={this.src}
                    onError={this.handleError}
                    onLoad={this.handleLoad}
                    class="draw-image"
                    ref="img" />
               <div  onClick={this.close} ref="close" class="enlarge-image-close">
                  <i class="icon-close"></i>
              </div>
            </div>
    }
  });
};
let returnAnInstance = instance => {
  if (instance) {
    Pool.push(instance);
  }
};
const EnlargeImageModal=(option)=>{
  try{
    let wrapper=document.querySelector("#enlarge-image");
    if(wrapper){
      wrapper.parentNode.removeChild(wrapper);
    }

    let el=document.createElement("div");
    el.id="enlarge-image";
    document.body.appendChild(el);
    Pool.pop();

    let instance=getAnInstance(el,option);

    returnAnInstance(instance);
    return instance;
  }catch(error){
    throw error;
  }
}

export default EnlargeImageModal;
