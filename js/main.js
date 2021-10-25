/* 메인페이지-content---------------------------------------------- */

//움직이는 비디오
const contentVid = document.querySelector("#content .col3 .vid");

contentVid.addEventListener("mouseenter",(e)=>{
    e.currentTarget.querySelector("video").play();
});

contentVid.addEventListener("mouseleave",(e)=>{
    e.currentTarget.querySelector("video").pause();
});





