<template>
  <div class="home">
    <!-- 顶部 -->
    <div class="home-top zpback">

      <div class="container d-flex position-relative">
        <img src="https://static.zhipin.com/v2/web/geek/images/fast-reg.png" alt="">

        <div class=" home-input">
          <img src="https://static.zhipin.com/v2/web/geek/images/fast-reg-text.png" alt="">
          <div class="input-box d-flex align-items-center">
            <input type="tel"  placeholder="输入手机号" class="form-input" maxlength="11" name="phone">
            <div class=" d-inline-block position-relative">
              <input type="text" placeholder="验证码" class="form-input " name="phoneCode" maxlength="6">
              <routerLink to="" href="javascript:;" class=" zpcolor position-absolute">获取</routerLink>
            </div>
            <div class="btn-zp text-white border border-white">登陆/注册</div>
          </div>
        </div>

      </div>

    </div>

    <!-- 搜索 -->
    <div class=" container">
      <div class="search">

        <div class="search-input d-flex">

          <div class=" bg-white d-flex">
            <div class="leabel">
              <span>职位类型</span>
              <i class="iconfont iconjiantou1"></i>
            </div>  
            <input type="text" class=" border-0" placeholder="搜索职位、公司">
          </div>
          
          <div class="search-but zpback text-white">
            搜索
          </div>

        </div>
        <!-- 热门职位 -->
        <div class="search-hot d-flex align-items-center">
          <b class="d-block">热门职位:</b>
          <routerLink to="/job" href="javascript:;" class="zpcolor d-block">Java</routerLink>
          <routerLink :to="{path:'/job'}" href="javascript:;" class="zpcolor d-block">Java</routerLink>
          <routerLink to="" href="javascript:;" class="zpcolor d-block">Java</routerLink>
          <routerLink to="" href="javascript:;" class="zpcolor d-block">Java</routerLink>
          <routerLink to="" href="javascript:;" class="zpcolor d-block">Java</routerLink>
          <routerLink to="" href="javascript:;" class="zpcolor d-block">Java</routerLink>
          <routerLink to="" href="javascript:;" class="zpcolor d-block">Java</routerLink>
        </div>

      </div>

    </div>
    <!-- 滚动条下滑弹出搜索框 -->
    <div class="bg-white eject-search w-100"  :class="scrollTop>250?'enter':'out'">
      <div class="container d-flex align-items-center h-100">
        <img src="" class="hader_logo" alt="">
        <div class="search-input d-flex">

          <div class=" bg-white d-flex">
            <div class="leabel">
              <span>职位类型</span>
              <i class="iconfont iconjiantou1"></i>
            </div>  
            <input type="text" class=" border-0" placeholder="搜索职位、公司">
          </div>
          
          <div class="search-but zpback text-white">
            搜索
          </div>

        </div>
        
      </div>
    </div>
    <!-- 招聘信息 -->
    <div class="container">
      <!-- 行业 -->
      <div class="d-flex zap hy">
        <p :class="span==0?'zpcolor':''" v-for="(item,span) of industry" :key="span">{{item}}</p>
      </div>
      <!-- 招聘信息 -->
      <div class="row">
        <div class=" col-4 zp bg-white position-relative" v-for="(item,index) of zp" :key="index">
          <!-- 职位信息 -->
          <routerLink to="" >
            <p class="d-flex justify-content-between postion">
              {{item.name}}
              <span class="pirce">{{item.min_wages}}k-{{item.max_wages}}k</span>
            </p>
            <p class="inf">
              {{item.place}}
              <span class="vline"></span>
              {{item.experience}}
              <span class="vline"></span>
              {{item.education}}
            </p>
          </routerLink>
          <!-- 招聘者信息 -->
          <div class="zpz d-flex align-items-center">
            <img :src="item.img" alt="">
            {{item.enterprise}}
            <span>
              {{item.fname}}
              <span class="vline"></span>
              {{item.postion}}
            </span>
          </div>

        </div>

      </div>
    <!-- 查看更多 -->
    <div class="zpcolor see">查看更多</div>
    <!-- 热门企业 -->
    
      <div class="d-flex zap hy">
        <p :class="span==0?'zpcolor':''" v-for="(item,span) of hot" :key="span">{{item}}</p>
      </div>
      <div class="row">

        <div class="col-3 zp bg-white hot" v-for="(item,span) of hot_ex" :key="span">
          <routerLink to=""  class="d-flex justify-content-between d-block">
            <img src="" alt="">
            <div class=" text-right">
              <p>{{item.name}}</p>
              <span>
                {{item.inv}}
                <span class="vline"></span>
                {{item.type}}
              </span>
            </div>
          </routerLink>

          <div>
            <span class="zpcolor">{{item.post}}</span>
            个热招岗位
            <span class="zpcolor">{{item.boss}}</span>
            位BOSS在线
          </div>

        </div>

      </div>
    <!-- 查看更多 -->
    <div class="zpcolor see">查看更多</div>
    </div>
    
  </div>
</template>

<script >
import global from './common.vue'
export default {
  data() {
    return {
      scrollTop:0,
      industry:['IT·互联网','金融','房地产·建筑','教育培训','汽车','娱乐传媒','医疗健康','法律咨询'],
      zpcolor:'',
      zp:[
        {name:'Java架构师',min_wages:'30',max_wages:'60',place:'上海',experience:'5-10年',education:'本科',enterprise:'京东集团',img:require('../assets/companyHeadImg2.jpg'),fname:'陈女士',postion:'招聘者'},
        {name:'Java架构师',min_wages:'30',max_wages:'60',place:'上海',experience:'5-10年',education:'本科',enterprise:'京东集团',img:require('../assets/companyHeadImg.jpg'),fname:'陈女士',postion:'招聘者'},
        {name:'Java架构师',min_wages:'30',max_wages:'60',place:'上海',experience:'5-10年',education:'本科',enterprise:'京东集团',img:require('../assets/companyHeadImg2.jpg'),fname:'陈女士',postion:'招聘者'},
        {name:'Java架构师',min_wages:'30',max_wages:'60',place:'上海',experience:'5-10年',education:'本科',enterprise:'京东集团',img:require('../assets/companyHeadImg.jpg'),fname:'陈女士',postion:'招聘者'},
        {name:'Java架构师',min_wages:'30',max_wages:'60',place:'上海',experience:'5-10年',education:'本科',enterprise:'京东集团',img:require('../assets/companyHeadImg2.jpg'),fname:'陈女士',postion:'招聘者'},
        {name:'Java架构师',min_wages:'30',max_wages:'60',place:'上海',experience:'5-10年',education:'本科',enterprise:'京东集团',img:require('../assets/companyHeadImg.jpg'),fname:'陈女士',postion:'招聘者'},
        {name:'Java架构师',min_wages:'30',max_wages:'60',place:'上海',experience:'5-10年',education:'本科',enterprise:'京东集团',img:require('../assets/companyHeadImg2.jpg'),fname:'陈女士',postion:'招聘者'},
        {name:'Java架构师',min_wages:'30',max_wages:'60',place:'上海',experience:'5-10年',education:'本科',enterprise:'京东集团',img:require('../assets/companyHeadImg.jpg'),fname:'陈女士',postion:'招聘者'},
        {name:'Java架构师',min_wages:'30',max_wages:'60',place:'上海',experience:'5-10年',education:'本科',enterprise:'京东集团',img:require('../assets/companyHeadImg2.jpg'),fname:'陈女士',postion:'招聘者'},
      ],
      hot:['热门企业','行业巨头','新锐公司','上市公司'],
      hot_ex:[
        {name:'当贝网络',inv:'A轮',type:'互联网',post:'2014',boss:'221'},
        {name:'当贝网络',inv:'A轮',type:'互联网',post:'2014',boss:'221'},
        {name:'当贝网络',inv:'A轮',type:'互联网',post:'2014',boss:'221'},
        {name:'当贝网络',inv:'A轮',type:'互联网',post:'2014',boss:'221'},
        {name:'当贝网络',inv:'A轮',type:'互联网',post:'2014',boss:'221'},
        {name:'当贝网络',inv:'A轮',type:'互联网',post:'2014',boss:'221'},
        {name:'当贝网络',inv:'A轮',type:'互联网',post:'2014',boss:'221'},
        {name:'当贝网络',inv:'A轮',type:'互联网',post:'2014',boss:'221'},
        {name:'当贝网络',inv:'A轮',type:'互联网',post:'2014',boss:'221'},
        {name:'当贝网络',inv:'A轮',type:'互联网',post:'2014',boss:'221'},
        {name:'当贝网络',inv:'A轮',type:'互联网',post:'2014',boss:'221'},
        {name:'当贝网络',inv:'A轮',type:'互联网',post:'2014',boss:'221'},
      ]
    }
  },
  methods: {
    color:function (num) {
      if (num==1) {
        this.zpcolor='zpcolor'
      }else{
        this.zpcolor=''
      }
    },
   hand:function () {
     global.handleScroll(this)
   },
   

  },
  created() {
  
    
  },
  mounted() {
    window.addEventListener('scroll',this.hand)
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 顶部 */
.home-top>.container>img{
  height: 7.5rem;  
}
.home .row{
  margin: 0;
}
.home-input{
  position: absolute;
  right: 0;
  bottom: 1.2rem;
}
.home-input img{
  height: 1.625rem;
}
.input-box{
  font-size: 0.75rem;
  margin-top: 1rem;
}
.form-input{
  width: 10.625rem;
  padding: 0.375rem 0.625rem;
  margin-right: 0.18rem;
  border: none;
  line-height: 25px;
  outline:none
}
.form-input::-webkit-input-placeholder {
  color: #9fa3af;
  opacity: 1;
}

.form-input::-moz-placeholder {
  color: #9fa3af;
  opacity: 1;
}

.form-input:-ms-input-placeholder {
  color: #9fa3af;
  opacity: 1;
}

.form-input::-ms-input-placeholder {
  color: #9fa3af;
  opacity: 1;
}

.form-input::placeholder {
  color: #9fa3af;
  opacity: 1;
}
.home-input a{
  right: 0.8rem;
  top: 0.6rem;
  /* height: 100%; */

  /* line-height: 25px; */
  z-index: 999;
}
.btn-zp{
  display: inline-block;
  cursor:pointer;
  height: 2.325rem;
  line-height: 2.325rem !important;
  padding: 0 !important;
  font-size: 0.75rem !important;
  min-width: 5.125rem;
  text-align: center;
}
.btn-zp:active{
  opacity: 0.6;
}

/* 搜索 */
.search{
  margin: 0 2.0625rem;
  padding-top: 1.25rem;
}
.search-input>div:first-child{
  width: 49.625rem;
  border: 1px solid #fff;
  border-right: none;
  transition: 0.4S;
  box-shadow: 0 0 6px 0 rgba(0,0,0,.13);
}
.search-input>div:first-child:hover{
  border: 1px solid #00d7c6;
  border-right: none;
}
.leabel{
 cursor: pointer;
 padding: 0.625rem 0.9375rem;
 color: #61687c;
}
.leabel span{
  padding-right: 1rem;
  font-weight: 400;
}
.search-input input{
  width: 81.9%;
  outline: none;
}
.search-but{
  width: 13.5%;
  text-align: center;
  line-height: 320%;
  cursor: pointer;
  transition: 0.3s;
}
.search-but:hover{
  opacity: 0.8;
}
.search-hot{
  padding-top: 0.5625rem;
  padding-bottom: 1.625rem;
}
.search-hot b{
  margin-right: 1.125rem;
  font-weight: 400;
  font-size: 13px;
  color: #9fa3af;
}
.search-hot a{
  margin-right: 1.375rem;
}
/* 滚动条下滑弹出搜索框 */
.eject-search{
  position: fixed;
  
  left: 0;
  height: 6.25rem;
  z-index: 500;
  transition: 2S
}
.eject-search img{
  margin-right: 1rem;
}
.out{
  /* display: none; */
  top: -7rem;
  transition: 0.3S
}
.enter{
  /* display: block; */
  top: 0;
  transition: 0.3S
}

.hy{

  border-bottom:2px solid #00d7c6;
}
.hy p{
  cursor: pointer;
  margin: 0;
  padding-right: 2.5rem;
  font-size: 0.875rem;
  /* color: #8d92a1; */
  height: 3.75rem;
  line-height: 3.75rem;
}

.zp{
  /* padding: 0 1.34375rem; */
  border-right: solid 2px #f6f6f8;
  border-bottom: solid 2px #f6f6f8;
  font-size: 0.935rem;
  color: #61687c;
}
.zp:hover{
  box-shadow: 5px 5px 20px rgba(0,0,0,.05);
  border-bottom-color: #eaebef;
  border-left-color: #edeef2;
  z-index: 99;
}
.zp>div{
  cursor: pointer;
}
.zp p{
  margin: 0;
  padding: 0.5rem 0;
}
.zp a{
  color: #61687c;
}
.pirce{
  color: #fc6c38;
}
.inf{
  font-size: 0.75rem;
  border-bottom: 1px dashed #e3e7ed;
  color: #61687c;
}
.zpz{
  margin: 0.5rem 0;
  color: #61687c;
}
.zpz img{
 width: 1.875rem;
 height: 1.875rem;
 border-radius: 50%;
 background: #f50;
 margin-right: 1rem;
}
.zpz>span{
  margin-left: 0.625rem;
  font-size: 0.75rem;
  color: #8d92a1;
}
/* 热门 */
.hot>a{
  padding: 1rem 0;
  color: #000;
  border-bottom: 1px dashed #ededed;
}
.hot img{
  width: 3.4375rem;
  height: 3.4375rem;
  border-radius: 10px;
  background: #f50;
}
.text-right span{
  color: #61687c;
  font-size: 0.75rem;
}
.hot>div{
  font-size: 0.75rem;
  padding: 0.5rem;
}
.hot>div>span:last-child{
  margin-left: 1.3rem;
}
</style>
