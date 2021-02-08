'use strict';
{
  // トップ画像をランダムにふわっと
  $(function(){
    $(".fade-img img:not(:first-child)").hide();
    setInterval(function() {
      $(".fade-img img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".fade-img");
    },6000);
  });

  // ふわっと表示
  $(function () {
    $(window).scroll(function () {
      $(".effect-fade").each(function () {
        
        console.log("JSが読み込まれているかの確認");

        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight) {
          $(this).addClass("effect-scroll");
        }
      });
    });
    jQuery(window).scroll();
  });

  ScrollReveal().reveal('.feature-wrapper', { 
    duration: 2000, 
    origin: 'left',
    distance: '100px',
    reset: true
  });

  ScrollReveal().reveal('.about-wrapper', {
    duration: 2000,
    origin: 'right',
    distance: '100px',
    reset: true
  });

  ScrollReveal().reveal('.skill-items img', {
    duration: 2000,
    scale: 0.1,
    reset: true
  });
}

