<template>
  <div class="box" id="navsArr">
		<div class="header">
			<div class="navs" v-for="navs in navsArr" :key="navs">
				<span>{{navs.typeName}}</span>
				<div class="items"><a href="" v-for="navItem in navs.navArr" :key="navItem">{{navItem}}</a></div>
			</div>
		</div>
		<div class="selected ">
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
						<!-- <img :src="company.img"> -->
                        <img :src="company.img" alt="">
					    <h4>{{company.companyName}}</h4>
					    <p id="p1">{{company.nature}} | {{company.type}}</p>					    
					</a>
					<p id="p2">热招：<span>{{company.jobName}}</span> | {{company.salary}}</p>
				</li>
			</ul>
		</div>
		<div class="pages">
			<div class="pageItem">
				<a href="javascript:void(0);" @click="pagination(preIndex)" class="preA">&lt;</a>
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
import $ from 'jquery'
// import {realconsole} from '../../public/js/companyList.js'

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
					this.companyArr=[{img:require('../assets/companyHeadImg.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg1.png'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg1.png'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg1.png'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg1.png'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg1.png'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg1.png'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg2.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg2.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg2.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg2.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg2.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg3.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg3.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg3.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg3.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg3.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg3.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg2.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg2.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg2.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg2.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg2.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg3.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg3.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
                    {img:require('../assets/companyHeadImg3.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
                    {img:require('../assets/companyHeadImg2.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg2.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg3.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg3.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
                    {img:require('../assets/companyHeadImg3.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
                    {img:require('../assets/companyHeadImg2.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg2.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg3.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
				    {img:require('../assets/companyHeadImg3.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
                    {img:require('../assets/companyHeadImg3.jpg'),companyName:'网宿科技',nature:'已上市',type:'互联网',jobName:'前端开发',salary:'11K-15K'},
                    ];
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
						if(Math.ceil((i+1)/16)==index){
							this.companyDataArr.push(this.companyArr[i]);
						}else{
						}						
					}
				},
			},
      created(){
				this.db_getAllArrData();
				this.pageIndex=Math.ceil(this.companyArr.length/16);
				this.pagination(1)
				// this.ac()
        $(document).ready(function(){
        var scrollHeight=$('.selected').offset().top;
        // console.log(scrollHeight);
        $(window).scroll(function() { 
        // console.log($(window).scrollTop()); 
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

<style scoped>
*{
	margin:0;
	padding: 0;
	list-style:none;
}
.box{
	width:100%;
	height:100%;
	background: #F6F6F8;
}
a{
	text-decoration:none;
	color:#000;
}
.box .header{
	width: 1000px;
    margin: 0 auto;
    padding: 10px 22px 30px 22px;
    background-color: #fff;
}
.box .header .navs{
	clear:both;
	margin-top:20px;
	font-size:13px;
}
.box .header span{
	float: left;
    width: 70px;
    color: #414a60;
}
.box .header .items{
	display: block;
    width: calc(100% - 70px);
    margin-left: 70px;
    font-size: 13px;
}
.header .navs .items a:first-child{
	color:#00c2b3;
}
.header .items a{
	display: inline-block;
    margin-right: 6px;
    padding:5px 8px;
    color: #61687c;
}
.header .items a:hover{
	color:#00c2b3;
}
.selected{
	width: 1000px;
    height: 44px;
    margin:0 auto;
    line-height:44px;
    padding: 0 22px;
    background-color: #fff;
    font-size: 12px;
    color:#53cac3;
}
.selectedFixed{
    width:100%;
    background: #fff;
    position:fixed;
    top:0;
    left:0;
    /*left:calc(50% - 500px);*/
}
.selectedFixed .fixed{
    width:1000px;
    margin:0 auto;
}
.selected #span0{
	display: inline-block;
    cursor: pointer;
    position: relative;
    min-height: 18px;
}
.selected #span0:before{
    content: "\2714";
    background-color: #53cac3;
    width: 12px;
    height: 12px;
    border: 0;
    background-position: -48px -144px;
    border-color: #53cac3;
    color: #fff;
    margin-right:8px;
}
.selected #span0:after{
	content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    display: inline-block;
    vertical-align: sub;
    z-index: 1;
    left: -4px;
    margin-top: 1px;
    border-radius: 50%;
}
.selected #span{
	margin:0 10px;
}
.selected #number{
    float: right;
    height: 44px;
    line-height: 44px;
    color: #8d92a1;	
}
.companyContent{
	width: 1000px;
    margin: 0 auto;
}
.companyContent ul{
	  height: auto;
    overflow: hidden;
}
.companyContent ul li{
    height: 140px;
    width: 24.8%;
    float: left;
    background:#fff;
    margin-right:0.2%;
    font-size:13px;
    margin-top:3px;
}
.companyContent ul li:hover{
	box-shadow: 0 2px 8px rgba(0,0,0,.1);
}

.companyContent ul li a{
	width: 206px;
    height: 94px;
    margin: 0 auto 0 auto;
    padding-top: 20px;
    border-bottom: dashed 1px #ededed;
    color: #414a60;
    display: block;
}
.companyContent ul li img{
	height: 55px;
    width: 55px;
    float: left;
    border-radius: 10px;
    border: solid 1px #f2f5fa;
}
.companyContent ul li h4{
	height: 25px;
    line-height: 25px;
    font-size: 16px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-align:right;
    text-overflow: ellipsis;
}
.companyContent ul li #p1{
	  height: 40px;
    line-height: 41px;
    color: #898e9d;
    font-size: 12px;
    /*display: inline-block;*/
    white-space: nowrap;
    text-align:right;
}
.companyContent ul li #p2{
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 205px;
    margin: 0 auto;
    color: #8d92a1;
    line-height: 42px;
    font-size: 12px;
}
.companyContent ul li p span{
	    color: #00c2b3;
    text-decoration: none;
    display: inline-block;
    vertical-align: top;
    max-width: 100px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
/*分页布局*/
.pages{
    width:1000px;
    margin:0 auto;
    padding-top:7px;
    height:50px;
    background: #fff;
    text-align: center;
    margin-top:10px;
}
.pages .pageItem{
    min-width:100px;
    margin-top:10px;
    margin-left:28%;
}
.pages .pageItem a{
    float:left;
    min-width: 28px;
    height: 24px;
    line-height: 24px;
    margin: 0 10px;
    text-align: center;
    background: #fff;
    border: 1px solid #fff;
    vertical-align: middle;
}
.pages .pageItem .preA{
    border:1px solid #e8e9ed;
}
.footNav{
    margin-top:6px;
    width:100%;
    clear:both;
    height:auto;
    font-size:12px;
}
.footNav .cityRecord{
    width:1000px;
    margin:0 auto;
}
.footNav .cityRecord h4{
    clear:both;
    color: #4a4e52;
    font-size: 15px;
    line-height:40px;
    width:100%;
}
.footNav .cityRecord a{
    color: #9fa3b0;
    font-size: 12px;
    margin-right: 26px;
    display: inline-block;
    padding:0;
    line-height:26px;
}
.footNav .cityRecord a:hover{
    color:#000;
    text-decoration:underline; 
}
</style>
