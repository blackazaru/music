/**
 * Created by Danik Tsyrkunov on 02.11.2014.
 */


var arr_audio = [
    "http://dl.zaycev.net/15033/682830/bullet_for_my_valentine_-_alone_(zaycev.net).mp3",
    "http://dl.zaycev.net/86004/2061302/rise_against_-_saviour_(zaycev.net).mp3",
    "http://dl.zaycev.net/86004/421474/rise_against_-_hero_of_war_(zaycev.net).mp3",
    "http://dl.zaycev.net/44153/482346/flyleaf_-_beautiful_bride_(zaycev.net).mp3",
    "http://dl.zaycev.net/44153/63397/flyleaf_-_cassie_(zaycev.net).mp3",
    "http://dl.zaycev.net/44153/511170/flyleaf_-_missing_(zaycev.net).mp3",
    "http://dl.zaycev.net/1021/793531/30_seconds_to_mars_-_the_kill_(zaycev.net).mp3",
    "http://dl.zaycev.net/44153/1610431/flyleaf_-_supernatural_(zaycev.net).mp3",
    "http://dl.zaycev.net/86004/933692/rise_against_-_satellite_(zaycev.net).mp3",
    "http://dl.zaycev.net/1021/977320/30_seconds_to_mars_-_a_beautiful_lie_(zaycev.net).mp3",
    "http://dl.zaycev.net/1021/2978485/30_seconds_to_mars_-_stay_(zaycev.net).mp3",
    "http://cs9-8v4.vk.me/p2/a1abd9abf7a523.mp3"];

var arr_name = [
"Bullet For My Valentine - Alone",
"Rise Against - Saviour",
"Rise Against - Hero Of War",
"Flyleaf - Beautiful Bride",
"Flyleaf - Cassie",
"Flyleaf - Missing",
"30 Seconds To Mars - The Kill",
"Flyleaf - Supernatural",
"Rise Against - Satellite",
"30 Seconds To Mars - A Beautiful Lie",
"30 Seconds To Mars - Stay",
"Nobody.one – Genesis"];

var album = [
    "http://cdn.licklibrary.com////cdn.licklibrary.com/~/media/LL/Uploads/news/F/Fever.ashx",
    "http://www.covertbooking.com/images/uploads/photos/RiseAgainst_AlbumArtwork_AppealToReason_RGBHiRes.jpg",
    "http://www.covertbooking.com/images/uploads/photos/RiseAgainst_AlbumArtwork_AppealToReason_RGBHiRes.jpg",
    "http://theywillrockyou.com/wp-content/uploads/2009/12/flyleafcover.jpg",
    "http://img2.wikia.nocookie.net/__cb20100528162336/heavenmusic/images/thumb/1/16/Flyleaf_album.JPG/600px-Flyleaf_album.JPG",
    "http://theywillrockyou.com/wp-content/uploads/2009/12/flyleafcover.jpg",
    "http://1.bp.blogspot.com/-4lw4yRu8ZKM/UhO-J8zr7cI/AAAAAAAABQg/Z1869A96QcA/s1600/30_Seconds_To_Mars-A_Beautiful_Lie-Frontal.jpg",
    "http://theywillrockyou.com/wp-content/uploads/2009/12/flyleafcover.jpg",
    "http://cs618618.vk.me/v618618272/1d9c8/BCChxBsAnXs.jpg",
    "http://1.bp.blogspot.com/-4lw4yRu8ZKM/UhO-J8zr7cI/AAAAAAAABQg/Z1869A96QcA/s1600/30_Seconds_To_Mars-A_Beautiful_Lie-Frontal.jpg",
    "http://www.album-info.ru/Shared/Cover/2014/30-seconds-to-mars-stay-song.jpg",
    "http://cs625521.vk.me/v625521603/9516/oI8V_tuOt5E.jpg"
]



var i = 0;
$(function(){
    window.a = audiojs.createAll({
        trackEnded: function(){
            next(a[0],null);
        }
    });

    $("#play").click(function(){
        if (document.getElementById("play").getAttribute("next") == "false") {
            document.getElementById("play").innerText = "Next Random Song";
            document.getElementById("audios").style.marginLeft = "0px";
            document.getElementById("audios").style.position = "static";
            document.getElementById("play").setAttribute("next", "true");
            document.getElementById("list").style.display = "block";
            document.getElementById("album").style.display = "block";
        }
        next(a[0],null);

    });

    $("#name").click(function(){
        window.location.replace(arr_audio[i]);
    });

});

window.onload = function(){
    $("#list").click(function(){
        if (document.getElementById("list_block").getAttribute("open") == "false") {
            document.getElementById("list_block").setAttribute("open", "true");

            document.getElementById("list_block").style.maxHeight = "90%";
            document.getElementById("list_block").style.overflow = "auto";

            $("#list_block").animate({
                height: "90%"
            }, 700);
            for(var i=0; i<arr_name.length; i++){
                var iDiv = document.createElement('div');
                iDiv.id = 'song_'+i;
                iDiv.className = 'song_'+i;
                iDiv.innerHTML = arr_name[i];
                iDiv.style.borderBottom = "1px solid";
                iDiv.style.cursor = "pointer";
                iDiv.setAttribute("onclick","next(a[0],"+i+")");
                document.getElementById("list_block").appendChild(iDiv);
            }
        }else{
            document.getElementById("list_block").setAttribute("open", "false");
            $("#list_block").animate({
                height: "0px"
            }, 700);
            setTimeout(function(){
            for(var i=0; i<arr_name.length; i++){
                    document.getElementById("song_"+i).remove();
            }
            },690);
        }
    });

}

function next(audio, index){
    if (index == null) {
        i = Math.floor(Math.random() * arr_audio.length);
    }else{
        i = index;
    }
    $("#name").animate({
        opacity: 0,
        marginRight: "400px"
    }, 700 );
    $("#album").animate({
        opacity: 0,
        marginLeft: "10%"
    }, 700 );

    setTimeout(function(){
        document.getElementById("name").innerText = arr_name[i];
        document.getElementById("name").style.marginRight = "-400px";

        document.getElementById("album").style.backgroundImage = "url("+album[i]+")";
        document.getElementById("album").style.backgroundRepeat =  "no-repeat";
        document.getElementById("album").style.backgroundSize = "100%";
        document.getElementById("album").style.marginLeft = "39%";

        $("#name").animate({
            opacity: 1,
            marginRight: "0px"
        }, 700 );

        $("#album").animate({
            opacity: 0.4,
            marginLeft: "23%"
        }, 700 );
    },750);


    audio.load(arr_audio[i]);
    audio.play();

}





