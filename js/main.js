/* visual---------------------------------------------- */
//@@ DOM 캐싱 @@
const $slide = $(".slide");
const $btnSlide = $(".btn_slide_menu");
let timer;
let slideRight = true;


//@@ 이벤트 바인딩 @@
//자동 슬라이드 타이머 설정
timer = setInterval(function(){
    slideAction();
},4000);

//slide 버튼
$(".btn_slide1").on("click",function(e){
    e.preventDefault();

    let isOn = $(this).hasClass("on");
    if(isOn) return;

    slideRight = false;
    slideAction();
});

$(".btn_slide2").on("click",function(e){
    e.preventDefault();

    let isOn = $(this).hasClass("on");
    if(isOn) return;

    slideRight = true;
    slideAction();
});


//@@ 함수설정 @@
function slideAction(){
    
    if(slideRight){
        $slide.animate({marginLeft:"-100%"},1000,function(){
            slideRight = false;
        });
        $btnSlide.children().removeClass("on");
        $(".btn_slide2").addClass("on");
    } else {
        $slide.animate({marginLeft:"0%"},1000,function(){
            slideRight = true;
        });
        $btnSlide.children().removeClass("on");
        $(".btn_slide1").addClass("on");
    }
}

/* 메인페이지-galleryBanner---------------------------------------------- */











