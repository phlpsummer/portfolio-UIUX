const $aside = $("#visual aside");
const $text = $aside.find("text");

$text.eq(0).delay(700).animate({
    strokeDashoffset:0
},1500);
$text.eq(1).delay(1500).animate({
    strokeDashoffset:0
},1000,function(){
    $aside.delay(500).fadeOut(1000);
});


