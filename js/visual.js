const $vidBox = $("#visual .rightVid");
const $bgImgs = $("#visual .bg");
const $btnNext = $("#visual .btn .btnNext");
const $btnPrev = $("#visual .btn .btnPrev");
const $inner = $("#visual .inner");
const $txtBoxs = $inner.children(".txt");
let visualIsDone = true;


$btnNext.on("click",function(){
    if(visualIsDone){
        visualIsDone = false;

        bgNext();
        vidNext();

        $inner.find(".first").animate({top: "-100%"},300,function(){
            $(this).css({top: "100%", opacity:0});
        });
        $inner.find(".second").delay(200).animate({top: "-100%"},300,function(){
            $(this).css({top: "100%", opacity:0});
        });
    }
});

$btnPrev.on("click",function(){
    if(visualIsDone){
        visualIsDone = false;

        bgPrev();
        vidPrev();
    }
});

function bgNext(){
    $bgImgs.children("li").fadeOut(750);
    $bgImgs.children("li").first().delay(750).appendTo($bgImgs);
    $bgImgs.children("li").eq(1).delay(750).fadeIn(750);
}
function bgPrev(){
    $bgImgs.children("li").fadeOut(750);
    $bgImgs.children("li").last().delay(750).prependTo($bgImgs);
    $bgImgs.children("li").eq(1).delay(750).fadeIn(750);
}

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