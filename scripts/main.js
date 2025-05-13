'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
	
});
function getMaxWidth(){

  var maxWidth = 1;
  	$( ".topic-12 ul li .ss-item span" ).css("width","auto");
  	$( ".topic-12 ul li .ss-item span" ).each(function() {
	 	var hhdhdhd=$(this).outerWidth();
	 	// alert(hhdhdhd);
	 	if(maxWidth<hhdhdhd){
	 		maxWidth=hhdhdhd;
	 	}
	});
  	$( ".topic-12 ul li .ss-item span").css("width",maxWidth);
  	var width_ss_item=$(".topic-12 .content ul li .ss-item").width()-$( ".topic-12 ul li .ss-item span").width()-20;
 	$(".topic-12 .content ul li .ss-item p").css("width",width_ss_item);
}
getMaxWidth();


function getMaxWidth_1(){

  var maxHeight = 1;
  	$( ".section-progess .smd-tab-menu" ).css("min-height","auto");
  	$( ".section-progess .smd-tab-menu" ).each(function() {
	 	var hhdhdhd=$(this).height();
	 	// alert(hhdhdhd);
	 	if(maxHeight<hhdhdhd){
	 		maxHeight=hhdhdhd;
	 	}
	});
  	$( ".section-progess .smd-tab-menu").css("min-height",maxHeight);
}
getMaxWidth_1();


$(".section-progess .smd-tab-menu").click(function(){
	$(this).toggleClass('active');
	$(this).parents(".smd-tab-grid").find(".smd-tab-content").toggleClass('active');
});

$(".smd-toggle-icon").click(function(){
	$(".main-menu").toggleClass("menu-active");
});
$(".ico-close-menu").click(function(){
	$(".main-menu").toggleClass("menu-active");
});


function left_00k90(){
	var left_00k90=$(".about-us .fl-right .icon .img img").width()/2;
	$(".about-us .fl-right .s-item-1 .icon").css("left",-left_00k90);
}
left_00k90();

function left_1982dH(){
	var left_1982dH=$(".main-menu").offset().left;
	$(".page-header .left-meta").css("left",left_1982dH);
}
left_1982dH();

window.onresize=function(){
	left_1982dH();
	left_00k90();
	getMaxWidth();
};

$(".main-menu ul li span").click(function(){
	var s_data_src=$(this).attr("data-src");
	$('html,body').animate({
	  scrollTop: $(s_data_src).offset().top
	}, 'slow');
});

$(".main-menu ul li").click(function(){
	if($(window).width()<768){
		$(".main-menu").removeClass("menu-active");
	}
});


$(".smd-bt-register").click(function(){
	if($(window).width()>768){
		$('html,body').animate({
		  scrollTop: $(".section-9").offset().top
		}, 'slow');
	}else{
		$('html,body').animate({
		  scrollTop: $(".section-9 .md-form").offset().top
		}, 'slow');
	}
});
$(".scrool-to-section").click(function(){
	$('html,body').animate({
	  scrollTop: $("#section-2").offset().top
	}, 'slow');
});
$(".smd-button-6").click(function(){
	$('html,body').animate({
	  scrollTop: $("#section-2").offset().top
	}, 'slow');
});
$(".md-scroll").click(function(){
	$('html,body').animate({
	  scrollTop: $("#section-1").offset().top
	}, 'slow');
});
$('.ui.dropdown')
  .dropdown()
;
// $("#modal-sucess").fancybox().trigger('click');
// $("#modal-detail").fancybox().trigger('click');



