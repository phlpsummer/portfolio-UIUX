




/* visual---------------------------------------------- */
const $slide = $(".slide");
let timer;
// let enableClick = true;

//이벤트바인딩
timer = setInterval(function(){
    goNext();
},5000);


//함수설정
function goNext(){
    $slide.animate({marginLeft:"-100%"},1000,function(){
        $slide.css({marginLeft:"0%"});
        $(".slide li").first().appendTo($slide);
    })
}