/*
유튜브 요청주소
https://www.googleapis.com/youtube/v3/playlistItems

키
AIzaSyAMoGKvrd6wFxpLb2M8fXI83hwwuZjv7is
*/

// const $border = $(".youtube .inner article a .borderWrap");
let speed = 500;


getYoutube({
    frame: "main",
    num: 10,
    playlist: "PL-4RqvSks9qU6ZgUR9NmKCqXWeUJ97FLH"
});


function getYoutube(opt){
    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/playlistItems",
        dataType: "jsonp",
        data: {
            part: "snippet",
            key: "AIzaSyAMoGKvrd6wFxpLb2M8fXI83hwwuZjv7is",
            maxResults: opt.num,
            playlistId: opt.playlist
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
    
            $(opt.frame)
                .append(
                    $("<article>")
                        .append(
                            // $("<div class='borderWrap'>")
                            // .append(
                            //     $("<div class='top'>"),$("<div class='right'>"),$("<div class='bottom'>"),$("<div class='left'>")
                            // ),
                            $("<a>").attr({href: data.snippet.resourceId.videoId})
                                    .append(
                                        $("<div class='thumnails'>").css("background-image","url(" + data.snippet.thumbnails.high.url + ")")
                                            .append("<div class='dot'></div>"),
                                        $("<div class='con'>")
                                            .append(
                                                $("<p>").text(ytTitle),
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

    // pop창
    $("body").on("click",".youtube "+opt.frame+" article a",function(e){
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
                            frameborder: 0,
                            allowfullscreen: true
                        }),
                        $("<span>").text("close")
                    )
            )
    });

    $("body").on("click",".youtube .pop span",function(){
        $(".youtube .pop").remove();
    });
}