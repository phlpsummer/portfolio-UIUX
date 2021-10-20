/* community페이지---------------------------------------------- */
const $btnQna =  $(".community .inner .left .faq article");
$btnQna.on("click",function(){

    let isOn = $(this).hasClass("on");

    if(isOn) {
        $(this).removeClass("on");
    } else {
        $(this).addClass("on");
    }
});