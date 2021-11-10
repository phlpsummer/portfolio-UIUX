const $aside = $("#visual aside");
const $text = $aside.find("text");

$text.eq(0).delay(1000).animate({
    strokeDashoffset:0
},1500,function(){
    $text.eq(1).animate({
        strokeDashoffset:0
    },1000);
});

$aside.delay(4000).fadeOut(1000);
