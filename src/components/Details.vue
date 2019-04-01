<template>
  <div class="details">
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
      <div class="row">
        <!-- 左侧 -->
        <div class="col-8">
          1
        </div>
        
        <!-- 右侧 -->
        <div class="col-4">
          1
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tile from './common/title'
export default {
  data() {
    return {
      welfare:['五险一金','补充医疗保险','定期体检','加班补助','年终奖','终奖','年终奖','年终奖','年终奖','年终奖','医疗','年终奖','医疗','年终奖','医疗','年终奖','医疗'],
      change:false,
    }
  },
  components:{
    Tile
  },
  methods: {
    welFare:function(a){
      this.change=a
    }
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
</style>