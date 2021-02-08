'use strict';
{
  // トップ画像をランダムにふわっと
  $(function(){
    $(".fade-img img:not(:first-child)").hide();
    setInterval(function() {
      $(".fade-img img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".fade-img");
    },6000);
  });

  ScrollReveal().reveal('.effect-fade', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px',
    reset: true
  })
  ScrollReveal().reveal('.feature-wrapper', { 
    duration: 2000, 
    origin: 'left',
    distance: '200px',
    reset: true
  });

  ScrollReveal().reveal('.about-wrapper', {
    duration: 2000,
    origin: 'right',
    distance: '200px',
    reset: true
  });

  ScrollReveal().reveal('.skill-items img', {
    duration: 2000,
    scale: 0.1,
    reset: true
  });
}

