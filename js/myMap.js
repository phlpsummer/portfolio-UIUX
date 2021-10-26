//**스크롤
$(window).on("scroll",function(){
    let scroll = $(this).scrollTop();

    if(scroll > 260){
        $(".location .add").addClass("on");
    }
});


//**카카오맵
let mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.5667055,127.0095195), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
let map = new kakao.maps.Map(mapContainer, mapOption); 

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
let mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
let zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


// 지도 스크롤 줌 막기
setZoomable(false);



// 반응형-창 크기 변경해도 중심
window.onresize = function(){
    var moveLatLon = new kakao.maps.LatLng(37.5667055,127.0095195);
    map.setCenter(moveLatLon);
}


// 마커가 표시될 위치입니다 
let markerPosition  = new kakao.maps.LatLng(37.5667055,127.0095195); 

// 마커를 생성합니다
let marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);


let trafficOff = document.querySelectorAll(".btnTraffic li")[0];
let trafficOn = document.querySelectorAll(".btnTraffic li")[1];

trafficOff.addEventListener("click",function(e){
    e.preventDefault();

    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    trafficOff.classList.add("on");
    trafficOn.classList.remove("on");

});

trafficOn.addEventListener("click",function(e){
    e.preventDefault();

    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    trafficOn.classList.add("on");
    trafficOff.classList.remove("on");
});

//@@ 함수설정 ----------------------------------------------------------

// 버튼 클릭에 따라 지도 확대, 축소 기능을 막거나 풀고 싶은 경우에는 map.setZoomable 함수를 사용합니다
function setZoomable(zoomable) {
    // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
    map.setZoomable(zoomable);    
}
