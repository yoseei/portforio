'use strict';
{
  const src_pic = ["img/contact.jpg", "img/drums.jpg", "img/keshiki.jpg"];
  let num = -1;

  function slideImage () {
    if (num === 2) {
      num = 0;
    } else {
      num ++; 
    }
    document.getElementById("mypic").src = src_pic[num];
  }
  setInterval(slideImage, 2000);
}
