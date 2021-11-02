// const swiper1 = new Swiper('#visual', {
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },

//     loop: true,
//     speed: 500,
//     direction: "horizontal", //방향
//     spaceBetween: 0, //사이간격 (px단위)
//     slidesPerView: 1, //하나의 화면당 보여질 패널의 개수
//     grabCursor: false, //마우스 커서 손바닥모양 변경

//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: false //true: 롤링중 스와이프되면 멈춤, false: 롤링중 스와이프되어도 진행.
//     },
//     effect: "fade",
// });

const swiperBoard = new Swiper('#content .board .notice', {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  slidesPerView: 1,
  loop: true,
  direction: "vertical", //방향
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false //true: 롤링중 스와이프되면 멈춤, false: 롤링중 스와이프되어도 진행.
  },
});

const swiperContent = new Swiper('#content .mySwiper', {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },

    slidesPerView: "auto",
    // centeredSlides: false,
    direction: "horizontal", //방향
    spaceBetween: 10,
    grabCursor: true, //마우스 커서 손바닥모양 변경
    mousewheel: true,
});

