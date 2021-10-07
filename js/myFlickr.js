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
                            $("<p>").text(txtTitle)
                        )
                        .attr({href:"https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"})
                )
        )
    });
})
.error(function(err){
    console.error("데이터 호출 실패");
})

$("body").on("click",".gallery .inner ul li",function(e){
    e.preventDefault();

    let imgSrc = $(this).children("a").attr("href");

    $("body").append(
        $("<div class='pop'>")
            .append(
                $("<img>").attr({src: imgSrc}),
                $("<span>").text("close")
            )
    )
});

$("body").on("click",".pop span",function(){
    $(".pop").fadeOut(500,function(){
        $(this).remove();
    })
});