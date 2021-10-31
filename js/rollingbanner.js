/* 메인페이지-photo---------------------------------------------- */
//롤링 배너
let mg = 0;
let timer;

timer = setInterval(rolling,20);

$("#photo .slider >li").on("mouseenter",function(){
    clearInterval(timer);
});
$("#photo .slider >li").on("mouseleave",function(){
    timer = setInterval(rolling,20);
});

function rolling(){
    if(mg < -300){
        mg = 0;
        $("#photo .slider").children("li").eq(0).appendTo("#photo .slider");
    }

    mg-=2;
    $(".slider").css({left:mg});
}

$("#photo .auto .btnStart").on("click",function(){
    timer = setInterval(rolling,20);
});
$("#photo .auto .btnStop").on("click",function(){
    clearInterval(timer);
});