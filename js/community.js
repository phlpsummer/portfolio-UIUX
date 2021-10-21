/* community페이지---------------------------------------------- */
const $btnQna =  $(".community .inner .left .faq article");
$btnQna.on("click",function(){

    let isOn = $(this).hasClass("on");

    if(isOn) {
        $(this).removeClass("on");
    } else {
        $(this).addClass("on");
    }
});

var swiper = new Swiper(".mySwiper", {

    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    direction: "horizontal", //방향
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true //true: 롤링중 스와이프되면 멈춤, false: 롤링중 스와이프되어도 진행.
    },
  });