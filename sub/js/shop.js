$(function(){
    $(".gnb>li").on("mouseover focus",function(){
     $(this).find(".sub").slideDown();
    });
    $(".gnb>li").on("mouseleave blur",function(){
     $(this).find(".sub").slideUp();
    });
   }); //function end



































