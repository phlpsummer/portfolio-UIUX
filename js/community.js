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
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true //true: 롤링중 스와이프되면 멈춤, false: 롤링중 스와이프되어도 진행.
    },
});

// news 타이틀 말줄임표 기능
for(let i=0; i<4; i++){
    $(".swiper-slide").eq(i).children("p").each(function(){

        let length = 40; //표시할 글자수 정하기
    
        $(this).each(function(){
    
            if( $(this).text().length >= length ){
    
                $(this).text( $(this).text().substr(0,length)+'...') 
                //지정할 글자수 이후 표시할 텍스트
            }
        });
    });
}

