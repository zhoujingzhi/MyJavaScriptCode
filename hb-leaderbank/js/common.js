$(function(){
	tableVi();//表单验证
	tabUl();//选项卡
	toggleHover();
	homeTab();
	tabscroll();
	navClick();
	tophover();
   $(window).scroll(function() { 
			var top = $(window).scrollTop()-140; 
			var top1 = $(window).scrollTop()-210; 
			var left= $(window).scrollLeft()+0; 
			
			var scrollTop = $(this).scrollTop();
			var scrollHeight = $(document).height();
			var windowHeight = $(this).height();　
			
			if($(window).scrollTop()>200){  
				$(".leftBody").css({ left:left + "px", top: top + "px" }); 
			}else{
				$(".leftBody").css({ left:"0", top:"0" }); 
			}
			
			if(scrollHeight-scrollTop-windowHeight <=200){
				$(".leftBody").css({ left:"0", top:"0" }); 
			//$(".leftBody").css({ left:left + "px", top: top1 + "px" }); 
			}
	}); 
	linkban();
})


function linkban(){
	$(".banner .swiper-container .swiper-slide").click(function(e){
		var urlname=$(this).attr("data-url");
		window.location.href=urlname;
		e.stopPropagation();
	});
	$(".banner .swiper-container .swiper-slide .bd p span.u-btn-1").click(function(e){
		var urlname=$(this).attr("data-url");
		window.location.href=urlname;
		e.stopPropagation();
	});
	$(".banner .swiper-container .swiper-slide .bd p span.u-btn-2").click(function(e){
		var urlname=$(this).attr("data-url");
		window.location.href=urlname;
		e.stopPropagation();
	});
}

function tophover(){
	$(".header-top .f-fr a.fa-weix").hover(function(){
		$(this).find("img").toggle();
	});
}
//wap导航 效果
function navClick(){
	$(".header-wap .f-emnu span").click(function(){
		$(".header-wap .subboxNav").slideToggle();
	});
    $(".m-ins-navbox .right .tit").click(function(){
		$(".m-ins-navbox .right #newsmeiti").slideToggle();
	});
	
}
//首页手风琴
function tabscroll(){
	$(".shList-n li").hover(function(){
    	$(this).addClass("s-crt").siblings().removeClass("s-crt");
    });
}

//首页新闻 tab
function homeTab(){
	$(".news-tabTop a:first").addClass("s-crt");
	$(".news-right .news-tapbd:first").show();
	$(".news-tabTop a").click(function(){
		var _i=$(this).index();
		$(this).addClass("s-crt").siblings().removeClass("s-crt");
		$(".news-right .news-tapbd").hide();
		$(".news-right .news-tapbd").eq(_i).show();
	});
	
}
function toggleHover(){
   $(".xd-box-1 li:first").find("img").show();
   $(".xd-box-1 li").hover(function(){
	   $(".xd-box-1 li").find("img").hide();
	   $(this).find("img").show();  
   });
}

function tabUl(){
   $(".news-zkList ul:first").show();
   $(".news-zkscroll .swiper-container .swiper-slide").click(function(){
   	$(".news-zkscroll .swiper-container .swiper-slide").find("div span").removeClass("s-crt");
   	 $(this).find("div span").addClass("s-crt");
     var _i=$(this).attr("data-num");
	 $(".news-zkList ul").hide();
	 $(".news-zkList").find("ul").eq(_i).show();
   });	
}

//form
function tableVi(){
	$("#subFrom").click(function() {
		var ValidPhone = new RegExp(/(^(13|15|17|18|14)(\d){9}$)|(^189\d{8}$)/);
		var ValidEmail = new RegExp(/^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.){1,4}[a-z]{2,3}$/i);
		var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
		if ($("#name").val() == "") {
			$("#name").focus();
			return false;
		}
		if ($("#tel").val() == "") {
				$("#tel").focus();
				return false;
		}
		if (!ValidPhone.test($("#tel").val())) {
		 	alert("手机号码填写错误，请检查");
		 	$("#tel").focus();
			return false;
		}
		
		if ($("#shenfenz").val() == "") {
			$("#shenfenz").focus();
			return false;
		}
		if(!pattern.test($("#shenfenz").val())){
			alert("身份证号码填写错误，请检查");
			$("#shenfenz").focus();
			return false;
		}
		
		if ($("#gsName").val() == "") {
			$("#gsName").focus();
			return false;
		}
		if ($("#gscont").val() == "") {
			$("#gscont").focus();
			return false;
		}
		if ($("#gsprice").val() == "") {
			$("#gsprice").focus();
			return false;
		}
		if ($("#gstime").val() == "") {
			$("#gstime").focus();
			return false;
		}		
	});
}

