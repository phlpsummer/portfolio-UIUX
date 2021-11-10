/* about페이지---------------------------------------------- */
var pos=[];
pos.push($(".spotlight").offset().top);
pos.push($(".values").offset().top);
console.log(pos);

$(window).on("scroll",function(){
    let scroll = $(this).scrollTop();

    if(scroll >= 100 && scroll < pos[0]){
        $(".circle1").addClass("on");
    }

    if(scroll >= pos[0]-700){
        let currentScroll = scroll - pos[0] +700;
        $(".circle2").animate({opacity:0.4},1000);
        $(".circle2").css({
            left: currentScroll
        });
    }

    if(scroll >= pos[0]-550 && scroll < pos[1]){
        $(".spotlight text").animate({strokeDashoffset:0},1500);
    }

    if(scroll >= pos[1]-500){
        $(".values").addClass("on");
    }

});

