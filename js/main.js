/* 메인페이지-content---------------------------------------------- */

//움직이는 비디오
const contentVid = document.querySelector("#content .vid");

contentVid.addEventListener("mouseenter",(e)=>{
    e.currentTarget.querySelector("video").play();
});

contentVid.addEventListener("mouseleave",(e)=>{
    e.currentTarget.querySelector("video").pause();
});


//lettering
const $frame = $(".story p");
let txt = $frame.text();
let num = 0;
$frame.empty();

for(let el of txt){
    $frame.append(
        $("<span>")
            .text(el)
            .css({
                transitionDelay: 0.1*num+"s",
                display: "inline-block"
            })
    )
    num++;
}

//event slider
const $list = $(".sliderList");
const $btns = $(".btnNavi li");
let enableClick = true;

$btns.on("click",function(){
    let isOn = $(this).hasClass("on");
    if(isOn) return;

    let i = $(this).index();

    if(enableClick) {
        enableClick = false;
        
        moveSlide(i);

        $btns.removeClass("on");
        $(this).addClass("on");
    }
});

function moveSlide(index){
    $list.animate({marginLeft: (-100 * index)+"%"},500,function(){
        enableClick = true;
    });
}


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