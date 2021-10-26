/* 메인페이지-content---------------------------------------------- */

//움직이는 비디오
const contentVid = document.querySelector("#content .col2 .vid");

contentVid.addEventListener("mouseenter",(e)=>{
    e.currentTarget.querySelector("video").play();
});

contentVid.addEventListener("mouseleave",(e)=>{
    e.currentTarget.querySelector("video").pause();
});


/* 메인페이지-photo---------------------------------------------- */
//롤링 배너
let mg = 0;
let timer;

timer = setInterval(rolling,20);

$(".slider").on("mouseenter",function(){
    clearInterval(timer);
});
$(".slider").on("mouseleave",function(){
    timer = setInterval(rolling,20);
});

function rolling(){
    if(mg < -300){
        mg = 0;
        $(".slider").children("li").eq(0).appendTo(".slider");
    }

    mg-=2;
    $(".slider").css({left:mg});
}

