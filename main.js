/**
 * Created by Danik Tsyrkunov on 02.11.2014.
 */


var arr_audio = [
    "http://dl.zaycev.net/15033/682830/bullet_for_my_valentine_-_alone_(zaycev.net).mp3",
    "http://dl.zaycev.net/86004/2061302/rise_against_-_saviour_(zaycev.net).mp3",
    "http://dl.zaycev.net/86004/421474/rise_against_-_hero_of_war_(zaycev.net).mp3",
    "http://dl.zaycev.net/44153/482346/flyleaf_-_beautiful_bride_(zaycev.net).mp3",
    "http://dl.zaycev.net/1021/26556/30_seconds_to_mars_-_hero_(zaycev.net).mp3",
    "http://dl.zaycev.net/44153/63397/flyleaf_-_cassie_(zaycev.net).mp3",
    "http://dl.zaycev.net/44153/511170/flyleaf_-_missing_(zaycev.net).mp3",
    "http://dl.zaycev.net/1021/793531/30_seconds_to_mars_-_the_kill_(zaycev.net).mp3",
    "http://dl.zaycev.net/44153/1610431/flyleaf_-_supernatural_(zaycev.net).mp3",
    "http://dl.zaycev.net/86004/933692/rise_against_-_satellite_(zaycev.net).mp3",
    "http://dl.zaycev.net/1021/977320/30_seconds_to_mars_-_a_beautiful_lie_(zaycev.net).mp3",
    "http://dl.zaycev.net/1021/2978485/30_seconds_to_mars_-_stay_(zaycev.net).mp3"];

var arr_name = [
"Bullet For My Valentine - Alone",
"Rise Against - Saviour",
"Rise Against - Hero Of Bar",
"Flyleaf - Beautiful Bride",
"30 Seconds To Mars - Hero",
"Flyleaf - Cassie",
"Flyleaf - Missing",
"30 Seconds To Mars - The Kill",
"Flyleaf - Supernatural",
"Rise Against - Satellite",
"30 Seconds To Mars - A Beautiful Lie",
"30 Seconds To Mars - Stay"];
var i = 0;
$(function(){
    var a = audiojs.createAll({
        trackEnded: function(){
            next(a[0]);
        }
    });

    $("#play").click(function(){
        if (document.getElementById("play").getAttribute("next") == "false") {
            document.getElementById("play").innerText = "Next";
            document.getElementById("audios").style.marginLeft = "0px";
            document.getElementById("audios").style.position = "static";
            document.getElementById("play").setAttribute("next", "true");
        }
        next(a[0]);
    });

    $("#name").click(function(){
        window.location.replace(arr_audio[i]);
    });

});

function next(audio){
    i = Math.floor(Math.random()*arr_audio.length);
    document.getElementById("name").innerText = arr_name[i];
    audio.load(arr_audio[i]);
    audio.play();
}


