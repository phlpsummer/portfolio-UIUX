/* skip navi ------------------------------------------- */
const $skipBtns = $("#skip a");
$skipBtns.on("focusin",function(){
    $(this).addClass("on");
});
$skipBtns.on("focusout",function(){
    $(this).removeClass("on");
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
$("#gnb>li").on("focusin",function(){
    $(this).find(".subMenu").show();
    $(this).find(".subMenu").css("opacity",1);
    $("#header").css({
        background: "#111",
        borderBottom: "1px solid #888"
    })
});
$("#gnb>li .subMenu>li:last-child").on("focusout",function(){
    $(this).closest(".subMenu").hide();
    $(this).closest(".subMenu").css("opacity",0);
})
$("#gnb>li").on("focusout",function(){
    $("#header").css({
        background: "",
        borderBottom: "none"
    })
})

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