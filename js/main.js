




/* visual---------------------------------------------- */
const $slide = $(".slide");
const $btnSlide = $(".btn_slide_menu li");
let timer;
// let enableClick = true;

//이벤트바인딩
timer = setInterval(function(){
    goNext();
},5000);

//미완성
$(".btn_slide1").on("click",function(e){
    e.preventDefault();

    $btnSlide.removeClass("on");
    $(this).addClass("on");

    $slide.animate({marginLeft:"0%"},1000);
});

$(".btn_slide2").on("click",function(e){
    e.preventDefault();

    $btnSlide.removeClass("on");
    $(this).addClass("on");

    $slide.animate({marginLeft:"-100%"},1000,function(){
        $slide.css({marginLeft:"0%"});
        $(".slide li").first().appendTo($slide);
    })
});


//함수설정
function goNext(){
    $slide.animate({marginLeft:"-100%"},1000,function(){
        $slide.css({marginLeft:"0%"});
        $(".slide li").first().appendTo($slide);
    })
}