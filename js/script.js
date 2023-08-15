//Swiper config
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    freeMode: true,
    preventClicks :true,
    a11y: false,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });




  const swiper2 = new Swiper('.slide-content-target', {
    // Optional parameters
    slidesPerView: '5',
    centeredSlides: false,
    spaceBetween: 25,
    keyboard: true,
    freeMode: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 5,
      },
  },


  });



  //Modal images function handler
function ExpandImage(imgs,n) {

  let expandImg = document.getElementsByClassName("expandedImg")[n];
  console.log(expandImg)
  expandImg.src = imgs.src;
}

//Cart function handler
let x = 0;
    let y = 0;

    
    if(x ==0) {
        (document.getElementsByClassName("lblCartCount")[0]).style.display = "none";
        
    }
    
    function CartIncrement() {
      
      (document.getElementsByClassName("lblCartCount")[0]).style.display = "inline";
      document.getElementById('output-area').innerHTML = ++x;
      document.getElementById('output-area2').innerHTML = ++y;
    }