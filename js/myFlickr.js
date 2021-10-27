/* gallery---------------------------------------------- */
/*

48fa09238ff7a579f7c89acef3c946b7

https://www.flickr.com/services/rest/?method=flickr.photos.search

https://live.staticflickr.com/{server-id}/{id}_{secret}_b.jpg

버디아이콘 http://farm{icon-farm}.staticflickr.com/{icon-server}/buddyicons/{nsid}.jpg

*/

//아이디 타입
getList({
    type: "user_id",
    user_id: "194176696@N08"
});

/*
//interest 타입
getList({
    type: "interest",
});
*/

/*
//search 타입
getList({
    type: "search",
    tags: "festival"
});
*/

//검색창 구동
$("#searchBox button").on("click",function(){
    let searchTag = $("#searchBox input").val();
    getList({
        type: "search",
        tags: searchTag
    });

    $("#searchBox input").val("");
    $(".gallery .contents").empty();
    $(".loading").removeClass("off");
    $(".gallery .contents main").removeClass("on");
});

//enter 검색 구동
$(window).on("keypress",function(e){
    if(e.keyCode == 13){
        let searchTag = $("#searchBox input").val();
        getList({
            type: "search",
            tags: searchTag
        });
    
        $("#searchBox input").val("");
        $(".gallery .contents").empty();
        $(".loading").removeClass("off");
        $(".gallery .contents main").removeClass("on");
    }
});

// 썸네일 클릭시, pop창 띄우기
$("body").on("click",".gallery .inner article",function(e){
    e.preventDefault();

    let imgSrc = $(this).children("a").attr("href");
    let txtTitle = $(this).find("a p").text();
    let buddyOwner = $(this).find("a span").text();

    $(".gallery").append(
        $("<div class='pop'>")
            .fadeIn(500)
            .append(
                $("<div class='post'>")
                    .append(
                        $("<img>").attr({src: imgSrc}),
                        $("<span>").text("close"),
                        $("<div class='profile'>")
                            .append(
                                $("<div class='buddyImg'>")
                                    .append(
                                        $("<img>").attr({src:"https://www.flickr.com/buddyicons/"+buddyOwner+".jpg"})
                                    ),
                                $("<ul class='txt'>")
                                    .append(
                                        $("<li class='title'>").text(txtTitle),
                                        $("<li class='owner'>").text(buddyOwner)
                                    )
                            )
                    )
            )
    )
});

// pop창 닫기 버튼
$("body").on("click",".pop span",function(){
    $(".pop").fadeOut(500,function(){
        $(this).remove();
    })
});

function getList(opt){
    var result_opt = {};

    if(opt.type == "interest"){
        result_opt = {
            url: "https://www.flickr.com/services/rest/?method=flickr.interestingness.getList",
            dataType: "json",
            data: {
                api_key: "48fa09238ff7a579f7c89acef3c946b7",
                per_page: 20,
                format: "json",
                nojsoncallback: 1,
                privacy_filter: 1,
            }
        }
    }

    if(opt.type == "search"){
        result_opt = {
            url: "https://www.flickr.com/services/rest/?method=flickr.photos.search",
            dataType: "json",
            data: {
                api_key: "48fa09238ff7a579f7c89acef3c946b7",
                per_page: 20,
                format: "json",
                nojsoncallback: 1,
                privacy_filter: 1,
                tags: opt.tags
            }
        }
    }

    if(opt.type == "user_id"){
        result_opt = {
            url: "https://www.flickr.com/services/rest/?method=flickr.photos.search",
            dataType: "json",
            data: {
                api_key: "48fa09238ff7a579f7c89acef3c946b7",
                per_page: 20,
                format: "json",
                nojsoncallback: 1,
                privacy_filter: 1,
                user_id: opt.user_id
            }
        }
    }

    $.ajax(result_opt)
    .success(function(data){
        console.log(data);
        let items = data.photos.photo;
    
        $(".gallery .inner .contents").append("<main>");
    
        $(items).each(function(index,data){
    
            let txtTitle = data.title;
            let titleLen = txtTitle.length;
            if(!txtTitle){
                txtTitle = "untitled";
            }
            if(titleLen>35){
                txtTitle = txtTitle.substr(0,35) + "...";
            }
    
            $(".gallery .inner .contents main").append(
                $("<article class='card'>")
                    .append(
                        $("<a>")
                            .append(
                                $("<div>")
                                    .append(
                                        $("<p>").text(txtTitle),
                                        $("<span>").text(data.owner)
                                    ),
                                $("<img class='thumb'>").attr({src:"https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"})
                            )
                            .attr({href:"https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"})
                    )
            )
        });
    
        const count = $("main .card").length;
        let imgNum = 0;
    
        $(".gallery .thumb").each(function(index,data){
    
            data.onerror = function(){
                $(data).attr("src","img/default.jpg");
            }
    
            data.onload = function(){
                imgNum++;
    
                if(imgNum === count){
                    $(".loading").addClass("off");
    
                    new Isotope(".gallery main",{
                        itemSelector: ".gallery main .card",
                        columnWidth: ".gallery main .card",
                        transitionDuration: "0.5s"
                    });
    
                    $("main").addClass("on");
                }
            }
    
        });
    
    })
    .error(function(err){
        console.error("데이터 호출 실패");
    })
}