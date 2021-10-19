/* header ---------------------------------------------- */
const $btnMenuMo = $(".btn_menu_mo");
let isDone = true;

$("#gnb>li").on("mouseenter",function(){
    if (isDone) {
        isDone = false;
        $(this).find(".subMenu").fadeIn(250,function(){
            isDone = true;
        });
    }
});
$("#gnb>li").on("mouseleave",function(){
    if (isDone) {
        isDone = false;
        $(this).find(".subMenu").fadeOut(250,function(){
            isDone = true;
        });
    }
});

//tab키 포커스 연결
$("#gnb>li").each(function(index){
    $("#gnb>li").eq(index).find("a").on("focusIn",function(){
        $("#gnb>li").eq(index).find(".subMenu").show();
    });
    $("#gnb>li").eq(index).find("a").on("focusOut",function(){
        $("#gnb>li").eq(index).find(".subMenu").hide();
    });
});

//모바일버전 menu햄버거 버튼
$btnMenuMo.on("click",function(e){
    e.preventDefault();

    let isOn = $(this).hasClass("on");
    if(isOn) {
        $(this).removeClass("on");
        $("#gnb_mo").removeClass("on");
    } else {
        $(this).addClass("on");
        $("#gnb_mo").addClass("on");
    }
});

/* 메인페이지-visual---------------------------------------------- */
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

/* footer---------------------------------------------- */
const $btnTop = $(".go_top");

$btnTop.on("click",function(e){
    e.preventDefault();

    $("html, body").animate({
        scrollTop : 0
    },500);
});



/* about페이지---------------------------------------------- */
$(window).on("scroll",function(){
    let scroll = $(this).scrollTop();

    if(scroll > 100){
        $(".circle1").addClass("on");
    }

    $(".circle2").css({
        left: scroll - 300
    });
});


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


