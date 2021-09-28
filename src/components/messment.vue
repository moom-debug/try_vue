<template>
  <div class="ny-comment">
    <div class="comment-top yh">{{ coms.length }}条留言</div>
    <div class="comment-main" id="comment_list"></div>
    <div class="line20"></div>
    <div class="clear"></div>
    <div v-show="coms.length" id="comment_list" class="comment-main">
      <div class="comment-info" v-for='c in coms' :key="c.name">
        <div class="comment-info-top">
          <div class="comment-name">
            <span class="com-name"></span
            ><span class="cl99">用户:{{c.name}}</span>
          </div>
          <div class="comment-time">{{(new Date).getFullYear()}}.{{(new Date).getMonth()+1}}.{{(new Date).getDate()}}</div>
        </div>
        <div class="comment-content">
          <div class="comment-content-info">{{c.com}}</div>
        </div>
      </div>
    </div>
    <!--放置页码-->

    <div class="comment-add">
      <div class="comment-add-title">我要留言</div>
      <div class="comment-add-name">
        <input
          class="comment-name-input"
          type="text"
          name="add_name"
          v-model="name"
          @blur="namecheck"
        /><span v-show='namespan' class='red'>请输入姓名或选择匿名</span>
        <div class="comment-add-name-right">姓名<span>*</span></div>
        <div class="anonymous">
          <input type="checkbox" name="isAnon" v-model="isAnon" @click='namecheck2'/>
          <span class="anonymous-info">匿名</span>
        </div>
      </div>
      <!-- <textarea class='comment-add textarea' type="text" name="txtContent" v-model="com"/> -->
      <textarea name="txtContent" v-model="com" @blur="contentcheck"></textarea><span v-show='contentspan' class='red'>请输入内容</span>
      <div class="pl-yzm clearfix">
        <div class='lasttime'><span class='movetop'>验证码：</span><input type="text" v-model="code" class='movetop'/></div>
        <div class='login-code' @click='refreshCode'>
            <s-identify :identifyCode="identifyCode"></s-identify>
        </div>
        
        <span class="Validform_checktip"></span>
        <div class='lasttime red' >点击换一张</div>
        <div v-show='codespan' class='lasttime red'>(请输入正确的验证码)</div>
      </div>
      <button class="comment-ok" @click="loadcomment">发表留言</button>
    </div>
  </div>
</template>

<script>
import sIdentify from './sIdentify.vue';
export default {
  components: { sIdentify },
  props:['k'],
  data() {
    return {
      name: "",
      com: "",
      
      isAnon:false,
      namespan:false,
      contentspan:false,
      identifyCodes:"1234567890",
      identifyCode:"",
      code:'',
      codespan:false
    };
  },
  computed: {
    coms() {
      return JSON.parse(localStorage.getItem(`comment${this.k}`))||[];
    },
  },
  methods: {
    loadcomment() {
       if((this.name==''&&this.isAnon==false)||this.com==''){
           this.namecheck()
           this.contentcheck()
       }
       else if(this.code==''||this.code!=this.identifyCode){
         this.codespan=true
        this.code=''
        this.refreshCode()
       }
       else{
           if(confirm("是否确认发表留言")){
              this.codespan=false
            this.code=''
            this.refreshCode()
            if(this.isAnon==true){
            this.name='匿名'
        }
        this.coms.unshift({ name: this.name, com: this.com });
        localStorage.setItem( `comment${this.k}`,JSON.stringify(this.coms))
        this.name = "";
        this.com = "";
        alert("发表成功")
          }
       }
    },
    namecheck(){
        if(this.name!=''||this.isAnon==true) this.namespan=false
        else this.namespan=true
    },
    namecheck2(){
        if(this.name!=''||this.isAnon==false) this.namespan=false
        else this.namespan=true
    },
    
    contentcheck(){
        if(this.com=='') this.contentspan=true
        else this.contentspan=false
    },
    randomNum(min,max){
      return Math.floor(Math.random()*(max-min)+min);
    },
    refreshCode(){
      this.identifyCode='';
      this.makeCode(this.identifyCodes,4);

    },
    makeCode(o,l){
      for(let i=0;i<l;i++){
        this.identifyCode+=this.identifyCodes[
          this.randomNum(0,this.identifyCodes.length)
        ]
      }
    }
  },
  mounted(){
    this.identifyCode='';
    this.makeCode(this.identifyCodes,4)
  },
 
  created(){
    this.refreshCode()
  },
  
};
</script>

<style>

.red{
    color:red;
    font-weight: bolder;
    margin-left: 10px;
}
.cl99 {
  color: #999;
}
.ny-comment {
  color: #333333;
  margin-top: 30px;
}
.comment-top {
  font-size: 18px;
  padding-bottom: 15px;
  border-bottom: 1px dashed #bbbbbb;
  padding-left: 5px;
  color: #0d7cce;
  font-weight: bolder;
}
.comment-info {
  padding: 15px 5px 15px 5px;
  border-bottom: 1px dashed #bbbbbb;
}
.comment-info-top {
  width: 100%;
  height: 27px;
}
.comment-name {
  width: 50%;
  float: left;
}
.comment-name .com-name {
  font-weight: bold;
  font-size: 14px;
}
.comment-time {
  width: 40%;
  float: right;
  text-align: right;
  color: #999999;
  padding-right: 10px;
}
.comment-content-review {
  background: #eeeeee;
  padding: 10px;
  margin-top: 15px;
  border-radius: 5px;
  position: relative;
}
.review-content {
  color: #ff0101;
  line-height: 2;
}
.review-time {
  text-align: right;
  color: #999;
}
.review-icon {
  width: 18px;
  height: 7px;
  display: block;
  position: absolute;
  top: -7px;
  left: 30px;
}
.comment-add {
  padding: 5px;
}
.comment-add-title {
  padding: 20px 0px;
  font-weight: bold;
  font-size: 14px;
}
.comment-add-name {
  margin-bottom: 15px;
  height: 35px;
}
.comment-name-input {
  width: 233px;
  height: 33px;
  padding: 0 10px;
  border: 1px solid #dddddd;
  float: left;
  line-height: 33px;
}
.comment-add-name-right {
  line-height: 35px;
  padding-left: 13px;
  float: left;
  color: #989898;
}
.comment-add-name-right span {
  color: #ff0101;
  padding-left: 3px;
}
.comment-add textarea {
  width: 100%;
  height: 165px;
  resize: none;
  border: 1px solid #dddddd;
  overflow-y: hidden;
}
.anonymous {
  line-height: 35px;
  margin-left: 15px;
  float: left;
  color: #989898;
  position: relative;
}
.anonymous input {
  position: absolute;
  top: 10px;
  float: left;
  *top: 6px;
}
.anonymous-info {
  padding-left: 20px;
}
.comment-ok {
  display: block;
  width: 100px;
  height: 30px;
  background: #0d7cce;
  margin: 20px 0px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  color: #ffffff !important;
  border-radius: 3px;
  -webkit-box-shadow: 1px 1px 3px #afafaf;
  -moz-box-shadow: 1px 1px 3px #afafaf;
  box-shadow: 1px 1px 3px #afafaf;
}
.comment-ok:hover {
  color: #fff;
  text-decoration: none;
  background: #0184dc;
}
.pl-yzm {
  height: 35px;
  margin-top: 15px;
}
.pl-yzm input {
  width: 138px;
  height: 33px;
  background: #fff;
  border: 1px solid #dddddd;
  /* margin-right: 20px; */
  line-height: 33px;
  padding: 0 5px;
}
.Validform_wrong {
  padding: 3px 0;
  color: #ff0000;
}
.Validform_checktip {
  padding: 3px 0;
}
.login-code{
  /* display: inline-block; */
  /* margin-left: -25px; */
  float: left;
  /* margin-top: 25px;
  line-height: 35px; */
  cursor:pointer;
  width:118px;
}
.lasttime{
  /* display: inline-block; */
  float: left;
}

</style>