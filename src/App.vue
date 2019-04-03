<template>
  <div id="app">
    <div class="hader_t">
      <div class="container d-flex align-items-center h-100">
        <!-- logo -->
        <a href="javascript:;" class="hader_logo">
          <span class="d-none">BOSS直聘</span>
        </a>

        <!-- 位置定位 -->
        <div class="nav-city" v-if='Path=="/"'>
          <i class="iconfont iconiconfontzhizuobiaozhun16 zpcolor"></i>
          <span class="zpcolor">厦门</span>
          <span class="text-white">[切换城市]</span>
        </div>

        <!-- 导航 -->
        <ul class="nav">
          <li class='zpcolor'>首页</li>
          <li >职位</li>
          <li >公司</li>
          <li >APP</li>
          <li >咨询</li>
        </ul>

        <div class="top-search text-white" v-if="Path!='/'">
          <input type="text" placeholder="搜索职位、公司">
          <i class="iconfont iconsearch-1-copy"></i>
        </div>

        <!-- 登陆 -->
        <div class="index d-flex">
          <a href="javascript:;">上传简历</a>
          <a href="javascript:;">我要找工作</a>
          <a href="javascript:;">我要招聘</a>
          <a href="javascript:;" class="btna">注册</a>
          <a href="javascript:;" class="btna">登陆</a>
        </div>
        
        <!-- 侧面导航栏 -->
        <div class="sider-index" :class="scrollTop>20?'sider-top':'sider-in'">
          <ul>
            <li>
              <a href="javascript:;" class="d-block text-center">
                <i class="iconfont iconshoucang-copy"></i>
                <span class="d-block">感兴趣</span>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="d-block text-center">
                <i class="iconfont icongoutong"></i>
                <span class="d-block">已沟通</span>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="d-block text-center">
                <i class="iconfont iconpaper-airplane"></i>
                <span class="d-block">已投递</span>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="d-block text-center">
                <i class="iconfont iconrenyuanguanli"></i>
                <span class="d-block">面试</span>
              </a>
            </li>
          </ul>

          <!-- 底部箭头 -->
          <ul class="jiantou">
            <li>
              <a href="javascript:;"  @click="gotop">
                <i class="iconfont iconjiantou-shang"></i>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                反馈
              </a>
            </li>
            <li>
              <a href="javascript:;">
                微信
              </a>
            </li>
            <li>
              <a href="javascript:;">
                APP
              </a>
            </li>
          </ul>
        </div>

        
      </div>
    </div>
    <router-view/>

    <div class="footer">
      <div class=" container">
        <div class="row">
          <ul class="footer_t col-3" v-for="(item,span) of footer" :key="span">
            <p>{{item.title}}</p>
            <li v-for="(list,span) of item.list" :key="span">
              <a href="javascript:;">{{list}}</a>
            </li>
          </ul>


          <ul class="footer_t col-3">
            <p>联系BOSS直娉</p>
            <li>
              北京华品博睿网络技术有限公司
            </li>
            <li>
              公司地址 北京市朝阳区太阳宫中路8号冠捷大厦302
            </li>
            <li>
              联系电话 010-84150633
            </li>
            <li>
              违法和不良信息举报邮箱<a href="javascrpit:;">XXX@163.com</a>
            </li>
          </ul>

          <ul class="footer_t col-3 footer_t_r text-right">
            <p>

              <img src="https://static.zhipin.com/zhipin/v139/web/geek/images/footer-logo.png" alt="">
            </p>
            <li>
              企业服务热线和举报投诉 400 065 5799
            </li>
            <li>
              工作日 8:00 - 22:00
            </li>
            <li>
              休息日 9:30 - 18:30
            </li>
          </ul>
        </div>
        
      </div>

    </div>
    <!-- 友情链接 -->
    <div class="friendship container d-flex flex-wrap overflow-hidden">
      <p>友情连接:</p>
      <a href="javascript:;">慧聪网</a>
      <a href="javascript:;">慧聪网</a>
      <a href="javascript:;">慧聪网</a>
      <a href="javascript:;">慧聪网</a>
      <a href="javascript:;">慧聪网</a>
      <a href="javascript:;">慧聪网</a>
      <a href="javascript:;">慧聪网</a>
      <a href="javascript:;">慧聪网</a>
      <a href="javascript:;">慧聪网</a>
      <a href="javascript:;">慧聪网</a>
      <a href="javascript:;">慧聪网</a>
      <a href="javascript:;">慧聪网</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer:[
        {title:'企业服务',list:['职位搜索','新闻资讯','BOSS直娉APP']},
        {title:'使用与帮助',list:['用户协议与隐私政策','防骗指南','职位发布规则','使用帮助']},
      ],
      scrollTop:0,
      Path:''
    }
  },
  methods: {
    handleScroll:function () {
      this.scrollTop = document.documentElement.scrollTop
      // console.log(this.scrollTop)
    },
    // 返回顶部
    gotop:function () {
      var timer=setInterval(()=>{
        var isSpeed=Math.floor(-this.scrollTop/5);
        document.body.scrollTop=document.documentElement.scrollTop=this.scrollTop+isSpeed;
        if(this.scrollTop<=0){
          clearInterval(timer)
        }
      },25)
    },
    path:function () {
      this.Path=this.$router.history.current.path
      console.log(this.Path)
   }
  },
  created() {
     this.path()
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll)
  },
}
</script>

<style>
body{
  background: #f6f6f8 !important;
  color: #414a60 !important;
  padding: 0;margin: 0;
  font-size: 14px !important;
}
/* 小标题 */
.small-title{
  margin-top: 1rem;
  font-size: 0.9375rem;
  font-weight: 700;
}

.small-title::after{
  content: '';
  display: block;
  margin: 0.5rem 0;
  width:1.5rem;
  height: 2px;
  background: #00d7c6;
  border: 999px;
}
/* 查看更多 */
.see{
  width: 15.625rem;
  height: 2.1875rem;
  border: 1px solid #00d7c6;
  text-align: center;
  line-height: 2.0875rem;
  transition: .5S;
  margin: 1.2rem auto;
  cursor: pointer;
}
.see:hover{
  background: #00d7c6;
  color: #fff !important;
}
/* 分割线 */
.vline {
  display: inline-block;
  width: 1px;
  height: 12px;
  vertical-align: middle;
  background: #e0e0e0;
  margin: 0 0.3rem;
}
ul{
  list-style: none;
}
.zpcolor{
  color: #00d7c6 !important;
}
.zpback{
  background: #5dd5c8;
}
/* 灰色字 */
.ashcolor{
  color: rgba(255,255,255,.7);
}
/* 红色字 */
.redcolor{
  color: #fa6a43 !important;
}
/* 气泡边框 */
.bubble{
  border: 1px solid #00d7c6;
  border-radius: 25px;
  padding: 0.2rem 1rem;
}
a{
  transition:.3S;
}
a:hover{
  text-decoration:none !important;
  color:#00d7c6 !important;
}
.container{
  padding: 0 !important;
}
.hader_t{
  background-color: #202329;
  font-size: 0.875rem;
  height:3.0625rem;
}
.hader_t>div{
  position: relative;
}
.hader_t a{
  color: #fff;
}
.hader_logo{
  /* color: #05eaaf; */
  display: block;
  width: 6.875rem;
  height: 2.25rem;
  background: url(./assets/logo-2x.png) 3px 7px no-repeat;
  background-size: 6.5625rem 1.1875rem;
}
.nav-city{
  cursor:pointer;
  display: flex;
  align-items: center;
}
.nav-city>i{
  margin-left: 0.75rem;
  margin-right: 0.1875rem;
}
.nav-city span:last-child{
  margin-left: 0.625rem;
  font-size: 0.75rem;
}
.nav{
  margin-left: 0.9375rem;
  color: #fff;
}
.nav li{
  margin: 0 0.4375rem;
  padding: 0 0.375rem;
  cursor:pointer;
}
.nav li:hover{
  color: #00d7c6;
}
/* 搜索框 */
.top-search{
  border-radius: 15px;
  border: 1px solid #00d7c6;
  width: 12rem;
  margin-left: 1rem;
}
.top-search input{
  color: #fff;
  background: none;
  border: none;
  font-size: 0.75rem;
  outline: none;
  padding-left: 1rem;
}

.index{
  position: absolute;
  right: 0;
}
.index a{
  margin-right: 1.25rem;
  display: block;
}
.btna{
  padding: 0 0.625rem;
  border-radius: 15px;
  text-align: center;
  height: 1.5375rem;
  line-height: 1.5375;
  border: 1px solid #00d7c6;
}
.sider-index{
  background-color: #fff;
  height: 100%;
  position:fixed;
  right: 0;
  width: 3.75rem;
  z-index: 999;
  /* top:49px; */
  transform: 0.5S
}
.sider-index ul{
  list-style: none;
  padding: 0;
  padding-top: 0.9375rem;
}
.sider-index a{
  color: #414a60;
  font-size: 0.75rem;
  padding: 0.625rem 0;
}
.sider-index a .iconfont{
  font-size: 1.375rem;
}
.sider-top{
 top: 0;
 transition: 0.1S 
}
.sider-in{
  top: 49px;  
  transition: 0.1S 
}
.jiantou{
  margin-top: 8rem;
  text-align: center;
}
.jiantou li{
  padding: 0.625rem 0;
  line-height: 14px;
}
.jiantou a{
  padding: 0;
}
.jiantou .iconjiantou-shang{
  font-weight: 600;
}

/* 底部 */
.footer{
  background: #fff;
  padding-top: 1.875rem;
  padding-bottom: 0.625rem;
}
.footer ul{
  padding-right: 0;
}
.footer_t p{
  color: #414a60;
  font-size: 0.875rem;
}
.footer_t a,.footer_t li{
  color: #8d92a1;
  font-size:0.75rem;
  height: 1.5rem;
  white-space:nowrap;
}

.footer_t img{
  width: 5.5rem;
  height: 1rem;
}
.friendship{
  font-size: 0.75rem;
  margin: 0.8rem 0;
  height: 2.125rem;
  line-height: 2.125rem;
}
.friendship p{
  color: #4a4e52;
  }
.friendship a{
  color:#9fa3b0;
}
.friendship a,.friendship p{
  margin-left: 1.625rem;
}
</style>
