/* gallery---------------------------------------------- */
/*

48fa09238ff7a579f7c89acef3c946b7

https://www.flickr.com/services/rest/?method=flickr.photos.search

https://live.staticflickr.com/{server-id}/{id}_{secret}_b.jpg

버디아이콘 http://farm{icon-farm}.staticflickr.com/{icon-server}/buddyicons/{nsid}.jpg

*/

$.ajax({
    url: "https://www.flickr.com/services/rest/?method=flickr.photos.search",
    dataType: "json",
    data: {
        api_key: "48fa09238ff7a579f7c89acef3c946b7",
        per_page: 5,
        format: "json",
        nojsoncallback: 1,
        privacy_filter: 5,
        tags: "concert"
    }
})
.success(function(data){
    console.log(data);
    let items = data.photos.photo;

    $(".gallery .inner").append("<ul>");

    $(items).each(function(index,data){

        let txtTitle = data.title;
        if(!txtTitle){
            txtTitle = "untitled";
        }

        $(".gallery .inner ul").append(
            $("<li>")
                .append(
                    $("<a>")
                        .append(
                            $("<img>").attr({src:"https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"}),
                            $("<p>").text(txtTitle),
                            $("<span>").text(data.owner)
                        )
                        .attr({href:"https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"})
                )
        )
    });
})
.error(function(err){
    console.error("데이터 호출 실패");
})


// 썸네일 클릭시, pop창 띄우기
$("body").on("click",".gallery .inner ul li",function(e){
    e.preventDefault();

    let imgSrc = $(this).children("a").attr("href");
    let txtTitle = $(this).find("a p").text();
    let buddyOwner = $(this).find("a span").text();

    $(".gallery").append(
        $("<div class='pop'>")
            .fadeIn(500)
            .append(
                $("<div class='inner'>")
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