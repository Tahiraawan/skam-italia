// var previousScroll = window.pageYOffset;

// window.addEventListener('scroll', function() {
//   var currentScroll = window.pageYOffset;
  
//   if (currentScroll > previousScroll) {
//     // Scrolling down
//     document.querySelector('header').classList.add('hide');
//   } else {
//     // Scrolling up
//     document.querySelector('header').classList.remove('hide');
//   }
  
//   previousScroll = currentScroll;
// });

// for carousal
let flag = 0;

document.addEventListener("DOMContentLoaded", function () {
  slideShow(flag);
});

function controller(x) {
  flag += x;
  slideShow(flag);
}

function slideShow(num) {
  let slides = document.getElementsByClassName("slide");
  if (num >= slides.length) {
    flag = 0;
    num = 0;
  }
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  for (let y of slides) {
    y.style.display = "none";
  }
  slides[num].style.display = "block";
}
