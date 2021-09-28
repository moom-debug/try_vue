export default{
    movv:function(){
        this.move= function(obj, attr, target, speed, callback) {
            clearInterval(obj.timer);                         //防止多次加速,用obj.timer可以只停止自己的
            var oldvalue = parseInt(this.getStyle(obj, attr));
        
            if (target <= oldvalue) {
                speed = -speed;
                
            };
            obj.timer = setInterval(()=>{
                var oldvalue = parseInt(this.getStyle(obj, attr));
                var zan = oldvalue + speed;
                if ((speed > 0 && zan >= target) || (speed < 0 && zan <= target)) {
                    zan = target;
        
                }
                obj.style[attr] = zan + "px";
        
                if (zan === target) {
                    clearInterval(obj.timer);
                    callback && callback();              //回调函数
                }
            }, 1)
        };
        this.getStyle=function(obj, name) {
            return window.getComputedStyle ? getComputedStyle(obj, null)[name] : obj.currentStyle[name];
        };
        this.auto=function (obj2,obj, attr, target, speed){
            
            obj2.timer=setInterval(()=>{
                // console.log("我开始了")
                // console.log(obj)
                // console.log(attr)
                // console.log("woshihhh---")
                this.move(obj, attr, target, 1,function(){
                    // console.log("woshihhh---")
                    obj.style[attr]=0+"px";
                });
            },5)   
            obj.onmouseover=function(){
                console.log("我停止了")
                clearInterval(obj.timer)
                clearInterval(obj2.timer)
            };
            obj.onmouseout=()=>{
                console.log("out-----")
                obj2.timer=setInterval(()=>{
                // console.log("我开始了")
                // console.log(obj)
                // console.log(attr)
                this.move(obj, attr, target, 1,function(){
                    // console.log("woshihhh")
                    obj.style[attr]=0+"px";
                });
            },5)}
        };
    }
    
}
