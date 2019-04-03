$(document).ready(function(){
	// 条件筛选中，条件框的隐藏于显示
	var cityClick=0;
	var jobClick=0;
	var companyClick=0;
	$('.screen #ul1 li').mouseover(function(){
		screenIndex=$(this).index();
		$('.screen #ul1 li .hiddenContent').removeClass('show');
		$(this).children('.hiddenContent').addClass('show');
	}).mouseout(function(){
		$('.screen #ul1 li .hiddenContent').mouseover(function(){
			$('.screen #ul1 li:eq('+screenIndex+') .hiddenContent').addClass('show');
			$('.screen #ul1 li .hiddenContent #ul2 li').click(function(){
				$('.screen #ul1 li .hiddenContent').removeClass('show');
			})
		}).mouseout(function(){
			$('.screen #ul1 li .hiddenContent').removeClass('show');
		})
		$('.screen #ul1 li .hiddenContent').removeClass('show');
	})
	// 城市选择部分的隐藏出现
	$('.citymove').click(function(e){
		e.stopPropagation();
		if(cityClick%2==0){
			$('.cityHide').show();
		}else if(cityClick%2==1){
			$('.cityHide').hide();
		}
		cityClick++;
	})
	$('.cityArrItem').mouseover(function(){
		var cityIndex=$(this).index();
		$('.cityArrItem').children('.twoBox').hide();
	    $('.cityArrItem:eq('+cityIndex+') .twoBox').show();
	}).mouseout(function(){
		$(document).click(function(){
			$('.cityHide').hide();
		})
		$('.cityArrItem').children('.twoBox').hide();
	})
	// 职业工作类型选择部分的隐藏出现
	$('.jobType').click(function(e){
		e.stopPropagation();
		if(jobClick%2==0){
			$('.typeHide').show();
		}else if(jobClick%2==1){
			$('.typeHide').hide();
		}
		jobClick++;
	})
	$('.typeArrItem').mouseover(function(e){
		e.stopPropagation();
		var that=this;
		var jobIndex1=$(that).index();
		$('.typeArrItem').children('.type2Box').hide();
	    $('.typeArrItem:eq('+jobIndex1+') .type2Box').show();
	    $(that).find('.type2Li').mouseover(function(){
	    	var jobIndex2=$(this).index();
	    	$('.typeArrItem .type2Box').find('.type3Box').hide();
	        $('.typeArrItem:eq('+jobIndex1+')').find('.type2Li:eq('+jobIndex2+')').find('.type3Box').show();
	    })
	}).mouseout(function(){
		$(document).click(function(){
			$('.typeHide').hide();
		})
	})
	// 公司行业选择部分的弹框隐藏出现
	$('.company').click(function(e){
		e.stopPropagation();
		if(companyClick%2==0){
			$('.companyHide').show()
		}else if(companyClick%2==1){
			$('.companyHide').hide()
		}
		companyClick++;
		$(document).click(function(){
			companyClick++;
			$('.companyHide').hide();
		})
	})
	




	$(window).scroll(function() {
// 获取文档滚动高度
        // var top = $(document).scrollTop();
        // console.log(top)
        // if(top>=200){
        // 	$('.header .city_select .search').addClass('scrollFixed1');
        // 	$('.screen').addClass('scrollFixed2');
        // }else{
        // 	$('.header .city_select .search').removeClass('scrollFixed1')
        // 	$('.screen').removeClass('scrollFixed2');
        // }
        var scrollHeight=$('.left').offset().top - $(window).scrollTop();
        console.log(scrollHeight)
        if(scrollHeight<=0){
        	$('.provinceSelect').hide();
        	$('.areaArr').hide();
        	$('.header').addClass('headerFixed');
        }else{
        	$('.header').removeClass('headerFixed');
        	$('.provinceSelect').show();
        	$('.areaArr').show();        	
        }
    })









	
})