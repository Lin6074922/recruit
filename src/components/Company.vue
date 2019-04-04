<template>
  <div id="Company">
    <div class="com-title">

      <div class=" container ">

        <div class="d-flex justify-content-between">
          <!-- 左侧 -->
          <div class="title d-flex">
            <img :src="tit_img" alt="">
            <div class="title_text ml-4">
              <p>腾讯</p>
              已上市<span class="pl-3 pr-3">·</span>10000人以上<span class="pl-3 pr-3">·</span>互联网
            </div>
          </div>
          <!-- 右侧 -->
          <div>
            <div class="d-flex justify-content-end">
              <router-link to="" class="text-center boss_text">
                <h1 >2392</h1>
                <p class="small">在招岗位</p>
              </router-link>
              <span class="boss_span"></span>
              <div class="text-center boss_text">
                <h1 >481</h1>
                <p class="small">位BOSS</p>
              </div>
            </div>

            <div>
              <router-link to=""  class="redcolor ">
                <i class="iconfont icontianxie"></i>
                填写在线简历
              </router-link>

              <router-link to=""  class="redcolor pl-5">
                <i class="iconfont iconshangchuan"></i>
                上传简历附件
              </router-link>
            </div>
          </div>

        </div>

        <span class="jj zpcolor d-inline-block">
          公司简介
        </span>
      </div>

    </div>
    <div class="bg-white">
      <div class="company container">
        
        <div class="row">
          <!-- 左侧 -->
          <div class="col-8">

            <div class="small-title">
              公司简介
            </div>
            <div class='introduce'>
              <span>
                深圳市腾讯计算机系统有限公司成立于1998年11月，由马化腾、张志东、许晨晔、陈一丹、曾李青五位创始人共同创立。 是中国最大的互联网综合服务提供商之一，也是中国服务用户最多的互联网企业之一。
              </span>
              <span>
                腾讯多元化的服务包括：社交和通信服务QQ及微信/WeChat、社交网络平台QQ空间、腾讯游戏旗下QQ游戏平台、门户网站腾讯网、腾讯新闻客户端和网络视频服务腾讯视频等。
              </span>
              <span>
                2004年6月16日，腾讯公司在香港联交所主板公开上市（股票代号00700），董事会主席兼首席执行官是马化腾。
              </span>
            </div>
            <div class="small-title">
              工商信息
            </div>
            <h6>腾讯科技（深圳）有限公司</h6>
            <div class="business">
              <div class="d-flex">
                <p class="mr-5 pr-5">
                  法人代表: <span>马化腾</span>
                </p>
                <p class="pl-5">
                  注册资金: <span>200万</span>
                </p>
              </div>
              <p>
                成立时间：<span>2000-02-24</span>
              </p>
              <p>
                企业类型：<span>有限责任公司（台港澳法人独资）</span>
              </p>
              <p>
                经营状态：<span>存续（在营、开业、在册））</span>
              </p>
              <p>
                注册地址：<span>深圳市南山区高新区科技中一路腾讯大厦35层</span>
              </p>
              <p>
                统一信用代码：<span>9144030071526726XG</span>
              </p>
              <p>
                经营范围：<span>从事计算机软硬件的技术开发、销售自行开发的软件;计算机技术服务及信息服务;计算机硬件的研发、批发;玩具设计开发;玩具的批发与零售（许可审批类商品除外）;商品的批发与零售（许可审批类商品除外）;动漫及衍生产品设计服务;电子产品设计服务。（特许经营除外;以上项目不涉及外商投资准入特别管理措施;不涉及国营贸易管理商品;涉及配额、许可证管理商品的,按国家有关规定办理申请）。</span>
              </p>
            </div>
            <!-- 公司地址 -->
            <div class="small-title">公司地址</div>
            <div class="pb-4">
              <div class="map-tit mt-3"> 
              <i class="iconfont iconiconfontzhizuobiaozhun16 pl-3"></i>
              <span>腾讯北京总部大楼</span>
            </div>
              <div id="map"></div>
            </div>

          </div>

          <!-- 右侧 -->
          <div class="col-4 box">
            <div class="small-title">公司环境</div>

            <!-- 轮播图 -->
            <div class="swiper position-relative">
              <div class=" position-absolute d-flex swiper_div" :style="'left:'+(swiper_index*-19.6)+'rem'">
                <div v-for="(item,index) of swiper_img" :key="index">
                  <img :src="item" alt="">
                </div>
                
              </div>
              

            </div>

            <div class="small-title ">其它招聘BOSS</div>

            <div class="other_boss ml-2 mt-4">
              <ul>
                <li class="d-flex" v-for="(item,index) of open_boss" :key="index">
                  <img :src="item.img" alt="" class="mr-3">
                  <div>
                    <router-link to="" class="d-block mb-2">
                      {{item.name}}<span class="vline"></span>{{item.position}}
                    </router-link>
                    正在招聘 “{{item.zpposition}}”  等 {{item.number}} 个职位
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import td from '../assets/td.png'
export default {
  data() {
    return {
      tit_img:require('../assets/companyHeadImg.jpg'),
      swiper_img:[require('../assets/companyHeadImg.jpg'),require('../assets/companyHeadImg.jpg'),require('../assets/companyHeadImg.jpg')],
      swiper_index:0,
      open_boss:[
        {name_id:1,name:'史先生',position:'招聘者',zpposition:'网络安全',number:2,img:require('../assets/companyHeadImg.jpg')},
        {name_id:2,name:'刘先生',position:'产品经理',zpposition:'UGC产品运营',number:6,img:require('../assets/companyHeadImg.jpg')},
        {name_id:3,name:'李女士',position:'hr',zpposition:'售后服务',number:3,img:require('../assets/companyHeadImg.jpg')},
        {name_id:4,name:'曾女士',position:'HR',zpposition:'云工程师',number:5,img:require('../assets/companyHeadImg.jpg')},
        {name_id:5,name:'林先生',position:'副总裁',zpposition:'网络安全',number:2,img:require('../assets/companyHeadImg.jpg')},
      ]
    }
  }, 
  methods: {
    // 添加地图
    createMap () {
      /* eslint-disable */
      // 创建Map实例
      var map = new BMap.Map("map")
      // 创建标注
      var pt = new BMap.Point(116.279767,40.046512);//创建标注坐标
      var myIcon = new BMap.Icon(td, new BMap.Size(24,24));//创建标注图片
      var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
      // 初始化地图,设置中心点坐标和地图级别
      map.centerAndZoom(pt,16)
      //添加地图类型控件
      // map.addControl(new BMap.MapTypeControl({
      //   mapTypes:[BMAP_NORMAL_MAP]
      // }));
      // map.addControl(new BMap.ScaleControl());
      // 设置地图显示的城市 此项是必须设置的
      map.setCurrentCity("北京")
      //将标注添加到地图上
      map.addOverlay(new BMap.Marker(pt,{icon:myIcon})); 
      //开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true);
      // 禁止鼠标拖动
      // map.disableDragging(); 
      map.enableContinuousZoom(); 
    },
    // 轮播图
    swiper(){
      if (this.swiper_index>this.swiper_img.length-2) {
        this.swiper_index=0
      }else{
        this.swiper_index+=1
      }
    }
  },
  mounted() {
    this.createMap();
    setInterval(this.swiper,3000)
  },
 
}
</script>

<style scoped>
.com-title{
  background-color: #444c5f;
  padding-top: 1.5rem;
}
.com-title img{
  border-radius: 13px;
  width: 6.4375rem;
  height: 6.4375rem;
}
.title_text{
  color: rgba(255,255,255,.7);
}
.title_text p{
  margin:0;
  /* font-weight: 700; */
  color: #fff;
  font-size: 2rem;
}
.boss_text{
  color: #fff;
}

.boss_span{
  height: 4rem;
  width: 1px;
  background-color: #f5f5f5;
  opacity: 0.4;
  margin: 0.5rem 1.5rem;
}
.jj{
  cursor: pointer;
  padding:  1rem 0;
  border-bottom: 3px solid #00d7c6;
  position: relative;
}
.business{
  border-radius: 15px;
  border: 1px solid #444c5f;
  padding: 1rem;
  color: #999;
}
.business span{
  color: #444c5f;
}

#map{
  width: 100%;
  height: 13rem;
}
.map-tit{
  height: 3rem;
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
}
.box{
  border-left: 1px solid #e0e0e0;
  padding-left: 0;
}
/* 轮播 */
.swiper{
  width: 100%;
  height: 10rem;
  overflow: hidden;
  /* background: #f49; */
}
.swiper_div{
  transition: 1s
}
.swiper div{
  width: 100%;
  height: 100%;
}
.swiper img{
  width: 19.583125rem;
  height: 100%;
}
.other_boss{
  color: #999;
}
.other_boss li{
  padding: 1rem 0;
  border-bottom:1px solid #f5f5f5;

}
.other_boss a{
  font-size: 1rem;
  color: #444c5f;
}
.other_boss img{
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 100%;
  background-color: #00d7c6;
}
</style>
