function click_addname(obj,className,Boolean){//给对象添加类  1.点击的对象  2.类名  3.是否清除所有-非零[可选] 
    if(Boolean>0){
    $(obj).click(function(){
        $(obj).removeClass(className);
        $(this).addClass(className);
      })
      }else{
          $(obj).click(function(){
        $(this).addClass(className).siblings().removeClass(className);
      })
        }
  }
  

  function downslide(main_div,fun_cirl,prev_page,next_page,text_cg){//轮播图 说明：swiper-container   swiper-wrapper   swiper-slide
  var swiper = new Swiper(main_div, {
        pagination: fun_cirl,
        prevButton: prev_page,
        nextButton: next_page,
        slidesPerView: 1,
        paginationClickable: true,
        autoplay:3000,
        loop: true,
        autoplayDisableOnInteraction: false,
        onSlideChangeStart: function(swiper){
          var New_index=$(fun_cirl+" span.swiper-pagination-bullet-active").index();
          $(text_cg).eq(New_index).show().siblings().hide();
        }
    });
}


  $(".up").click(function () {
        var speed=500;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 });

$(function(){
    $(window).scroll(function() {
        var scrollY = $(document).scrollTop();
        if (scrollY <= 0){
            $('.up').fadeOut();
        } 
        else {
            $('.up').fadeIn();
        }
     });
}); //返回顶部后 UP按钮消失
