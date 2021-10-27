const swiper1 = new Swiper('#visual', {

    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    loop: true,
    speed: 500,
    direction: "horizontal", //방향
    spaceBetween: 0, //사이간격 (px단위)
    slidesPerView: 1, //하나의 화면당 보여질 패널의 개수
    grabCursor: false, //마우스 커서 손바닥모양 변경

    autoplay: {
        delay: 5000,
        disableOnInteraction: false //true: 롤링중 스와이프되면 멈춤, false: 롤링중 스와이프되어도 진행.
    },
    effect: "fade",
});

// let isOnNum = $(".swiper-pagination span").hasClass("swiper-pagination-bullet-active").eq();
// console.log(isOnNum);

const swiperPoster = new Swiper('.program', {

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true'
    },

    slidesPerView: "auto",
    spaceBetween: 40,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: true //true: 롤링중 스와이프되면 멈춤, false: 롤링중 스와이프되어도 진행.
    },
});

var btnStart = document.querySelector(".btnAuto .btnStart");
var btnStop = document.querySelector(".btnAuto .btnStop");


btnStart.onclick = function(){
    swiperPoster.autoplay.start();
    btnStart.classList.add("on");
    btnStop.classList.remove("on");
}
btnStop.onclick = function(){
    swiperPoster.autoplay.stop();
    btnStop.classList.add("on");
    btnStart.classList.remove("on");
}

const swiperEvent = new Swiper('.event', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    loop: true,
    speed: 500,
    direction: "horizontal", //방향
    spaceBetween: 20, //사이간격 (px단위)
    slidesPerView: 1, //하나의 화면당 보여질 패널의 개수
    grabCursor: true, //마우스 커서 손바닥모양 변경
    effect: "fade",
});

const swiperBoard = new Swiper('.board', {

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    loop: true,
    direction: "vertical", //방향
    slidesPerView: 1, //하나의 화면당 보여질 패널의 개수

    autoplay: {
        delay: 3000,
        disableOnInteraction: false //true: 롤링중 스와이프되면 멈춤, false: 롤링중 스와이프되어도 진행.
    },
});