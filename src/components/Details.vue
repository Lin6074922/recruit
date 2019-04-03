<template>
  <div class="details">
    <!-- 职位详情头部 -->
    <div class="bg-detail">
      <div class="container">

        <div class="row">
          <!-- 左侧 -->
          <div class="col-8">
            <span class="d-block ashcolor size">最新</span>
            <Tile></Tile>
            <div class="ashcolor size ">
              上海
              <span class=" pl-2 pr-2">·</span>
              3-5年
              <span  class=" pl-2 pr-2">·</span>
              本科
            </div>
            <div class="d-flex mt-3 welfare size position-relative">

              <div class="bubble mr-4 zpcolor" v-for="(item,index) of welfare" :class="index<5?'':'d-none'" :key="index" >{{item}}</div>


              <div class="bubble zpcolor butt" v-if="welfare.length>5" @mouseover="welFare(true)" @mouseout="welFare(false)" >...
                </div>
              <!-- 用于显示超出部分的福利 -->
              <div class=" bg-white position-absolute d-flex ejo" v-if="change">

                <div class="bubble zpcolor mr-3 mt-2" v-for="(item,index) of welfare" :key="index" :class="index>=5?'':'d-none'">{{item}}</div>

              </div>
            </div>
          </div>

          <!-- 右侧 -->
          <div class="col-4">
            <div class="see zpback text-white w-100 ">
              立即沟通
            </div>
            <div class="d-flex justify-content-between mt-5">
              <router-link to="" class="redcolor">
                <i class="iconfont icontianxie"></i>
                填写在线简历
              </router-link>
              <router-link to="" class="redcolor">
                <i class="iconfont iconshangchuan"></i>
                上传简历附件
              </router-link>
            </div>
          </div>

        </div>

      </div>
     
    </div>
    <!-- 招聘详情 -->
    <div class=" container">
      <div class="row recruiter">
        <!-- 左侧 -->
        <div class="col-8">
          <!-- 招聘者信息 -->
          <div class="d-flex justify-content-between">
            <div class="d-flex align-items-center">
              <div class="recruiter-img mr-4">
                <img src="../assets/detail-bg.jpg" alt="">
              </div>
              <div class=" recruiter-name">
                <h5 class=" text-dark">王先生</h5>
                研发副总监<span class="pl-3 pr-3">·</span>刚刚在线
              </div>
            </div>

            <div>
              <a href="javascript:;" class="pr-3 recruiter-name iconfont iconlianjie">微信扫码分享</a>
              <a href="javascript:;" class="pr-3 recruiter-name iconfont iconshoucang-copy">感兴趣</a>
              <a href="javascript:;" class="pr-3 recruiter-name iconfont iconjinggao">举报</a>
            </div>

          </div>
          
          <div class=" small-title">
            职位描述
          </div>

          <!-- 职位描述 -->
          <div class="introduce">
            <span>
              我们正在寻找深度学习的专家，一起来研发人机交互，自然语言理解的交互系统。多轮对话，意图理解，文本生成，AI通过文本/语音/视频方式和人沟通，模拟人类思考方式等人工智能领域的前沿技术。
            </span>
            <span>
              工作职责：
            </span>
            <span>
              解决自然语言处理的交互系统等实际问题。
            </span>
            <span>
              跟踪国内外最新算法的研究和应用
            </span>
            <span>
              任职资格：
            </span>
            <span>
              硕士，博士；计算机、图像，语音等相关专业优先
            </span>
            <span>
              能阅读英文论文，使用tensorflow/pytorch实现论文算法
            </span>
            <span>
              熟悉 word2vec, CNN, RNN, GAN, Attention, Transformer, Bert
            </span>
            <span>
              熟悉 transfer learning，fewshot learning优先
            </span>
            <span>
              熟悉 Python
            </span>
            <span>
              优秀的分析问题和解决问题的能力，能够把合理的思路成功应用于业务实践
            </span>
          </div>
          <div class="small-title">
            团队介绍
          </div>
          <!-- 团队介绍 -->
          <div class="introduce">
            <span>
              互联网金融行业技术中心cto直属研究院，目前900多人，成员为211以上本科，位于西二旗互联网创新中心，设施完善，东南方向和地铁口有多趟班车，弹性工作时间，健身房，瑜伽室，加班少，加班可调休。
              主要做互联网金融风控反欺诈，智能客服，电销，智能贷后资产管理，用户画像，智能语音应用，知识图谱
            </span>
          </div>
          <div class="small-title">
            公司介绍
          </div>
          <!-- 公司介绍 -->
          <div class="introduce">
            <span>
              恒昌是互联网金融P2P公司，排名前三，5年的时间，高速发展，累计交易额超过千亿，目前有4万多人，公司全国覆盖300多城市，实力很强！
            </span>
            <span>
              一个互联网金融公司的长远发展，除了技术至关重要，风控、财务、战略也起到了决定性的作用。公司非常重视人才引进，恒昌的高管团队非常豪华，几乎都是国内外名牌大学博士硕士毕业。
            </span>
            <router-link class="zpcolor float-right" to="">查看全部</router-link>
          </div>

          <div class="small-title">
            竞争力分析
          </div>
          <!-- 竞争力分析 -->
          <div class="compete mb-4">
            <p>综合竞争力分析</p>
            <p class="text-center">你在？位置</p>
            <div class="d-flex justify-content-between">
              <span class="lv1"></span>
              <span class="lv2"><em>一般</em></span>
              <span class="lv3"><em>良好</em></span>
              <span class="lv4"><em>优秀</em></span>
              <span class="lv5"><em>极好</em></span>
            </div>
            <div class="mt-4 pt-2 ranking">
              个人综合排名：在<span class=" d-inline zpcolor">237</span>人中排第<span class="d-inline zpcolor">35</span>
              <router-link class="zpcolor float-right" to="">查看完整个人排名</router-link>
            </div>
          </div>

          <div class="small-title">
            工商信息
          </div>
          <!-- 工商信息 -->
          <div class="business">
            <p class="d-block">北京恒昌利通投资管理有限公司</p>
            <div class="d-flex justify-content-between">
              <p>
                <span>法人代表：</span>宋伟
              </p>
              <p>
                <span>注册资金：</span>5000W
              </p>
              <p>
                <span>成立时间：</span>2011-05-25
              </p>
            </div>
            <div class="d-flex justify-content-between">
              <p>
                <span>企业类型：</span>有限责任公司（自然人投资或控股）
              </p>
              <p>
                <span>
                  经营状态：
                </span>开业
              </p>
              <router-link class="d-block zpcolor" to="">查看全部</router-link>
            </div>
          </div>
          
          <div class="small-title">工作地址</div>
          <!-- 工作地址 -->
          <div>
            <div class="map-tit"> 
              <i class="iconfont iconiconfontzhizuobiaozhun16 pl-3"></i>
              <span>侨米科技</span>
            </div>
            <!-- 地图 -->
            <div class="map" id="map">
            </div>
          </div>

          <!-- 推荐职位 -->
          <div>
            <div class="pt-4 pb-4">推荐职位</div>
            <div class="recommend position-relative">
              <ul class="d-flex flex-wrap flex-column h-100 w-100 p-0 position-absolute" :style="'left:'+(l*-41)+'rem'">

                <li class="pl-3 pr-3 mt-3" v-for="(item,index) of recommend" :key="index">
                  <router-link to="">
                    <p class="d-flex justify-content-between">
                      <span>{{item.name}}</span>
                      <span class="redcolor ">{{item.price}}</span>
                    </p>
                    <p class="small recolor pt-2">{{item.gs}}</p>
                  </router-link>
                </li>
                
              </ul>
            </div>
            <div class="tabbal text-center">
              <span v-for="(item,index) of leng" :key="index" @mouseover="talbar(index)" :class="index==l?'zpback':''"></span>
            </div>
          </div>


        </div>

        
        <!-- 右侧 -->
        <div class="col-4">
          <div class="company-details">
            <p class="companyp">公司基本信息</p>
            <div>
              <img src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20180130/4eef4a1cfe702a18b96855ac863ba54430a2ff552c77b931a3dd6f1ce1267649.jpg?x-oss-process=image/resize,w_120,limit_0" alt="">
              <span>蚂蚁金服</span>
            </div>
            <div class="icon">
              <i class="iconfont icontouzi-"></i>
              <span class="pl-4">C轮</span>
            </div>

            <div class="icon">
              <i class="iconfont iconrenyuan"></i>
              <span class="pl-4">1000人</span>
            </div>

            <div class="icon">
              <i class="iconfont icontype"></i>
              <span class="pl-4">互联网</span>
            </div>

            <div class="icon">
              <i class="iconfont icondalou3"></i>
              <a href="https://www.baidu.com">
                <span class="pl-4">https://www.baidu.com</span>
              </a>
            </div>

          </div>

          <!-- 相似职位 -->
          <p class="companyp">相似职位</p>
          <ul class="similar p-0">
            <li v-for="(item,index) of similar" :key="index">
              <img class=" float-right"  alt="">
              <p>
                <router-link to="">{{item.name}}</router-link>
                <span class="redcolor pl-3">{{item.price}}</span>
              </p>
              <p class="recruiter-name">
                {{item.company}}
                <span class="pl-3 pr-3">·</span>
                {{item.city}}
              </p>
            </li>
          </ul>
          <div class="see">查看更多相似职位</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BMap from 'BMap'
import Tile from './common/title';
import td from '../assets/td.png'
import $ from 'jquery'
export default {
  data() {
    return {
      welfare:['五险一金','补充医疗保险','定期体检','加班补助','年终奖','终奖','年终奖','年终奖','年终奖','年终奖','医疗','年终奖','医疗','年终奖','医疗','年终奖','医疗'],
      change:false,
      recommend:[
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
        {name:'高级测试工程师',price:'20K-40K',gs:'蚂蚁金服'},
      ],
      similar:[
        {name:'增长专家',price:'20K-40K',company:'龙之力',city:'成都'},
        {name:'增长专家',price:'20K-40K',company:'龙之力',city:'成都'},
        {name:'增长专家',price:'20K-40K',company:'龙之力',city:'成都'},
        {name:'增长专家',price:'20K-40K',company:'龙之力',city:'成都'},
        {name:'增长专家',price:'20K-40K',company:'龙之力',city:'成都'},
      ],
      leng:5,
      l:0
    }
  },
  components:{
    Tile
  },
  methods: {
    welFare:function(a){
      this.change=a
    },
    // 添加地图
    createMap () {
      /* eslint-disable */
      // 创建Map实例
      var map = new BMap.Map("map")
      // 创建标注
      var pt = new BMap.Point(118.071084, 24.598597);//创建标注坐标
      var myIcon = new BMap.Icon(td, new BMap.Size(24,24));//创建标注图片
      var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
      // 初始化地图,设置中心点坐标和地图级别
      map.centerAndZoom(new BMap.Point(118.071084,24.598597),16
      )
      //添加地图类型控件
      // map.addControl(new BMap.MapTypeControl({
      //   mapTypes:[BMAP_NORMAL_MAP]
      // }));
      // map.addControl(new BMap.ScaleControl());
      // 设置地图显示的城市 此项是必须设置的
      map.setCurrentCity("厦门")
      //将标注添加到地图上
      map.addOverlay(new BMap.Marker(pt,{icon:myIcon})); 
      //开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true);
      // 禁止鼠标拖动
      // map.disableDragging(); 
      map.enableContinuousZoom(); 
    },
    talbar(index){
      this.l=index
    },
    len(){
      this.leng=Math.ceil(this.recommend.length/10)
    },
    
  },
  created() {
    this.welFare()
    },
  mounted() {
    this.createMap();
    this.len();
  },
}
</script>

<style>
.details{
  background-color: #fff;
}
.bg-detail{
  height: auto;
  padding: 1.5rem 0;
  background: url(../assets/detail-bg.jpg)
}
.size{
  font-size: 0.875rem;
}
/* .welfare{
  max-width: 100px;
  overflow: hidden;
} */
.butt{
  cursor: pointer;
}
.butt:hover{
  opacity: 0.5;
  background: #fff;
}
.ejo{
width: 100%;
padding: 1rem;
top: 2.5rem;
left: 0;
border-radius: 10px;
z-index: 500;
flex-wrap: wrap;
}
.recruiter{
  margin-top: 1.25rem;
  padding-top: 2.125rem;
}

.recruiter-img img{
  width: 4.5625rem;
  height: 4.5625rem;
  border-radius: 100%;
}
.recruiter-name{
  color: #9fa3af;
  font-size: 0.875rem !important;
}
.introduce{
  font-size: 0.875rem;
  color: #61687c;
  line-height: 36px;
}
.introduce span{
  display: block;
}
.compete{
  font-size: 0.875rem;
  color: #51586d;
}
.compete p{
 margin: 0;
}
.compete span{
  display: block;
  position: relative;
  height: 0.6rem;
  margin: 0 1px;
}
.lv1{
  width: 15%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
  background: #5dd5c8;
}
.lv2,.lv3,.lv4{
  width: 24%;
}
.lv2{
  background: #62e1d3;
}
.lv3{
  background: #72e7c6;
}
.lv4{
  background: #85e3f4
}
.lv5{
  width: 13%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
   background: #3dccfc;
}
.compete span em{
  position: absolute;
  top: 0.8rem;
  left: -1rem;
  color: #8e93a2;
  font-size: 0.875rem;
}
.ranking span{
  background: #fff !important;
  filter: blur(2px)
}
.business span{
  color: #8d92a1;
  margin-right: 0.3rem;
}
.map{
 width: 100%;
 height: 14rem;
 position: relative;
}
.map-tit{
  height: 3rem;
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
}
/* 推荐职位 */
.recommend{
  border: 1px solid #f5f5f5;
  height: 22.5rem;
  overflow: hidden;
}
.recommend ul{
  transition: 0.8S;
}
.recommend li{
  width:50%;
  height: 15%;
  font-size: 0.9rem;
}
.recommend p{
  margin: 0;
}
.recommend a{
  color: #414a60;
}
.recolor{
  color: #8d92a1
}

.tabbal{
  border: 1px solid #f5f5f5;
  border-top: none;
}
.tabbal span{
  display:inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid #5dd5c8;
  margin: 0 0.3rem;
  margin-top: 0.3rem;
  transition: 0.3S;
}
.tabbal span:hover{
  background-color: #5dd5c8;
}
.companyp{
  font-size: 1.125rem;
  color: #414a60;
}
.company-details img{
  height: 3.75rem;
  padding-right:1rem;
}
.icon{
  margin: 1rem 0;
}
.icon a{
  color: #414a60;
}
.similar{
  font-size: 1rem;
  border-bottom: 1px solid #f5f5f5;
}
.similar img{
  width: 3.75rem;
  height: 3.75rem;
  background: #85e3f4;
  border-radius: 10px;
}
.similar a{
  color: #414a60;
}
</style>