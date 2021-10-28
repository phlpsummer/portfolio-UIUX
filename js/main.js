/* 메인페이지-content---------------------------------------------- */

//움직이는 비디오
// const contentVid = document.querySelector("#content .col2 .vid");

// contentVid.addEventListener("mouseenter",(e)=>{
//     e.currentTarget.querySelector("video").play();
// });

// contentVid.addEventListener("mouseleave",(e)=>{
//     e.currentTarget.querySelector("video").pause();
// });


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

/* 메인페이지-comments---------------------------------------------- */
$("#comment .btnNotice").on("click",function(){
    $(this).parent().find("li").removeClass("on");
    $(this).addClass("on");
    $("#comment .board ul").hide();
    $("#comment .board .notice").show();
});

$("#comment .btnPress").on("click",function(){
    $(this).parent().find("li").removeClass("on");
    $(this).addClass("on");
    $("#comment .board ul").hide();
    $("#comment .board .press").show();
});