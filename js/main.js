'use strict';
{
  
  // const src_pic = ["img/contact.jpg", "img/drums.jpg", "img/keshiki.jpg"];
  // let num = -1;

  // function slideImage () {
  //   // if (num === 2) {
  //   //   num = 0;
  //   // } else {
  //   //   num ++; 
  //   // }
  //   num = Math.floor(Math.random() * src_pic.length)

  //   document.getElementById("mypic").src = src_pic[num];
  // }
  
  // setInterval(slideImage, 2000);
  $(function(){
    $(".fade-img img:not(:first-child)").hide();
    setInterval(function() {
      $(".fade-img img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".fade-img");
    },6000);
  });
}

