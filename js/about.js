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