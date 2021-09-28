<template>
  <div class="body-inner">
    <div class="header">
      <div class="banner-container">
        <img src="./img/banner-bg.png" />
      </div>
      <div class="header-content">
        <div class="logo">
          <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}"><img src="./img/logo.png" /></router-link @click.native="z=1;backTop()">
        </div>
      </div>
    </div>
    <div class="menu">
      <ul id="nav">
        <li class=""><a href="javascript:;" @click="z=999">网站首页</a></li>
        <li class="on">
          <router-link @click.native="z=1;backTop()" :to="{name:'center1'}">中心概况</router-link @click.native="z=1;backTop()"
          ><span class="imr"></span>
          <ul>
            <li class="">
              <router-link @click.native="z=1;backTop()" :to="{name:'center1'}">中心简介</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" :to="{name:'center2'}">组织机构</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" :to="{name:'center3'}">申报书</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
          </ul>
        </li>
        <li class="on">
          <router-link @click.native="z=1;backTop()" :to="{name:'teacher1'}">教学队伍</router-link @click.native="z=1;backTop()"
          ><span class="imr"></span>
          <ul>
            <li class="">
              <router-link @click.native="z=1;backTop()" :to="{name:'teacher1'}">队伍建设</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" :to="{name:'teacher2'}">中心负责人</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" :to="{name:'teacher3'}">教学团队</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
          </ul>
        </li>
        <li class="on">
          <router-link @click.native="z=1;backTop()" to="/control1/control1_span1">管理模式</router-link @click.native="z=1;backTop()"
          ><span class="imr"></span>
          <ul>
            <li class="">
              <router-link @click.native="z=1;backTop()" :to="{name:'conspa1'}">管理体制</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" :to="{name:'conspa2'}">运行机制</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" :to="{name:'conspa3'}">校级制度</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" :to="{name:'conspa4'}">中心制度</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
          </ul>
        </li>
        <li class="on">
          <router-link @click.native="z=1;backTop()" to="/comon">实验教学</router-link @click.native="z=1;backTop()"
          ><span class="imr"></span>
          <ul>
            <li class="">
              <router-link @click.native="z=1;backTop()" to="/comon">理念与改革思路</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" to="/comon">方法与手段</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" to="/comon">教学大纲</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" to="/comon">体系与内容</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" to="/comon">校外实习实训基地</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
          </ul>
        </li>
        <li class="on">
          <router-link @click.native="z=1;backTop()" to="/comon">设备环境</router-link @click.native="z=1;backTop()"
          ><span class="imr"></span>
          <ul>
            <li class="">
              <router-link @click.native="z=1;backTop()" to="/comon">仪器设备</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" to="/comon">维护与运行</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" to="/comon">环境与安全</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" to="/comon">大型仪器简介</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" to="/comon">仪器照片</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
          </ul>
        </li>
        <li class="on">
          <router-link @click.native="z=1;backTop()" to="/comon">中心特色</router-link @click.native="z=1;backTop()"
          ><span class="imr"></span>
          <ul></ul>
        </li>
        <li class="on">
          <router-link @click.native="z=1;backTop()" to="/comon">成果展示</router-link @click.native="z=1;backTop()"
          ><span class="imr"></span>
          <ul>
            <li class="">
              <router-link @click.native="z=1;backTop()" to="/comon">教学改革与研究成果</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" to="/comon">教师科研成果</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
            <li class="">
              <router-link @click.native="z=1;backTop()" to="/comon">学生成果</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
          </ul>
        </li>
        <li class="on">
          <router-link @click.native="z=1;backTop()" to="/message">互动空间</router-link @click.native="z=1;backTop()"
          ><span class="imr"></span>
          <ul></ul>
        </li>
        <li class="on">
          <router-link @click.native="z=1;backTop()" to="/comon">资讯中心</router-link @click.native="z=1;backTop()">
          <ul>
            <li class="">
              <router-link @click.native="z=1;backTop()" to="/comon">新闻公告</router-link @click.native="z=1;backTop()"
              ><span class="imr"></span>
              <ul></ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="banner"></div>
    <!--头部-->
    <!--头部-->
    <div class="container ny-container">
      <div class="content ny-content" :style="{height:hei}">
         <div class="content uppp" :style="{zIndex:z}">
      <div class="content-top">
        <!--S 区域1-->
        <div class="area1">
          <div class="area-title">
            <h2 class="title">中心简介</h2>
            <div class="more">
              <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}">MORE &gt;&gt;</router-link @click.native="z=1;backTop()">
            </div>
          </div>
          <div class="area1-content">
            <img src="./img/door.jpg" />
            <p>
              材料实验教学示范中心2015年前隶属于理学院实验中心。2005年建立材料化学专业实验室，成立了华南农业大学无机功能材料研究室和高分子材料研究室。2010年成立了华南农业大学生物材料研究所。2015年初，为了大力发展材料类专业,学校对学科进行了重新调整，组建了材料与能源学院,将原林学院的木材科学与工程专业(含家具方向)、理学院的材料化学和材料科学与工程专业调整到材料与能源学院。目前，学院拥有木材科学与工程二级学科硕士点，有木材科学与工程、材料化学、材料科学与工程等3个本科专业，在…
            </p>
          </div>
        </div>
        <!--E 区域1-->
        <!--S 链接1-->
        <div class="link1">
          <div class="area-title">
            <h2 class="title">快速链接</h2>
          </div>
          <div class="link1-content">
            <ul>
              <li>
                <router-link @click.native="z=1;backTop()"
                  :to="{name:'conspali1',params:{li:1}}"
                  title="教学大纲"
                  target="_blank"
                  ><img
                    src="./img/icon1.png"
                  />教学大纲</router-link @click.native="z=1;backTop()"
                >
              </li>
              <li>
                <router-link @click.native="z=1;backTop()"
                  :to="{name:'conspali1',params:{li:1}}"
                  title="仪器设备"
                  target="_blank"
                  ><img
                    src="./img/icon2.png"
                  />仪器设备</router-link @click.native="z=1;backTop()"
                >
              </li>
              <li>
                <router-link @click.native="z=1;backTop()"
                  :to="{name:'conspali1',params:{li:1}}"
                  title="申报书"
                  target="_blank"
                  ><img
                    src="./img/icon2.png"
                  />申报书</router-link @click.native="z=1;backTop()"
                >
              </li>
              <li>
                <router-link @click.native="z=1;backTop()"
                  :to="{name:'conspali1',params:{li:1}}"
                  title="学生成果"
                  target="_blank"
                  ><img
                    src="./img/icon1.png"
                  />学生成果</router-link @click.native="z=1;backTop()"
                >
              </li>
            </ul>
          </div>
        </div>
        <!--E 链接1-->
      </div>
      <div class="content-main">
        <!--S 区域2-->
        <div class="area2">
          <div class="area-title">
            <h2 class="title">大型仪器简介</h2>
            <div class="more">
              <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}">MORE &gt;&gt;</router-link @click.native="z=1;backTop()">
            </div>
          </div>
          <div class="area2-content">
            <div
              id="list-content"
              style="
                overflow: hidden;
                width: 310px;
                height: 177px;
                position: relative;
              "
            >
              <div
                id="list"
                class='tirson'
                style="
                  display: inline-block;
                  padding: 0px;
                  margin: 0px;
                  list-style: outside none none;
                  height: 2108px;
                  width: 310px;
                "
              >
                <ul
                  style="
                    list-style: outside none none;
                    display: block;
                    clear: both;
                  "
                >
                  <dl>
                    <dt>
                      <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}"
                        ><img
                          src="./img/1.jpg"
                      /></router-link @click.native="z=1;backTop()">
                    </dt>
                    <dd>
                      <p class="title">
                        <router-link @click.native="z=1;backTop()"
                          :to="{name:'conspali1',params:{li:1}}"
                          title="X射线衍射仪"
                          >X射线衍射仪</router-link @click.native="z=1;backTop()"
                        >
                      </p>
                      <p class="info">
                        XD－2/3型X射线粉末衍射仪：北京普析通用仪器有限责任公司生产
                        1…
                      </p>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}"
                        ><img
                          src="./img/1.jpg"
                      /></router-link @click.native="z=1;backTop()">
                    </dt>
                    <dd>
                      <p class="title">
                        <router-link @click.native="z=1;backTop()"
                          :to="{name:'conspali1',params:{li:1}}"
                          title="比表面分析仪"
                          >比表面分析仪</router-link @click.native="z=1;backTop()"
                        >
                      </p>
                      <p class="info">
                        生产商： 美国麦克仪器型号： Gemini VII 2390性能指标：
                        分辨率…
                      </p>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}"
                        ><img
                          src="./img/1.jpg"
                      /></router-link @click.native="z=1;backTop()">
                    </dt>
                    <dd>
                      <p class="title">
                        <router-link @click.native="z=1;backTop()"
                          :to="{name:'conspali1',params:{li:1}}"
                          title="差热热重联用仪"
                          >差热热重联用仪</router-link @click.native="z=1;backTop()"
                        >
                      </p>
                      <p class="info">
                        型号：DTG-60厂商：日本岛津性能：温度范围：室温~1100℃升温速率…
                      </p>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}"
                        ><img
                          src="./img/2.jpg"
                      /></router-link @click.native="z=1;backTop()">
                    </dt>
                    <dd>
                      <p class="title">
                        <router-link @click.native="z=1;backTop()"
                          :to="{name:'conspali1',params:{li:1}}"
                          title="电化学工作站（进口）"
                          >电化学工作站（进口）</router-link @click.native="z=1;backTop()"
                        >
                      </p>
                      <p class="info">
                        仪器型号规格: im6/6ex仪器所在单位名称:
                        华南农业大学理学院应用…
                      </p>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}"
                        ><img
                          src="./img/1.jpg"
                      /></router-link @click.native="z=1;backTop()">
                    </dt>
                    <dd>
                      <p class="title">
                        <router-link @click.native="z=1;backTop()"
                          :to="{name:'conspali1',params:{li:1}}"
                          title="电子万能试验机"
                          >电子万能试验机</router-link @click.native="z=1;backTop()"
                        >
                      </p>
                      <p class="info">
                        生产商： 深圳三思纵横仪器型号： UTM-4204性能指标：
                        最大试验力…
                      </p>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}"
                        ><img
                          src="./img/1.jpg"
                      /></router-link @click.native="z=1;backTop()">
                    </dt>
                    <dd>
                      <p class="title">
                        <router-link @click.native="z=1;backTop()"
                          :to="{name:'conspali1',params:{li:1}}"
                          title="红外光谱仪"
                          >红外光谱仪</router-link @click.native="z=1;backTop()"
                        >
                      </p>
                      <p class="info">
                        FT-IR360红外光谱仪：美国Nicolet
                        公司生产主要技术指标：波数范…
                      </p>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}"
                        ><img
                          src="./img/2.jpg"
                      /></router-link @click.native="z=1;backTop()">
                    </dt>
                    <dd>
                      <p class="title">
                        <router-link @click.native="z=1;backTop()"
                          :to="{name:'conspali1',params:{li:1}}"
                          title="双螺杆挤出机"
                          >双螺杆挤出机</router-link @click.native="z=1;backTop()"
                        >
                      </p>
                      <p class="info">
                        生产商： 南京杰恩特仪器型号： SHJ-20B性能指标：
                        同向平行双螺…
                      </p>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}"
                        ><img
                          src="./img/1.jpg"
                      /></router-link @click.native="z=1;backTop()">
                    </dt>
                    <dd>
                      <p class="title">
                        <router-link @click.native="z=1;backTop()"
                          :to="{name:'conspali1',params:{li:1}}"
                          title="微波合成仪器介绍"
                          >微波合成仪器介绍</router-link @click.native="z=1;backTop()"
                        >
                      </p>
                      <p class="info">
                        生产商： milestone 公司仪器型号： Milestone ETHOS MR 2.5
                        性能…
                      </p>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}"
                        ><img
                          src="./img/1.jpg"
                      /></router-link @click.native="z=1;backTop()">
                    </dt>
                    <dd>
                      <p class="title">
                        <router-link @click.native="z=1;backTop()"
                          :to="{name:'conspali1',params:{li:1}}"
                          title="小型喷雾干燥仪"
                          >小型喷雾干燥仪</router-link @click.native="z=1;backTop()"
                        >
                      </p>
                      <p class="info">
                        生产商： 瑞士步琪仪器型号： B290性能指标：
                        最大干燥能力：1.5…
                      </p>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}"
                        ><img
                          src="./img/1.jpg"
                      /></router-link @click.native="z=1;backTop()">
                    </dt>
                    <dd>
                      <p class="title">
                        <router-link @click.native="z=1;backTop()"
                          :to="{name:'conspali1',params:{li:1}}"
                          title="荧光分光光度计"
                          >荧光分光光度计</router-link @click.native="z=1;backTop()"
                        >
                      </p>
                      <p class="info">
                        仪器型号规格: RF-5301生产厂商: 岛津公司国别:
                        日本购置日期(年…
                      </p>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}"
                        ><img
                          src="./img/2.jpg"
                      /></router-link @click.native="z=1;backTop()">
                    </dt>
                    <dd>
                      <p class="title">
                        <router-link @click.native="z=1;backTop()"
                          :to="{name:'conspali1',params:{li:1}}"
                          title="紫外分光光度计"
                          >紫外分光光度计</router-link @click.native="z=1;backTop()"
                        >
                      </p>
                      <p class="info">
                        仪器型号规格: UV2550 仪器所在单位名称:
                        华南农业大学理学院应用…
                      </p>
                    </dd>
                  </dl>
                </ul>

                <ul
                  style="
                    list-style: outside none none;
                    display: block;
                    clear: both;
                  "
                >
                  <dl>
                    <dt>
                      <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}"
                        ><img
                          src="./img/1.jpg"
                      /></router-link @click.native="z=1;backTop()">
                    </dt>
                    <dd>
                      <p class="title">
                        <router-link @click.native="z=1;backTop()"
                          :to="{name:'conspali1',params:{li:1}}"
                          title="X射线衍射仪"
                          >X射线衍射仪</router-link @click.native="z=1;backTop()"
                        >
                      </p>
                      <p class="info">
                        XD－2/3型X射线粉末衍射仪：北京普析通用仪器有限责任公司生产
                        1…
                      </p>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}"
                        ><img
                          src="./img/1.jpg"
                      /></router-link @click.native="z=1;backTop()">
                    </dt>
                    <dd>
                      <p class="title">
                        <router-link @click.native="z=1;backTop()"
                          :to="{name:'conspali1',params:{li:1}}"
                          title="比表面分析仪"
                          >比表面分析仪</router-link @click.native="z=1;backTop()"
                        >
                      </p>
                      <p class="info">
                        生产商： 美国麦克仪器型号： Gemini VII 2390性能指标：
                        分辨率…
                      </p>
                    </dd>
                  </dl>         
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!--E 区域2-->
        <!--S 区域3-->
        <div class="area3">
          <div class="area-title">
            <h2 class="title">师资队伍</h2>
            <div class="more">
              <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}">MORE &gt;&gt;</router-link @click.native="z=1;backTop()">
            </div>
          </div>
          <div class="area3-content">
            <ul>
              <li>
                <router-link @click.native="z=1;backTop()"
                  :to="{name:'conspali1',params:{li:1}}"
                  title="材料与能源学院实验中心主任：胡传双 博士、教授"
                  >材料与能源学院实验中心主任：胡传双 博士、…</router-link @click.native="z=1;backTop()"
                >
              </li>
              <li>
                <router-link @click.native="z=1;backTop()"
                  :to="{name:'conspali1',params:{li:1}}"
                  title="材料实验中心主任：董先明 博士、教授"
                  >材料实验中心主任：董先明 博士、教授</router-link @click.native="z=1;backTop()"
                >
              </li>
              <li>
                <router-link @click.native="z=1;backTop()"
                  :to="{name:'conspali1',params:{li:1}}"
                  title="生物材料研究所所长：方岳平 博士、教授"
                  >生物材料研究所所长：方岳平 博士、教授</router-link @click.native="z=1;backTop()"
                >
              </li>
              <li>
                <router-link @click.native="z=1;backTop()"
                  :to="{name:'conspali1',params:{li:1}}"
                  title="材料化学专业实验室  禹筱元 博士、教授"
                  >材料化学专业实验室 禹筱元 博士、教授</router-link @click.native="z=1;backTop()"
                >
              </li>
              <li>
                <router-link @click.native="z=1;backTop()"
                  :to="{name:'conspali1',params:{li:1}}"
                  title="材料科学与工程专业实验室（筹） 卢其明 博士、教授"
                  >材料科学与工程专业实验室（筹） 卢其明 博…</router-link @click.native="z=1;backTop()"
                >
              </li>
              <li>
                <router-link @click.native="z=1;backTop()"
                  :to="{name:'conspali1',params:{li:1}}"
                  title="木材科学与工程专业实验室  涂登云 博士、副教授"
                  >木材科学与工程专业实验室 涂登云 博士、副…</router-link @click.native="z=1;backTop()"
                >
              </li>
            </ul>
          </div>
        </div>
        <!--E 区域3-->
        <!--S 区域4-->
        <div class="area4">
          <div class="area-title">
            <h2 class="title">新闻公告</h2>
            <div class="more">
              <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}">MORE &gt;&gt;</router-link @click.native="z=1;backTop()">
            </div>
          </div>
          <div class="area4-content">
            <ul>
              <li>
                <router-link @click.native="z=1;backTop()"
                  :to="{name:'conspali1',params:{li:1}}"
                  title="关于2015年材料与能源学院大学生创新创业训练拟立项项目的公示"
                  >关于2015年材料与能源学院大学生创新创…</router-link @click.native="z=1;backTop()"
                >
              </li>
              <li>
                <router-link @click.native="z=1;backTop()"
                  :to="{name:'conspali1',params:{li:1}}"
                  title="关于《2014年度本科学生参加省级以上学科竞赛获奖名单》的公示"
                  >关于《2014年度本科学生参加省级以上学…</router-link @click.native="z=1;backTop()"
                >
              </li>
              <li>
                <router-link @click.native="z=1;backTop()"
                  :to="{name:'conspali1',params:{li:1}}"
                  title="关于公示我校推荐申报2015年度省级质量工程项目名单的通知"
                  >关于公示我校推荐申报2015年度省级质量…</router-link @click.native="z=1;backTop()"
                >
              </li>
              <li>
                <router-link @click.native="z=1;backTop()"
                  :to="{name:'conspali1',params:{li:1}}"
                  title="关于设备报废工作事项相关说明的通知"
                  >关于设备报废工作事项相关说明的通知</router-link @click.native="z=1;backTop()"
                >
              </li>
              <li>
                <router-link @click.native="z=1;backTop()"
                  :to="{name:'conspali1',params:{li:1}}"
                  title="广东大学生挑战杯课外学术科技作品竞赛收官我校4件作品获特等奖"
                  >广东大学生挑战杯课外学术科技作品竞赛…</router-link @click.native="z=1;backTop()"
                >
              </li>
              <li>
                <router-link @click.native="z=1;backTop()"
                  :to="{name:'conspali1',params:{li:1}}"
                  title="我院联合培养的首位博士后顺利出站"
                  >我院联合培养的首位博士后顺利出站</router-link @click.native="z=1;backTop()"
                >
              </li>
            </ul>
          </div>
        </div>
        <!--E 区域4-->
      </div>
      <div class="content-bottom">
        <!--S 区域5-->
        <div class="area5">
          <div class="area-title">
            <h2 class="title">学生照片</h2>
            <div class="more">
              <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}">MORE &gt;&gt;</router-link @click.native="z=1;backTop()">
            </div>
          </div>
          <div class="area5-content">
            <div
              id="list-content2"
              style="
                overflow: hidden;
                width: 650px;
                height: 200px;
                position: relative;
              "
              fixnum="1"
            >
              <div
                id="list2"
                class="fir"
                style="
                  display: inline-block;
                  padding: 0px;
                  margin: 0px;
                  list-style: outside none none;
                  width: 4400px;
                  height: 200px;

                "
              >
                <ul
                class='firson'
                  style="
                    list-style: outside none none;
                    margin-left: 0px;
                    margin-right: 0px;
                    border-left-width: 0px;
                    border-right-width: 0px;
                    float: left;
                    display: inline;
                  "
                >
                  <li>
                    <router-link @click.native="z=1;backTop()"
                      :to="{name:'conspali1',params:{li:1}}"
                      title="学生实验3.jpg"
                      ><img
                        src="./img/3.jpg"
                      /><span>学生实验3.jpg</span></router-link @click.native="z=1;backTop()"
                    >
                  </li>
                  <li>
                    <router-link @click.native="z=1;backTop()"
                      :to="{name:'conspali1',params:{li:1}}"
                      title="学生实验2.jpg"
                      ><img
                        src="./img/4.jpg"
                      /><span>学生实验2.jpg</span></router-link @click.native="z=1;backTop()"
                    >
                  </li>
                  <li>
                    <router-link @click.native="z=1;backTop()"
                      :to="{name:'conspali1',params:{li:1}}"
                      title="学生实验1.jpg"
                      ><img
                        src="./img/3.jpg"
                      /><span>学生实验1.jpg</span></router-link @click.native="z=1;backTop()"
                    >
                  </li>
                  <li>
                    <router-link @click.native="z=1;backTop()"
                      :to="{name:'conspali1',params:{li:1}}"
                      title="学生毕业论文答辩2.jpg"
                      ><img
                        src="./img/4.jpg"
                      /><span>学生毕业论文答辩2.jp…</span></router-link @click.native="z=1;backTop()"
                    >
                  </li>
                  <li>
                    <router-link @click.native="z=1;backTop()"
                      :to="{name:'conspali1',params:{li:1}}"
                      title="学生毕业论文答辩"
                      ><img
                        src="./img/3.jpg"
                      /><span>学生毕业论文答辩</span></router-link @click.native="z=1;backTop()"
                    >
                  </li>
                  <li>
                    <router-link @click.native="z=1;backTop()"
                      :to="{name:'conspali1',params:{li:1}}"
                      title="学生实验3.jpg"
                      ><img
                        src="./img/3.jpg"
                      /><span>学生实验3.jpg</span></router-link @click.native="z=1;backTop()"
                    >
                  </li>
                  <li>
                    <router-link @click.native="z=1;backTop()"
                      :to="{name:'conspali1',params:{li:1}}"
                      title="学生实验2.jpg"
                      ><img
                        src="./img/4.jpg"
                      /><span>学生实验2.jpg</span></router-link @click.native="z=1;backTop()"
                    >
                  </li>
                  <li>
                    <router-link @click.native="z=1;backTop()"
                      :to="{name:'conspali1',params:{li:1}}"
                      title="学生实验1.jpg"
                      ><img
                        src="./img/3.jpg"
                      /><span>学生实验1.jpg</span></router-link @click.native="z=1;backTop()"
                    >
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!--E 区域5-->
        <!--S 区域6-->
        <div class="area6">
          <div class="area-title">
            <h2 class="title">互动空间</h2>
            <div class="more">
              <router-link @click.native="z=1;backTop()" :to="{name:'conspali1',params:{li:1}}">MORE &gt;&gt;</router-link @click.native="z=1;backTop()">
            </div>
          </div>
          <div class="area6-content">
            <div
              id="list-content3"
              style="
                overflow: hidden;
                width: 270px;
                height: 200px;
                position: relative;
              "
              fixnum="1"
            >
              <div
                id="list3"
                class="tirson2"
                style="
                  display: inline-block;
                  padding: 0px;
                  margin: 0px;
                  list-style: outside none none;
                  height: 756px;
                  width: 270px;
                "
              >
                <ul
                  style="
                    list-style: outside none none;
                    display: block;
                    clear: both;
                  "
                >
                  <dl>
                    <dt><span></span>介绍一下华南农业大学？</dt>
                    <p>05-30</p>
                    <dd>
                      <span></span>华南农业大学（South China Agricultural
                      University），建立于1909年，是一所以农业科学为优势、以生命科学为特色，农、工、文、理、经、管、法、艺术多学科全面发展，具有鲜明的热带、亚热带特色的综合型大学。
                    </dd>
                  </dl>
                </ul>

                <ul
                  style="
                    list-style: outside none none;
                    display: block;
                    clear: both;
                  "
                >
                  <dl>
                    <dt><span></span>介绍一下华南农业大学？</dt>
                    <p>05-30</p>
                    <dd>
                      <span></span>华南农业大学（South China Agricultural
                      University），建立于1909年，是一所以农业科学为优势、以生命科学为特色，农、工、文、理、经、管、法、艺术多学科全面发展，具有鲜明的热带、亚热带特色的综合型大学。
                    </dd>
                  </dl>
                </ul>

                <ul
                  style="
                    list-style: outside none none;
                    display: block;
                    clear: both;
                  "
                >
                  <dl>
                    <dt><span></span>介绍一下华南农业大学？</dt>
                    <p>05-30</p>
                    <dd>
                      <span></span>华南农业大学（South China Agricultural
                      University），建立于1909年，是一所以农业科学为优势、以生命科学为特色，农、工、文、理、经、管、法、艺术多学科全面发展，具有鲜明的热带、亚热带特色的综合型大学。
                    </dd>
                  </dl>
                </ul>

                <ul
                  style="
                    list-style: outside none none;
                    display: block;
                    clear: both;
                  "
                >
                  <dl>
                    <dt><span></span>介绍一下华南农业大学？</dt>
                    <p>05-30</p>
                    <dd>
                      <span></span>华南农业大学（South China Agricultural
                      University），建立于1909年，是一所以农业科学为优势、以生命科学为特色，农、工、文、理、经、管、法、艺术多学科全面发展，具有鲜明的热带、亚热带特色的综合型大学。
                    </dd>
                  </dl>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!--E 区域6 -->
      </div>
    </div>
        <router-view class="hoverindex"></router-view>
      </div>
    </div>
    <!--尾部-->
    <!--底部-->
    <div id="foot">
      <div class="foot">
        <div class="copy">
          <span>
            版权所有：<font class="foot-info"
              >华南农业大学 - 材料实验教学示范中心</font
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;技术支持:<router-link @click.native="z=1;backTop()"
              :to="{name:'conspali1',params:{li:1}}"
              target="_blank"
              >东莞市力拓网络科技有限公司</router-link @click.native="z=1;backTop()"
            ><br />
            建议在IE8以上浏览器 1024*768以上分辨率下浏览本站
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;流量统计：
            <!-- <script type="text/javascript"
              src="/web/hnclsy/tools/submit_ajax.ashx?action=site_count&amp;channel_id=1"></script> -->
            <img src="./img/7.gif" /><img src="./img/7.gif" /><img
              src="./img/7.gif"
            /><img src="./img/7.gif" />
          </span>
        </div>
        <div class="link2 left">
          <select
            name="select"
            onchange="if(this.options[this.selectedIndex].value!=''){window.open(this.options[this.selectedIndex].value,'_blank');}"
          >
            <option>--------友情链接--------</option>
            <option value="http://info.scau.edu.cn/coschem/getIndexNews.action">
              化学实验教学示范中心
            </option>
            <option value="http://xy.scau.edu.cn/caineng/xnyxy/Index.html">
              华南农业大学材料与能源学院
            </option>
            <option
              value="http://web.scau.edu.cn/syjxzx/lixueyuan/views/index.html"
            >
              理学基础课教学实验示范中心
            </option>
            <option value="http://web.scau.edu.cn/syjxzx/">
              公共基础课实验教学中心
            </option>
            <option
              value="http://202.116.160.122/eol/jpk/course/layout/default/index.jsp?courseId=1087"
            >
              基础化学实验精品课程
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import good from './imgmove'
export default {
  data(){
    return{
      z:1
    }
  },
  computed:{
    hei(){
      if(this.z===999){
        return 860+"px"
      }
      else
        return "auto"
    }
  },
  mounted(){
        console.log("我执行了一次")
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

    },
    methods:{
      backTop() {
                let thats = window.pageYOffset
                
                let timer = setInterval(() => {
                    
                    // console.log(thats)
                    thats =(thats -250)
                    document.documentElement.scrollTop=document.body.scrollTop=thats  //
                    // console.log(that.scrollTop)
                    // console.log(thats )
                    if(thats  < 0) {
                      clearInterval(timer)
                    }
                }, 1)
    },   
}
}
</script>

<style>

/*公共样式*/
*{margin:0;padding:0;}
body{font-size:12px;font-family:SimSun,Arial,Helvetica,sans-serif;}
ul,li{ list-style-type: none;}
input,select,button,textarea{font-size:12px;font-family:SimSun,Arial,Helvetica,sans-serif; }
button{cursor: pointer;}
.cur,a{cursor: pointer;}
.mt_20{ margin-top:20px;}

.yj{-moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius:3px;}

img{border:none;}

table{ margin:auto;}
.clear{clear:both;}

a,a:link {color:#333;text-decoration:none;}

a:active,a:hover{text-decoration:underline;cursor: pointer; color:#ff6600;}
a:focus {outline:none;}
a:hover{ color:#ff6600;}

.tRight{ text-align:right;}
.tcenter{ text-align:center;}
.tLeft{ text-align:left;}

.h25{ height:25px;}
.h30{ height:30px;}

.ml30{ margin-left:30px;}

.right{ float:right;}
.left{ float:left;}


.b{ font-weight:bold;}
.n{ font-weight:normal;}
.nodata{position:absolute;left:20px;}
.yh{font-family:\5FAE\8F6F\96C5\9ED1;}
.media{ margin:0 auto;}

.tRed{ color:red;}
.tGreen{ color:green;}
.tBlue{ color:#04AEDA;}

.none{ display:none;}
.clear{ clear:both;}

/*公共样式*/
body{ color:#333; background:url(img/body.jpg) -3px -3px;}
.body-inner{ background:url(img/body-inner.jpg) no-repeat center top; overflow:hidden;}
.header{ width:100%; height:160px; overflow:hidden; position:relative; z-index:99;}
.header-content{ width:980px; height:160px; position:relative; overflow:hidden; z-index:99; margin:0 auto;}
.logo{ position:absolute; top:10px; left:0px; z-index:3;}
.banner-container{ position:relative; width:100%; z-index:0;}
.banner-container img{ position:absolute; left:50%; margin-left:-960px;}
.banner-content{ width:980px; margin:0 auto; position:relative;}



/*默认二级下拉导航菜单*/
.menu{ width:100%; height:40px;position:relative; z-index:99999; margin:0 auto;}
#nav {width:980px; height:40px; line-height:40px; margin:0 auto; background:#0049B1; white-space:nowrap;}
#nav li {float:left;display:inline; height:40px; text-decoration:none;font-size:14px; color:#fff;text-align:center;position:relative;z-index:990;}
#nav li:hover{ color:#fff; background:#002E6C;}
#nav li a{ text-align:center; display:block;color:#fff; text-decoration:none; float:left;position:relative; z-index:999; padding:0 19px; font-weight:bold;}
#nav li a:hover{ color:#fff; background:#002E6C;}
#nav .menu-hover a{ color:#fff; background:#002E6C;}
#nav li ul { display:none;position:absolute;left:0px;top:40px; width:120px; z-index:99999;}
#nav li ul li{float:left;display:inline; border-top:1px solid #003B89; height:35px;  background:#002E6C !important; padding:0px;}
#nav li ul a{float:left;display:block;text-align:left;text-decoration:none;width:160px; font-weight:normal; padding:2px 13px;line-height:30px; font-size:14px; background:none !important; color:#fff !important;}
#nav li ul li span{ display:none;}
#nav li ul a:hover  {color:#fff !important;  background:#003B89 !important;height:30px; }
#nav li:hover ul {display:block;}
#nav li.sfhover ul {left:0px;display:block;}
/*默认二级下拉导航菜单*/

.banner{ width:960px; height:240px; margin:0 auto; overflow:hidden; padding:10px;}

/*主要内容*/
.container{ width:100%; overflow:hidden;}
.content{ width:980px; margin:0 auto; overflow:hidden; padding:40px 0;}
.content-top{ width:980px; height:215px; overflow:hidden; overflow:hidden; margin-bottom:20px;}
.content-main{ width:980px; height:237px; overflow:hidden; overflow:hidden; margin-bottom:20px;}
.content-bottom{ width:980px; height:260px; overflow:hidden; overflow:hidden; }

.area-title{ height:40px; overflow:hidden; padding-left:20px; padding-right:10px;}
.area-title .title{ float:left; line-height:0px; font-size:14px; color:#fff; font-weight:bold;}
.area-title .more{ float:right;}
.area-title .more a{ line-height:40px; color:#fff; font-family:"宋体"; font-size:12px;}

/*内页*/
.ny-container{}

/*内页侧栏*/
.ny-left{ width:230px; overflow:hidden; float:left; background:#fff;}
.ny-left-title{ width:230px; height:40px; color:#fff; font-size:14px; background:#E88800; line-height:40px;padding-left:30px; font-weight:bold;}
.ny-left-content{ min-height:200px; _height:200px; overflow:hidden; background:#fff; padding:0 15px; padding-bottom:30px; padding-top:10px; border:1px solid #E0E0E0; border-top:none;}
.ny-left-content ul li{ width:200px; float:left; overflow:hidden; margin-bottom:5px;}
.ny-left-content li a{ display:block; width:200px; height:35px; line-height:35px;font-size:12px; color:#333; border-bottom:1px dotted #C6C6C6; padding-left:20px; }
.ny-left-content li a:hover{ text-decoration:none; color:#333;}
.ny-left-content ul .cur a{ color:#333; font-weight:bold;}

.ny-left-content li ul{ display:none; overflow:hidden; width:175px; margin-left:20px;}
.ny-left-content li ul li{margin-bottom:0px; background:none; border:none;}
.ny-left-content li ul li a{ width:155px; height:30px; line-height:30px;  padding-left:20px; font-weight:normal; border:none; color:#666; font-size:12px;}
.ny-left-content li.cur ul{ display:block;}
/*内页侧栏*/


/*内页右边内容区*/
.ny-right{ width:730px; overflow:hidden; float:right;}
.ny-right-title a{ color:#fff;}
.ny-right-title{ width:740px; padding-left:20px; height:40px; line-height:40px; color:#fff; font-size:12px; background:#0049B1;}
.ny-right-content{min-height:400px; _height:400px; line-height:24px; width:730px; position:relative; float:left; display:inline; padding:20px; background:#fff; border:1px solid #E0E0E0;}
.ny-right-bottom{ width:730px; height:15px;  float:left;}
.paging{ width:100%;height:30px;line-height:30px; margin-top:10px; }

/*内页右边内容区 - 文字内容*/
.right-main-title{ font-size:18px; line-height:30px; margin-top:10px; text-align:center;}
.right-sub-title{ height:30px; line-height:30px; border-bottom:1px dotted #cacaca; text-align:center; padding-bottom:10px; margin-bottom:20px;}
.right-sub-title span{ margin: 0 20px; color:#999;}
.right-main-show{ line-height:24px; margin-bottom:20px;}
.next-page{ margin-top:20px; line-height:24px;}

/*内页右边内容区 - 文字内容*/
.img-center{ display:block; width:100%; text-align:center;}

/*文字列表01*/
.news-list01 li{ height:35px; line-height:35px; border-bottom:1px dashed #D7D7D7; padding-left:13px; }
.news-list01 li a{ float:left;}
.news-list01 li span{ float:right; color:#999;}


/*文字列表02*/
.news-list02 li{ height:35px; background:#F6F6F6;margin-bottom:15px;float:left; width:100%; position:relative;}
.news-list02 li a{ line-height:35px;  display:block; background:#F6F6F6; border-left:4px solid #F6F6F6; padding-left:16px; color:#333; padding-right:15px;}
.news-list02 li span{ color:#999999; position:absolute; top:0px; right:15px; display:block; line-height:35px;}
.news-list02 li a:hover{ text-decoration:none; color:#ff6600; border-left:4px solid #FF6600; }
.news-list02 li a:hover span{ color:#999999;}

/*文字列表03*/
.news-list03 dl{ width:100%; height:100px; padding:20px 0; border-bottom:1px solid #EEEEEE;}
.news-list03 dl dt{ width:100px; height:100px; float:left; margin-right:20px;}
.news-list03 dl dt img{ width:100px; height:100px;}
.news-list-title a{ font-size:14px; font-weight:bold; color:#333;}
.news-list-title a:hover{ color:#ff6600;}
.news-list-time{ color:#999; font-size:12px; line-height:2em;}
.news-list-info{ color:#999; font-size:12px; line-height:1.5em; margin-top:26px;}

/*文字列表04*/
.news-list-inner{ float:left; display:inline;margin-left:-15px; display:inline;}
.news-list-li{ width:218px; height:218px; border:1px solid #DFDFDF; background:#fff; float:left; display:inline; margin-left:15px; margin-bottom:20px;}
.news-list-li-inner{ width:187px; height:176px; margin:1px; background:#F5F5F5; padding:20px 15px; overflow:hidden;}
.news-list-li-inner .news-list-title{ font-size:14px;}
.news-list-li-inner .news-list-title a:hover{ color:#ff6600;}
.news-list-li-inner .news-list-info{ color:#787887; line-height:2em; margin-top:10px; margin-bottom:8px;}
.news-list-li-inner .news-list-more a{ color:#9292B8;}

/*图片列表01*/
.img-list01 ul{ float:left; display:inline;  margin-left:-15px; display:inline;}
.img-list01 li{ width:160px; height:200px; float:left; text-align:center; margin-left:15px; margin-bottom:20px; display:inline; overflow:hidden;}
.img-list01 li img{ margin-bottom:10px;  width:150px; height:150px; background:#fff; padding:4px; border:1px solid #E6E6E6; float:left; margin-bottom:10px;}


/*图片列表02*/
.img-list02-inner{ float:left; display:inline;  margin-left:-15px; display:inline;}
.img-list02 ul a{  display:block; width:325px; height:140px; padding:2px; border:3px solid #F5F7F7; overflow:hidden; float:left; margin-left:15px; _margin-left:10px; margin-bottom:20px;}
.img-list02 ul a:hover{ border:3px solid #DBE3E6; text-decoration:none;}
.img-list02 dl dt{ height:140px; width:140px; float:left; margin-right:20px;}
.img-list02 dl dt img{ width:140px; height:140px;}
.img-list02 dl dd{ width:163px; float:left;}
.img-list02 .img-list-title{ font-size:12px; font-weight:bold; color:#333; line-height:40px;}
.img-list02 .img-list-info{ font-size:12px; text-indent:2em; color:#999; line-height:22px;}

/*图片列表03*/
.imgGallery{ width:100%;margin:0 auto; margin-top:10px; overflow:hidden;}
.imgshow img{ height:400px; width:auto;display:none;}
.img-content{height:400px; position:relative; overflow:hidden; margin:0 auto; margin-bottom:20px; text-align:center;}
.imgtitle{ width:100%; height:30px; line-height:30px; text-align:center; color:#333; background:#ddd; margin-bottom:20px;}
.imglist{ width:99999px; height:140px; position:absolute;}
.imglist ul{ margin-left:-10px; float:left;}
.imglist li{ width:79px; height:79px; float:left; overflow:hidden; margin-left:10px; display:inline; border:5px solid #ccc;}
.imglist li img{ width:79px; height:79px;}
.imglist .imgclick{ border:5px solid #AFAFAF;}
.imglistcon{ height:90px; overflow:hidden; position:relative; float:left; width:588px; display:inline;}
.btnleft{ float:left; margin-top:20px;}
.btnright{ float:left; margin-top:20px;}

/*视频列表01*/
.video-list01 ul{ float:left; display:inline;  margin-left:-15px; display:inline;}
.video-list01 li{ width:160px; height:190px; float:left; text-align:center; margin-left:15px; margin-bottom:20px; display:inline; position:relative;}
.video-list01 li img{ float:left; margin-bottom:10px; width:150px; height:150px; background:#fff; padding:4px; border:1px solid #E6E6E6;}
.video-list01 li span{ display:block; width:150px; height:150px; position:absolute; top:5px; left:5px;}
/* .video-list01 li .hover{} */
.video-list01 li .video-list01-hover{ position:absolute; top:50%; left:50%; margin-top:-25px; margin-left:-25px; width:50px; height:50px; background:none; padding:0; border:none; opacity:0.8; -webkit-opacity:0.8;}
.video-list01 li .opa{  opacity:1; -webkit-opacity:1;}

/*视频列表02*/
.video-list02 dl{ height:180px; border:5px solid #EEEEEE; background:#fff; margin-bottom:30px;}
.video-list02 dl dt{ width:180px; height:180px; overflow:hidden; float:left; margin-right:20px; position:relative;}
.video-list02 dl dt img{ width:180px; height:180px;}
.video-list02 dl dt .video-list02-hover{ width:180px; height:180px;  position:absolute; top:0; left:0; display:none;}
.video-list02 dl dt .video-list02-hover img{ position:absolute; top:50%; left:50%; margin-left:-50px; margin-top:-17.5px; width:100px; height:35px;}
.video-list02 dl dt a{ display:block; width:180px; height:180px;}
.video-list02 dl dd{ padding:20px 20px 20px 0;}
.video-list02 .video-list-title a{ font-size:18px; color:#333; font-weight:bold;}
.video-list02 .video-list-title a:hover{color:#ff6600;}
.video-list02 .video-list-time{ font-size:12px; color:#999; line-height:26px; }
.video-list02 .video-list-info{ font-size:12px; color:#999; margin-top:15px; line-height:2em;}


/*视频列表03*/
.video-list03 ul{ float:left; display:inline; margin-left:-20px; display:inline;}
.video-list03 li{ width:216px; height:180px; float:left; display:inline; margin-left:20px; margin-bottom:20px; overflow:hidden; position:relative;}
.video-list03 li img{ width:216px; height:180px;}
.video-list03 li .video-list03-hover{ position:absolute; left:0; padding:0 10px; height:130px;  top:145px; width:200px;}
.video-list03 .video-list-title{ font-size:14px; color:#fff; font-weight:bold; line-height:35px;}
.video-list03 .video-list-info{ font-size:12px; color:#999; line-height:20px;}
.video-list03 .video-list-play a{ display:block; width:100px; height:30px; line-height:30px; text-align:center; color:#fff; background:#0049B1; margin-top:10px;}
.video-list03 .video-list-play a:hover{ text-decoration:none; background:#0050C6;}



/*内页*/

/*foot*/
#foot{ width:100%; height:100px; overflow:hidden; background:url(img/foot-bg.jpg) repeat-x;}
.foot{ width:980px;height:100px; line-height:24px; margin:0 auto;}
.foot-info{ color:#fff;}
.copy{width:700px; float:left; height:80px; background: url(img/foot-icon.jpg) no-repeat 26px 26px;padding:28px 0 0 150px; color:#fff; line-height:2;}
.copy a{ color:#fff;}
.foot .link2{ background:#E9ECE9; width:190px; height:35px;margin:35px 0 0 10px; float:right; display:inline; margin-right:30px;}
.foot .link2 select{ width:170px; margin:8px 0 0 10px;}






/*CSS manu style pagination*/

.manu { padding:3px; margin:3px; text-align:center; }
.manu a { border:#eee 1px solid; padding:2px 5px; margin:2px; color:#0067E2; text-decoration:none;}
.manu a:hover { color:#666; border:#999 1px solid;}
.manu a:active { border:#999 1px solid; color:#666; }
.manu .current { border:#0067E2 1px solid; padding:2px 5px; FONT-WEIGHT: bold; PADDING-BOTTOM: 2px; MARGIN: 2px;  COLOR: #fff; PADDING-TOP: 2px; BACKGROUND-COLOR: #0067E2
}
.manu .disabled { border:#eee 1px solid; padding:2px 5px; margin:2px; color:#ddd;}

/*CSS manu style pagination*/

.manu2 { padding:3px; margin:3px; text-align:center; margin-top:20px; }
.manu2 a { border:#eee 1px solid; padding:2px 5px; margin:2px; color:#0067E2; text-decoration:none;}
.manu2 a:hover { color:#666; border:#999 1px solid;}
.manu2 a:active { border:#999 1px solid; color:#666; }
.manu2 .current { border:#0067E2 1px solid; padding:2px 5px; FONT-WEIGHT: bold; PADDING-BOTTOM: 2px; MARGIN: 2px;  COLOR: #fff; PADDING-TOP: 2px; BACKGROUND-COLOR: #0067E2
}
.manu2 .disabled { border:#eee 1px solid; padding:2px 5px; margin:2px; color:#ddd;}

.hoverindex{
  width:980px;
  min-height: 760px;
  margin-top: -792px;
  background:url(img/body.jpg) -3px -3px;
  position: relative;
  z-index: 9;
}
.uppp{
  position: relative;
  background:url(img/body.jpg) -3px -3px;
}
</style>