 /*nav_sub*/
 
 $(function(){
  $(".gnb>li").on("mouseover focus",function(){
   $(this).find(".sub").slideDown();
  });
  $(".gnb>li").on("mouseleave blur",function(){
   $(this).find(".sub").slideUp();
  });
 }); //function end

/*menu_nav*/
$(function(){

 $(".icmenu").on("click",function(){
 $(".menu_nav").animate({marginLeft:"290px"}, 500);
 $(".black_back").css("display","block");
 });
   $(".nav_close, .black_back").on("click",function(){
   $(".menu_nav").animate({marginLeft:"-290px"}, 500);
   $(".black_back").css("display","none");
 });  
    
      
    
   
   /*search_open*/
   $(".search").on("click",function(){
    $(".search_open").css("display","block");
   }); 
   
   $(".search_close").on("click",function(){
    $(".search_open").css("display","none");
   });
   
   
   /*login_open*/
   $(".login").on("click",function(){
     $(".login_open").animate({marginRight:"320px"}, 500);
     $(".black_back").css("display","block");
   });
   $(".login_close, .black_back").on("click",function(){
     $(".login_open").animate({marginRight:"-320px"}, 500);
     $(".black_back").css("display","none");
   });
   


   // slide 
jQuery(document).ready(function ($) {

  var jssor_1_options = {
    $AutoPlay: true,
    $SlideDuration: 800,
    $SlideEasing: $Jease$.$OutQuint,
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$
    }
  };

  var jssor_1_slider = new $JssorSlider$("jssor_2", jssor_1_options);

  /*responsive code begin*/
  /*you can remove responsive code if you don't want the slider scales while window resizing*/
  function ScaleSlider() {
      var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
      if (refSize) {
          refSize = Math.min(refSize, 1920);
          jssor_1_slider.$ScaleWidth(refSize);
      }
      else {
          window.setTimeout(ScaleSlider, 30);
      }
  }
  ScaleSlider();
  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  /*responsive code end*/
});

}); /*function end*/ 
   
   
   
   
   
   