/*
유튜브 요청주소
https://www.googleapis.com/youtube/v3/playlistItems

키
AIzaSyAMoGKvrd6wFxpLb2M8fXI83hwwuZjv7is

*/

const $border = $(".youtube .inner article a .borderWrap");
let speed = 500;


$.ajax({
    url: "https://www.googleapis.com/youtube/v3/playlistItems",
    dataType: "jsonp",
    data: {
        part: "snippet",
        key: "AIzaSyAMoGKvrd6wFxpLb2M8fXI83hwwuZjv7is",
        maxResults: 10,
        playlistId: "PL-4RqvSks9qU6ZgUR9NmKCqXWeUJ97FLH"
    }
})
.success(function(data){
    console.log(data);

    let item = data.items;
    $(item).each(function(index,data){

        //타이틀
        let ytTitle = data.snippet.title;
        let titleLen = ytTitle.length;
        if(titleLen > 45){
            ytTitle = ytTitle.substr(0,45) + "...";
        }
        if(!ytTitle){ ytTitle = "untitled";}

        //설명
        let ytTxt = data.snippet.description;
        let txtLen = ytTxt.length;
        if(txtLen > 150){
            ytTxt = ytTxt.substr(0,150) + "...";
        }

        //날짜
        let ytDate = data.snippet.publishedAt;
        ytDate = ytDate.split("T")[0];
        ytDate = ytDate.substr(2);

        $(".youtube .inner")
            .append(
                $("<article>")
                    .append(
                        $("<div class='borderWrap'>")
                        .append(
                            $("<div class='top'>"),$("<div class='right'>"),$("<div class='bottom'>"),$("<div class='left'>")
                        ),
                        $("<a>").attr({href: data.snippet.resourceId.videoId})
                                .append(
                                    $("<img>").attr({src: data.snippet.thumbnails.high.url}),
                                    $("<div class='con'>")
                                        .append(
                                            $("<h2>").text(ytTitle),
                                            $("<p>").text(ytTxt),
                                            $("<span>").text(ytDate)
                                        )
                                )
                    )
            )
    });
})
.error(function(err){
    console.error("데이터 호출 실패");
})

// hover시 테두리
$("body").on("mouseenter",".youtube .inner article",function(){
    $(this).find(".top").animate({width:"100%"},speed,function(){
        $(".right").animate({height:"100%"},speed,function(){
            $(".bottom").animate({width:"100%"},speed,function(){
                $(".left").animate({height:"100%"},speed);
            });
        });
    });
});
$("body").on("mouseleave",".youtube .inner article",function(){
    $(this).find(".top").animate({width:"0%"},speed);
    $(this).find(".right").animate({height:"0%"},speed);
    $(this).find(".bottom").animate({width:"0%"},speed);
    $(this).find(".left").animate({height:"0%"},speed);
});

// pop창
$("body").on("click",".youtube .inner article a",function(e){
    e.preventDefault();

    let vidId = $(this).attr("href");

    $(".youtube")
        .append(
            $("<div class='pop'>")
                .append(
                    $("<iframe>").attr({
                        src: "https://www.youtube.com/embed/"+vidId,
                        // height: 600,
                        // width: 900,
                        frameborder: 0
                    }),
                    $("<span>").text("close")
                )
        )
});

$("body").on("click",".youtube .pop span",function(){
    $(".youtube .pop").remove();
});