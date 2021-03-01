$(document).ready(function(){

    let url = ('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?domains=wsj.com&apiKey=1ba1fb58a7524ba3b277f234b55ffb5e', {
        headers: new Headers({
            "X-Requested-With": "iiehnnjjdhdhdnheinignhihgiljijijijij",
        })
    });

    $.ajax({
        url: url,
        method: "GET",
        dataType: "Json",

        beforeSend: function(){
            $(".progress").show();
        },

        complete: function(){
            $(".progress").hide();
        },

        success: function(news){
            let output = "";
            let latestNews = news.articles;

            for (var i in latestNews) {
                output += `
                    <div class='blog__post card'>
                        <h3>${latestNews[i].title}</h3>
                    </div>
                `;
            };

            if(output !== ''){
                $('#blog').html(output);
            }
        },

        error: function () {
            $('#blog').html('<h1>Some Error Occured</h1>');
        }
    })
});