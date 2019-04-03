<template>
  <div class="box" id="navsArr">
		<div class="header">
			<div class="navs" v-for="navs in navsArr" :key="navs">
				<span>{{navs.typeName}}</span>
				<div class="items"><a href="" v-for="navItem in navs.navArr" :key="navItem">{{navItem}}</a></div>
			</div>
		</div>
		<div class="selected selectedFixed">
			<div class="fixed"> 
				<span id="span0" style="color:#000">根据求职期望</span>
			    <span id="span">{{selectedObj.city}}</span>|
			    <span id="span">{{selectedObj.jobName}}</span>|
			    <span id="span">{{selectedObj.salary}}</span>
			     <span style="color:#000">推荐</span>
			    <span id="number">共{{selectedObj.number}}+公司</span>
			</div>
		</div>
		<div class="companyContent">
			<ul>
				<li v-for="company in companyDataArr" :key="company">
					<a href="">
						<img :src="company.img"/>
					    <h4>{{company.companyName}}</h4>
					    <p id="p1">{{company.nature}} | {{company.type}}</p>					    
					</a>
					<p id="p2">热招：<span>{{company.jobName}}</span> | {{company.salary}}</p>
				</li>
			</ul>
		</div>
		<div class="pages">
			<div class="pageItem">
				<a href="javascript:void(0);" @click="pagination(preIndex)" class="preA"><</a>
				<a href="javascript:void(0);" @click="pagination(n)" v-for="n in pageIndex" :key="n">{{n}}</a>
				<a href="javascript:void(0);"  @click="pagination(backIndex)" class="preA">></a>
			</div>
		</div> 
		<div class="footNav">
			<div class="cityRecord">
				<h4>城市招聘</h4>
			    <a href="" v-for="item in cityRecordArr" :key="item">{{item}}</a>
				<h4>热门行业</h4>
			    <a href="" v-for="item in hotIndustryArr" :key="item">{{item}}</a>
			</div>
		</div>  
	</div>
</template>

<script>
import '../../public/css/companyList.css'
// import '../../public/js/companyList.js'
import $ from 'jquery'
export default {
  data() {
    return {
      companyDataArr:[],
				cityRecordArr:[],
				hotIndustryArr:[],
				navsArr:[
				    
				],	
				selectedObj:{},
				companyArr:[
				    
				],
				pageIndex:1,
				preIndex:null,
				backIndex:null,
    }
  },
  			methods:{
				// 想服务器拉取页面所有需要的数据函数
				db_getAllArrData:function(){
					// 城市招聘数组
					this.cityRecordArr=['商洛招聘','达州招聘','锡林郭勒招聘','肇庆招聘','大庆招聘','昭通招聘','忻州招聘','襄阳招聘','延安招聘','阿坝招聘','安康招聘','阿拉尔招聘','临沧招聘','琼中招聘','眉山招聘','德阳招聘','阳泉招聘','萍乡招聘','营口招聘','广元招聘','南昌招聘','鄂尔多斯招聘','潮州招聘','东营招聘','台湾招聘','济源招聘','琼海招聘','三门峡招聘','伊春招聘','鹰潭招聘'];
					// 热门行业数组
					this.hotIndustryArr=['新零售招聘','其他专业服务招聘','政府/公共事业招聘','咨询招聘','银行招聘','信息安全招聘','原材料及加工/模具招聘','美容/美发招聘','翻译招聘','广播/影视招聘','环保招聘','矿产/地质招聘','社交网络招聘','音乐/视频/阅读招聘','智能硬件招聘','酒店招聘','其他服务业招聘','学前教育招聘','法律招聘','化工招聘','新能源招聘','通信/网络设备招聘','农/林/牧/渔招聘','建材招聘','信托招聘','移动互联网招聘','电子/半导体/集成电路招聘','计算机硬件招聘','企业服务招聘','建筑设计招聘'];
					// 头部需要的筛选公司条件数据
					this.navsArr=[{typeName:'公司地点:',navArr:['全国','北京','广州','上海','广州','深圳','杭州','天津','西安','苏州','武汉','厦门','长沙','城都','郑州','重庆','全部城市']},
				    {typeName:'行业类型:',navArr:['不限','电子商务','游戏','媒体','广告营销','数据服务','医疗健康','生活服务','O2O','旅游','分类信息','音乐/视频/阅读','在线教育','社交网络','人力资源服务','企业服务','信息安全','智能硬件','移动互联网','互联网','计算机软件','通信/网络设备','广告/公关/会展','互联网金融','物流/仓储','贸易/进出口','咨询','工程施工','汽车生产','其他行业']},
				    {typeName:'融资阶段:',navArr:['不限','未融资','天使轮','A轮','B轮','C轮','D轮及以上','已上市','不需要融资']},
				    {typeName:'公司规模:',navArr:['不限','0-20人','20-99人','100-499人','500-999人','1000-9999人','10000人以上']},];
				    // 筛选所需要的条件，对象
					this.selectedObj={city:'厦门',jobName:'web前端',salary:'6K-8k',number:28};
					// 公司简介列表数据
					this.companyArr=[{img:'./images/companyHeadImg.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg1.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg1.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg1.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg1.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg1.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg1.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg2.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg2.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg2.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg2.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg2.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg3.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg3.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg3.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg3.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg3.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg3.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg2.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg2.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg2.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg2.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg2.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg3.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg3.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:'./images/companyHeadImg3.jpg',companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},];
				},
				pagination:function(index){
					this.companyDataArr=[];
					if(index>1){
						this.preIndex=index-1;
					}else{
						this.preIndex=1;
					}
					if(index<this.pageIndex){
						this.backIndex=index+1;
					}else{
						this.backIndex=this.pageIndex;
					}				
					for (var i=0;i<this.companyArr.length;i++){
						if(Math.ceil((i+1)/12)==index){
							this.companyDataArr.push(this.companyArr[i]);
						}else{
						}						
					}
				}
			},
      created(){
				this.db_getAllArrData();
				this.pageIndex=Math.ceil(this.companyArr.length/12);
        this.pagination(1)
        $(document).ready(function(){
        var scrollHeight=$('.selected').offset().top;
        console.log(scrollHeight);
        $(window).scroll(function() { 
        console.log($(window).scrollTop()); 
            if($(window).scrollTop()>scrollHeight){
              $('.selected').addClass('selectedFixed');
            }else{
              $('.selected').removeClass('selectedFixed');       	
            }
    })	
})
			}
}
</script>

<style >
  
</style>
