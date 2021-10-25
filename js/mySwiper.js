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

// const swiper2 = new Swiper('#photo>.inner', {

//     loop: true,
//     speed: 500,
//     direction: "horizontal", //방향
//     spaceBetween: 0, //사이간격 (px단위)
//     slidesPerView: 4, //하나의 화면당 보여질 패널의 개수 -> 여러개보여야하므로``
//     centeredSlides: true, //슬라이드 가운데 위치
//     grabCursor: true, //마우스 커서 손바닥모양 변경

//     autoplay: {
//         delay: 4000,
//         disableOnInteraction: false //true: 롤링중 스와이프되면 멈춤, false: 롤링중 스와이프되어도 진행.
//     },
//     effect: "coverflow",
//     coverflowEffect: {
//         rotate: 50,  //슬라이드 회전 각도
//         stretch: -150,  //슬라이드 간 거리, 클수록 겹침.
//         depth: 400,  //깊이효과값
//         modifier: 1,  //효과 배수
//         slideShadows: false  //슬라이더 그림자
//     },
// });

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