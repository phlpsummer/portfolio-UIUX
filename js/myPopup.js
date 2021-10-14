let isCookie = document.cookie.indexOf("popup=done");
console.log(isCookie);

if(isCookie == -1) {
    $("#popup").show();
} else {
    $("#popup").hide();
}

$("#popup .inner .close").on("click",function(){

    let isChecked = $("#popup").find("input[type=checkbox]").is(":checked");
    if(isChecked) {
        setCookie(1);
    }
    $("#popup").fadeOut(500);
});

function setCookie(time){
    let today = new Date();
    let date = today.getDate();

    today.setDate(date + time);
    let duedate = today.toGMTString();

    document.cookie = "popup=done; expires="+duedate;
}