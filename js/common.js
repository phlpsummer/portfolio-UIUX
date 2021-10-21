/* scroll bar */
$("body").mCustomScrollbar({
    theme: "minimal-dark",
    mouseWheel:{
        enable: true,
    }
});

/* header ---------------------------------------------- */
const $btnMenuMo = $(".btn_menu_mo");
let isDone = true;

$("#gnb>li").on("mouseenter",function(){
    $(this).find(".subMenu").show();
    $(this).find(".subMenu").animate({opacity:1},250);
});
$("#gnb>li").on("mouseleave",function(){
    $(this).find(".subMenu").hide();
    $(this).find(".subMenu").animate({opacity:0},250);
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

$("#gnb_mo >li .plus").on("click",function(){
    let isOn = $(this).hasClass("on");
    if(isOn){
        $(this).removeClass("on");
        $(this).parent().find(".sub_mo").slideUp(500);
    } else {
        $(this).addClass("on");
        $(this).parent().find(".sub_mo").slideDown(500);
    }
});

/* footer---------------------------------------------- */
const $btnTop = $(".go_top");

$btnTop.on("click",function(e){
    e.preventDefault();

    $("html, body").animate({
        scrollTop : 0
    },500);
});