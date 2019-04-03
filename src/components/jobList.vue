<template>

  <div class="box" id="app">
    <div class="header headerFixed">
      <div class="city_select">
        <div class="search scrollFixed1"  id="citySelectArr">
          <div class="selectedCity">
            <div id="span" class="citymove">厦门 </div>
            <img src="./images/more.png" class="citymove">
            <div class="cityHide">
              <div class="cityArrItem" v-for="items in cityHideArr" :key="items">
                <div class="oneBox">
                      <ul>
                        <li>{{items.firstName}}</li>
                      </ul>
                    </div>
                    <div class="twoBox" style="display:none">
                      <ul>
                        <li v-for="item in items.secondArr" :key="item">{{item}}</li>
                      </ul>
                    </div>	
              </div>				    					
            </div>
          </div>
          <input type="text" name="" placeholder="搜索职位、公司">
          <div class="jobType">
            <div id="span">职位类型</div><img src="./images/more.png">
            <div class="typeHide">
              <div class="typeArrItem" v-for="firstItem in typeHideArr" :key="firstItem">
                <div class="type1Box">
                      <ul id="ul1">
                        <li>{{firstItem.firstName}}</li>
                      </ul>
                    </div>
                    <div class="type2Box" style="display:none">
                      <ul id="ul2">
                        <li class="type2Li" v-for="secondItem in firstItem.secondArr" :key="secondItem">
                          <div class="secondName">{{secondItem.secondName}}</div>
                          <div class="type3Box" style="display:none">
                                  <ul id="ul3">
                                    <li v-for="thirdItem in secondItem.thirdArr" :key="thirdItem">{{thirdItem}}</li>
                                  </ul>
                                </div>	
                        </li>
                      </ul>
                    </div>					        	
              </div>				    					
            </div>
          </div>
          <div class="company">
            <div id="span">公司行业</div><img src="./images/more.png">
          </div>
          <div class="searchIcon">
        
          </div>
          <div class="companyHide">
              <ul>
              <li v-for="item in companyHideArr" :key="item"><a href="">{{item}}</a></li>
            </ul>
          </div>
        </div>
        <div class="provinceSelect" id="cityArr">
          <div class="provinceHead">
            <a href="">厦门</a>
            <em class="icon-arrow-right"></em>
            <a href="" style="color:#fc6c38;">不限</a>
            <em class="icon-arrow-right"></em>
          </div>
          <div class="cityArr">热门城市： </div>
          <a  href="javascript:void(0);" class="cityArr cityItem" v-for="item in cityArr" :key="item">{{item}}</a>
          <a href="javascript:void(0);">全部城市</a>
          <div class="areaArr"><a href="" style="float:left;color:#fc6c38;">不限</a><div class="area cityItem" v-for="item in areaArr" :key="item">{{item}}</div></div>
        </div>	
        <div class="screen scrollFixed2">
          <ul id="ul1">
            <li v-for="jobSelectItem in jobSelectArr" :key="jobSelectItem">
              <span>{{jobSelectItem.name}}</span>
              <img src="./images/more.png">
              <div class="hiddenContent">
                <ul id="ul2">
                  <li @click="clickScreenFun(0)" v-for="item in jobSelectItem.selectArr" :key="item">{{item}}</li>
                </ul>
              </div>
            </li>					
          </ul>
          <div class="click">清空筛选条件</div>
        </div>		
      </div>
    </div>
    <div class="jobMain">
      <div class="left" id="leftJobArr">
        <div class="jobItem" v-for="item in pageData" :key="item">
          <a href="" style="width:100%">
            <ul>
            <li>
              <div class="jobName">{{item.jobName}}</div>
                  <div class="salary">{{item.salary}}</div>
                  <div class="demand">{{item.address}} | {{item.experience}} | {{item.record}}</div>
            </li>
            <li>
              <div class="companyName">{{item.companyName}}</div>
              <div class="nature">{{item.nature}} | {{item.isNeed}} | {{item.size}}</div>
            </li>
            <li>
              <div class="hrName">{{item.hrName}} | {{item.hrJobName}}</div>
              <div class="time">发布于{{item.time}}</div>
            </li>
          </ul>
          </a>
        </div>
        <div class="pages">
          <div class="pageItem">
            <a href="javascript:void(0);" @click="pagination(preIndex)" class="preA"><img src="./images/icons.png"></a>
              <a href="javascript:void(0);" @click="pagination(n)" v-for="n in pageIndex" :key="n">{{n}}</a>
              <a href="javascript:void(0);"  @click="pagination(backIndex)" class="backA"><img src="./images/icons.png"></a>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="perfect">
          <a href="">完善在线简历</a>
        </div>
        <div class="seen">
          <h3>看过的职位</h3>
          <ul>
            <li>
              <a href="">
                <h4>数据分析师（校招）</h4>
                <div class="salary">10K-11K</div>
                <p>厦门趣店科技有限公司</p>
              </a>
            </li>
            <li>
              <a href="">
                <h4>数据分析</h4>
                <div class="salary">5K-7K</div>
                <p>万商堂</p>
              </a>
            </li>
            <li>
              <a href="">
                <h4>数据分析师（SPSS产品...）</h4>
                <div class="salary">8K-10K</div>
                <p>厦门趣店科技有限公司</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="wuwei">
          <h4>五维职业性格测评</h4>
          <img src="./images/five-graph.png">
          <p>专业分析职场优势</p>
          <button>立即测试</button>
        </div>
        <img src="https://static.zhipin.com/zhipin/v139/web/geek/images/pro-1.png" id="img">
        <img src="https://static.zhipin.com/zhipin/v139/web/geek/images/pro-2.png" id="img">
      </div>
    </div>
	</div>

</template>

<script>
import $ from 'jquery'
import '../../public/js/jobList.js'
export default {
  data() {
    return {
      pageData:[],
      jobSelectArr:[],
      cityRecordArr:[],
      hotIndustryArr:[],
      cityArr:[],
      areaArr:[],
      cityHideArr:[],
      companyHideArr:[],
      typeHideArr:[],
      jobArr:[],
      pageIndex:1,
      preIndex:null,
      backIndex:null,
      seenArr:[],
    }
  },
  methods:{
				db_pageArrData:function(){
					// 筛选的条件数组
					this.jobSelectArr=[
					    {name:'工作经验',selectArr:['不限','应届生','一年以内','1-3年','3-5年','5-10年','10年以上',]},
					    {name:'学历要求',selectArr:['不限','初中及以下','中专/中技','高中','大专','本科','硕士','博士']},
					    {name:'薪资要求',selectArr:['不限','3K及以下','3-5K','5-10K','10-15K','20-30K','130-50K','50K以上']},
					    {name:'融资阶段',selectArr:['不限','未融资','天使轮','A轮','B轮','C轮','D轮及以上','已上市','不需要融资']},
					    {name:'公司规模',selectArr:['不限','0-20人','20-99人','100-499人','500-999人','1000-9999人','10000人以上']},
					    {name:'发布时间',selectArr:['不限','一天以内','三天以内','七天以内','十五天以内','一个月以内']},
					],
					// 头部选择城市的数据
					this.cityArr=['全国','北京','上海','广州','深圳','杭州','天津','西安','苏州','武汉','厦门','长沙','成都'];
					// 城市下的区域数据
					this.areaArr=['思明区','湖里区','集美区','海沧区','同安区','翔安区'];
					// 隐藏的热门城市数据
					this.cityHideArr=[{firstName:'热门',secondArr:['全国','北京','上海','广州','深圳','杭州']},
				    {firstName:'北京',secondArr:['北京']},
				    {firstName:'上海',secondArr:['上海']},
				    {firstName:'天津',secondArr:['天津']},
				    {firstName:'重庆',secondArr:['重庆']},
				    {firstName:'黑龙江',secondArr:['阿尔滨','齐齐哈尔','牡丹江','佳木斯','绥化','黑河']},];
				    // 隐藏的公司行业数据
					this.companyHideArr=['不限','电子商务','游戏','媒体','广告营销','数据服务','医疗健康','生活服务','音频/视频/阅读','电子商务','游戏','媒体','广告营销','数据服务','医疗健康','生活服务','音频/视频/阅读','电子商务','游戏','媒体','广告营销','数据服务','医疗健康','生活服务','音频/视频/阅读','数据服务','医疗健康','生活服务','音频/视频/阅读'];
					// 隐藏的职位类型数据
					this.typeHideArr=[{firstName:'不限',secondArr:[]},
				        {firstName:'高级管理',secondArr:[
				            {secondName:'高级管理职位',thirdArr:['CEO/总裁/总经理','副总裁/副总经理','事业部负责人','区域/分公司/代表处负责人','总裁/总经理/董事长助理','合伙人','创始人','董事会秘书']}
				        ]},				    
				        {firstName:'技术',secondArr:[
				            {secondName:'后端开发',thirdArr:['C++','PHP','数据挖掘','C','C#','.NET','Haddoop','Python','Delphi','VB','Perl','Ruby','Node.js','搜索算法','Golang','自然语言处理','推荐算法','Erlang','算法工程师','语音/视频/图形开发','数据采集']},
				            {secondName:'移动开发',thirdArr:['HTML5','Android','iOS','WP','移动web前端','Flash','javascript','U3D','COCOS2DX']},
				            {secondName:'测试',thirdArr:['性能测试','测试开发','移动端测试','游戏测试','硬件测试','软件测试']},
				            {secondName:'运维/技术支持',thirdArr:['系统工程师','IT技术支持','系统管理员','网络安全','系统安全','DBA']},
				            {secondName:'数据',thirdArr:['数据仓库','数据开发','数据挖掘','数据分析师','总数据架构师','算法研究员']},
				            {secondName:'项目管理',thirdArr:['项目主管','项目助理','项目专员','实施顾问','实施工程师','需求分析工程师']},
				        ]},
				        {firstName:'产品',secondArr:[
				           {secondName:'产品经理',thirdArr:['产品经理','网页产品经理','移动产品经理','产品助理','数据产品经理','电商产品经理','游戏策划','产品专员']},
				            {secondName:'高端产品职位',thirdArr:['产品总监','游戏制作人','产品VP']},
				            {secondName:'其他产品职位',thirdArr:['其他产品职位']},
				        ]},
				        {firstName:'设计',secondArr:[
				            {secondName:'视觉设计',thirdArr:['视觉设计师','网页设计师','Flash设计师','APP设计师','UI设计师','平面设计师','美术设计师(2D/3D)','广告设计师']},
				            {secondName:'交互设计',thirdArr:['交互设计师','交互设计师','交互设计师','交互设计师']},
				            {secondName:'用户研究',thirdArr:['数据分析师','数据分析师','数据分析师','数据分析师','数据分析师','数据分析师']},
				            {secondName:'高端设计职位',thirdArr:['设计经理/主管','设计经理/主管','设计经理/主管','设计经理/主管','设计经理/主管','设计经理/主管']},
				            {secondName:'非视觉设计',thirdArr:['服装设计','服装设计','服装设计','服装设计','服装设计','服装设计','服装设计','服装设计','服装设计']},
				             {secondName:'其他设计职位',thirdArr:['其他设计职位']},
				        ]}, 
				        {firstName:'运营',secondArr:[
				            {secondName:'运营',thirdArr:['用户运营','用户运营','用户运营','用户运营','用户运营','用户运营','用户运营','用户运营','用户运营','用户运营','用户运营','用户运营','用户运营','用户运营','用户运营','用户运营','用户运营','用户运营','用户运营','用户运营']},
				            {secondName:'编辑',thirdArr:['内容编辑','内容编辑','内容编辑','内容编辑','内容编辑','内容编辑']},
				            {secondName:'客服',thirdArr:['售前咨询','售前咨询','售前咨询','售前咨询','售前咨询','售前咨询']},
				            {secondName:'高端运营职位',thirdArr:['运营总监','运营总监','运营总监','运营总监','运营总监']},
				            {secondName:'其他运营职位',thirdArr:['其他运营职位']},
				        ]},];
				    // 主要内容部分招聘工作列表数据
					this.jobArr=[{jobName:"前端工程师",salary:"6K-8K",address:"厦门 湖里区 五缘湾 ",experience:"1-3年",record:"大专",companyName:"万众房地产",nature:"房地产开发",isNeed:"不需要融资",size:"100-499",hrName:"翁梅芳",hrJobName:"HR",time:"03月26日"},
				    {jobName:"web前端",salary:"5K-7K",address:"厦门 湖里区 五缘湾 ",experience:"1-3年",record:"大专",companyName:"大雪梨健康科技",nature:"电子商务",isNeed:"已上市",size:"100-499",hrName:"唐雯",hrJobName:"人力",time:"昨天"},
				    {jobName:"前端工程师",salary:"4K-6K",address:"厦门 湖里区 五缘湾 ",experience:"1年以内",record:"大专",companyName:"比朋软件",nature:"游戏",isNeed:"未融资",size:"20-99",hrName:"兰女士",hrJobName:"人事专员",time:"03月29日"},
				    {jobName:"前端工程师",salary:"4K-6K",address:"厦门 思明区 观音山 ",experience:"经验不限",record:"大专",companyName:"麦乐峰",nature:"互联网",isNeed:"未融资",size:"20-99",hrName:"赖佳颖",hrJobName:"人事",time:"03月28日"},
				    {jobName:"前端",salary:"6K-11K",address:"厦门 思明区 软件园 ",experience:"1-3年",record:"本科",companyName:"宇信科技",nature:"计算机软件",isNeed:"已上市",size:"1000-9999",hrName:"王女士",hrJobName:"招聘经理",time:"03月29日"},
				    {jobName:"程序员（小程序）",salary:"5K-6K",address:"厦门 思明区 火车站 ",experience:"1-3年",record:"本科",companyName:"厦门华美医疗美容",nature:"医疗健康",isNeed:"未融资",size:"100-499",hrName:"张佐俊",hrJobName:"人事专员",time:"昨天"},
				    {jobName:"HTML5",salary:"4K-8K",address:"厦门 思明区 软件园 ",experience:"1-3年",record:"本科",companyName:"朗新天霁",nature:"计算机软件",isNeed:"未融资",size:"100-499",hrName:"刘明",hrJobName:"研发总监",time:"12月06日"},
				    {jobName:"web前端开发工程师",salary:"4K-8K",address:"厦门 湖里区 五缘湾 ",experience:"1年以内",record:"本科",companyName:"钉云科技",nature:"移动互联网",isNeed:"未融资",size:"20-99",hrName:"黄勤",hrJobName:"技术总监",time:"03月27日"},
				    {jobName:"前端工程师",salary:"5K-10K",address:"厦门 思明区 软件园 ",experience:"1-3年",record:"大专",companyName:"厦门赛云飞科技",nature:"互联网",isNeed:"不需要融资",size:"20-99",hrName:"张秀华",hrJobName:"人事经理",time:"03月26日"},
				    {jobName:"React Native",salary:"11K-20K",address:"厦门 思明区 软件园 ",experience:"经验不限",record:"学历不限",companyName:"说书人",nature:"移动互联网",isNeed:"不需要融资",size:"0-20",hrName:"郑先生",hrJobName:"招聘者",time:"03月28日"},
				    {jobName:"前端开发工程师",salary:"5K-8K",address:"厦门 思明区 莲前 ",experience:"1-3年",record:"本科",companyName:"会展金泓信",nature:"广告/公关/会展",isNeed:"已上市",size:"20-99",hrName:"王雯倩",hrJobName:"人事行政",time:"03月20日"},
				    {jobName:"前端工程师",salary:"6K-8K",address:"厦门 湖里区 五缘湾 ",experience:"1-3年",record:"大专",companyName:"万众房地产",nature:"房地产开发",isNeed:"不需要融资",size:"100-499",hrName:"翁梅芳",hrJobName:"HR",time:"03月26日"},
				    {jobName:"web前端",salary:"5K-7K",address:"厦门 湖里区 五缘湾 ",experience:"1-3年",record:"大专",companyName:"大雪梨健康科技",nature:"电子商务",isNeed:"已上市",size:"100-499",hrName:"唐雯",hrJobName:"人力",time:"昨天"},
				    {jobName:"前端工程师",salary:"4K-6K",address:"厦门 湖里区 五缘湾 ",experience:"1年以内",record:"大专",companyName:"比朋软件",nature:"游戏",isNeed:"未融资",size:"20-99",hrName:"兰女士",hrJobName:"人事专员",time:"03月29日"},
				    {jobName:"前端工程师",salary:"4K-6K",address:"厦门 思明区 观音山 ",experience:"经验不限",record:"大专",companyName:"麦乐峰",nature:"互联网",isNeed:"未融资",size:"20-99",hrName:"赖佳颖",hrJobName:"人事",time:"03月28日"},
				    {jobName:"前端",salary:"6K-11K",address:"厦门 思明区 软件园 ",experience:"1-3年",record:"本科",companyName:"宇信科技",nature:"计算机软件",isNeed:"已上市",size:"1000-9999",hrName:"王女士",hrJobName:"招聘经理",time:"03月29日"},
				    {jobName:"程序员（小程序）",salary:"5K-6K",address:"厦门 思明区 火车站 ",experience:"1-3年",record:"本科",companyName:"厦门华美医疗美容",nature:"医疗健康",isNeed:"未融资",size:"100-499",hrName:"张佐俊",hrJobName:"人事专员",time:"昨天"},
				    {jobName:"HTML5",salary:"4K-8K",address:"厦门 思明区 软件园 ",experience:"1-3年",record:"本科",companyName:"朗新天霁",nature:"计算机软件",isNeed:"未融资",size:"100-499",hrName:"刘明",hrJobName:"研发总监",time:"12月06日"},
				    {jobName:"web前端开发工程师",salary:"4K-8K",address:"厦门 湖里区 五缘湾 ",experience:"1年以内",record:"本科",companyName:"钉云科技",nature:"移动互联网",isNeed:"未融资",size:"20-99",hrName:"黄勤",hrJobName:"技术总监",time:"03月27日"},
				    {jobName:"前端工程师",salary:"5K-10K",address:"厦门 思明区 软件园 ",experience:"1-3年",record:"大专",companyName:"厦门赛云飞科技",nature:"互联网",isNeed:"不需要融资",size:"20-99",hrName:"张秀华",hrJobName:"人事经理",time:"03月26日"},
				    {jobName:"React Native",salary:"11K-20K",address:"厦门 思明区 软件园 ",experience:"经验不限",record:"学历不限",companyName:"说书人",nature:"移动互联网",isNeed:"不需要融资",size:"0-20",hrName:"郑先生",hrJobName:"招聘者",time:"03月28日"},
				    {jobName:"前端开发工程师",salary:"5K-8K",address:"厦门 思明区 莲前 ",experience:"1-3年",record:"本科",companyName:"会展金泓信",nature:"广告/公关/会展",isNeed:"已上市",size:"20-99",hrName:"王雯倩",hrJobName:"人事行政",time:"03月20日"},]
				},
				    // vue中异步请求格式调用
				    // axios.get('/user', {
				// 	params: {
				// 		ID: 12345			
				// })
				// .then(function (response) {
				// 	// 处理数据
				// 	console.log(response);
				// })
				// .catch(function (error) {
				// 	console.log(error);
				// });
				// },
				// 分页效果函数
				// 
				pagination:function(index){
					this.pageData=[];
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
					for (var i=0;i<this.jobArr.length;i++){
						if(Math.ceil((i+1)/10)==index){
							console.log(i);
							this.pageData.push(this.jobArr[i]);
						}else{
						}						
					}
				},
				// 点击筛选字段
				
				// 筛选函数
				
      },
      created(){
				this.db_pageArrData();
				this.pageIndex=Math.ceil(this.jobArr.length/10);
				this.pagination(1)
			}

}
</script>