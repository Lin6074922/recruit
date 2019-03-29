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
              <a href="javascript:;" class=" zpcolor position-absolute">获取</a>
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
          <a href="javascript:;" class="zpcolor d-block">Java</a>
          <a href="javascript:;" class="zpcolor d-block">Java</a>
          <a href="javascript:;" class="zpcolor d-block">Java</a>
          <a href="javascript:;" class="zpcolor d-block">Java</a>
          <a href="javascript:;" class="zpcolor d-block">Java</a>
          <a href="javascript:;" class="zpcolor d-block">Java</a>
          <a href="javascript:;" class="zpcolor d-block">Java</a>
        </div>

      </div>

    </div>
    <!-- 招聘信息 -->
    <div class=" container">
      <!-- 行业 -->
      <div class="d-flex zp">
        <p :class="span==0?'zpcolor':''" v-for="(item,span) of industry" :key="span">{{item}}</p>
      </div>
      <!-- 招聘信息 -->
      <div class="row">
        <div class=" col-4">
          1
        </div>
        
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      industry:['IT·互联网','金融','房地产·建筑','教育培训','汽车','娱乐传媒','医疗健康','法律咨询']
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* 顶部 */
.home-top>.container>img{
  height: 7.5rem;  
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
  width: 83.9%;
  outline: none;
}
.search-but{
  width: 13.5%;
  text-align: center;
  line-height: 250%;
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
.zp{

  border-bottom:2px solid #00d7c6;
}
.zp p{
  cursor: pointer;
  margin: 0;
  padding-right: 2.5rem;
  font-size: 0.875rem;
  /* color: #8d92a1; */
  height: 3.75rem;
  line-height: 3.75rem;
}
</style>
