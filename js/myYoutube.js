/*
유튜브 요청주소
https://www.googleapis.com/youtube/v3/playlistItems

키
AIzaSyAMoGKvrd6wFxpLb2M8fXI83hwwuZjv7is

*/

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

        $(".youtube .inner")
            .append(
                $("<article>")
                    .append(
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