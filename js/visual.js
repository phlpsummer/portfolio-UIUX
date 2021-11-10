const $vidBox = $("#visual .rightVid");
const $btnNext = $("#visual .btn .btnNext");
const $btnPrev = $("#visual .btn .btnPrev");
let visualIsDone = true;

$btnNext.on("click",function(){
    if(visualIsDone){
        visualIsDone = false;

        vidNext();
    }
});

$btnPrev.on("click",function(){
    if(visualIsDone){
        visualIsDone = false;

        vidPrev();
    }
});

function vidNext(){
    $vidBox.children("li").eq(1).animate({top:"-20%"},1500,"easeOutExpo");
    $vidBox.children("li").eq(2).animate({
        top:0
    },1500,"easeOutExpo",function(){
        $vidBox.children("li").first().appendTo($vidBox);
        vidTopInit();
    });
}

function vidPrev(){
    $vidBox.children("li").eq(1).animate({top:"20%"},1500,"easeOutExpo");
    $vidBox.children("li").eq(0).animate({
        top:0
    },1500,"easeOutExpo",function(){
        $vidBox.children("li").last().prependTo($vidBox);
        vidTopInit();
    });
}

function vidTopInit(){
    $vidBox.children("li").eq(0).css({top:"-100%"});
    $vidBox.children("li").eq(2).css({top:"100%"});
    $vidBox.children("li").css({transform: "scale(1)"});
    visualIsDone = true;
}