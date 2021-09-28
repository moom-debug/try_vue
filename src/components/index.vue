<template>
  <div class="down">
   
  </div>
</template>

<script>
import good from '../imgmove'
export default{
    mounted(){
        let fir=document.querySelector(".firson")
        let ffir=document.querySelector(".fir")
        let mov=new good.movv()
        mov.auto(ffir,fir,'left',(5*-220),2)
        let ftir=document.getElementById("list-content")
        let tir=document.querySelector(".tirson")
        let mov2=new good.movv()
        mov2.auto(ftir,tir,'top',(14*-75+3),2)
        let ftir2=document.getElementById("list-content3")
        let tir2=document.querySelector(".tirson2")
        let mov3=new good.movv()
        mov3.auto(ftir2,tir2,'top',(3*-220),2)

    }
};
</script>

<style>
/* .down{
  z-index: -1;
} */
.area1 {
  width: 670px;
  height: 215px;
  overflow: hidden;
  background: url(../img/area1-bg.jpg) no-repeat;
  float: left;
}
.area1-content {
  padding: 10px;
}
.area1-content img {
  width: 140px;
  height: 155px;
  float: left;
  margin-right: 15px;
}
.area1-content p {
  text-indent: 2em;
  line-height: 26px;
}

/*链接1*/
.link1 {
  width: 290px;
  height: 215px;
  overflow: hidden;
  background: url(../img/link1-bg.jpg) no-repeat;
  float: right;
}
.link1-content {
  padding: 10px;
}
.link1-content ul {
  float: left;
  margin-left: -10px;
}
.link1-content li {
  width: 130px;
  height: 73px;
  float: left;
  display: inline;
  margin-left: 10px;
  margin-bottom: 10px;
}
.link1-content li a {
  display: block;
  width: 130px;
  height: 73px;
  background: url(../img/link1-li-bg.jpg) no-repeat;
  font-size: 14px;
  font-weight: bold;
  color: #ff5c00;
  line-height: 73px;
}
.link1-content li a img {
  display: block;
  width: 55px;
  height: 55px;
  float: left;
  display: inline;
  margin-top: 10px;
  margin-left: 0px;
  margin-right: 5px;
}

/*区域2*/
.area2 {
  width: 330px;
  height: 237px;
  overflow: hidden;
  background: url(../img/area2-bg.jpg) no-repeat;
  float: left;
  margin-right: 20px;
}
.area2-content {
  padding: 10px;
}
.area2-content dl {
  width: 310px;
  height: 75px;
  overflow: hidden;
  padding: 10px 0;
  border-bottom: 1px dotted #969696;
}
.area2-content dl dt {
  width: 75px;
  height: 75px;
  float: left;
  margin-right: 15px;
}
.area2-content dl dt img {
  width: 75px;
  height: 75px;
}
.area2-content .title {
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 5px;
}
.area2-content .info {
  line-height: 26px;
}

/*区域3*/
.area3 {
  width: 320px;
  height: 237px;
  overflow: hidden;
  background: url(../img/area3-bg.jpg) no-repeat;
  float: left;
  margin-right: 20px;
}
.area3-content {
  padding: 10px;
  padding-top: 5px;
}
.area3-content li {
  height: 29px;
  line-height: 29px;
  border-bottom: 1px dotted #999999;
  padding-left: 15px;
  background: url(../img/index-li-icon.jpg) no-repeat 5px center;
}

/*区域4*/
.area4 {
  width: 290px;
  height: 237px;
  overflow: hidden;
  background: url(../img/area4-bg.jpg) no-repeat;
  float: right;
}
.area4-content {
  padding: 10px;
  padding-top: 5px;
}
.area4-content li {
  height: 29px;
  line-height: 29px;
  border-bottom: 1px dotted #999999;
  padding-left: 15px;
  background: url(../img/index-li-icon.jpg) no-repeat 5px center;
}

/*区域5*/
.area5 {
  width: 670px;
  height: 260px;
  overflow: hidden;
  background: url(../img/area5-bg.jpg) no-repeat;
  float: left;
}
.area5-content {
  padding: 10px;
}
.area5-content li {
  width: 200px;
  height: 200px;
  float: left;
  margin-right: 20px;
}
.area5-content li img {
  width: 200px;
  height: 170px;
}
.area5-content li span {
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}

/*区域6*/
.area6 {
  width: 290px;
  height: 260px;
  overflow: hidden;
  background: url(../img/area6-bg.jpg) no-repeat;
  float: right;
}
.area6-content {
  padding: 10px;
}
.area6-content dl {
  border-bottom: 1px solid #dddddd;
  padding: 10px 0;
}
.area6-content dl p {
  color: #999999;
  line-height: 2;
  width: 100%;
  height: 24px;
  float: left;
}
.area6-content dl dt {
  line-height: 18px;
  color: #003399;
}
.area6-content dl dt span {
  display: block;
  float: left;
  width: 40px;
  height: 18px;
  background: url(../img/xs.jpg) no-repeat left center;
  margin-right: 10px;
  margin-top: 2px;
}
.area6-content dl dd span {
  display: block;
  float: left;
  width: 40px;
  height: 18px;
  background: url(../img/ls.jpg) no-repeat left center;
  margin-right: 10px;
  margin-top: 2px;
}
.area6-content dl dd {
  line-height: 2;
}
.area6-content dl dt {
  line-height: 2;
}
.fir{
    position: relative;
}
.firson{
    position: absolute;
    left:0px;
}
.tirson{
    position: absolute;
    top:0px;
}
.tirson2{
    position: absolute;
    top:0px;
}
</style>