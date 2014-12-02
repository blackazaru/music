/**
 * Created by Danik Tsyrkunov on 02.11.2014.
 */

var i = 0;


$(function(){
    window.a = audiojs.createAll({
        trackEnded: function(){
            animationPanel(null);
        }
    });
    list();
    $("#play").click(function(){
        if (document.getElementById("play").getAttribute("next") == "false") {
            changeButtonNext();
            animationPanel(null);
        } else {
            animationPanel(null);
        }
    });


});

function changeButtonNext(){
    document.getElementById("play").innerText = "Next Random Song";
    document.getElementById("audios").style.marginLeft = "0px";
    document.getElementById("audios").style.position = "static";
    document.getElementById("play").setAttribute("next", "true");
    document.getElementById("list").style.display = "block";
    document.getElementById("album-mini").style.display = "block";
}

function animationPanel(num){
    hideMiniPanel();
    next(a[0],num);
    setDataMiniPanel();
    setData(music[i].track, music[i].artist, music[i].album, music[i].cover);
    showPanel();
    setTimeout(hidePanel, 5000);
    setTimeout(showMiniPanel, 5100);
}

function list(){
    sortBubble(music);
    $("#list").click(function(){
        if (document.getElementById("list_block").getAttribute("open") == "false") {
            document.getElementById("list_block").setAttribute("open", "true");

            document.getElementById("list_block").style.maxHeight = "90%";
            document.getElementById("list_block").style.overflow = "auto";

            $("#list_block").animate({
                height: "90%"
            }, 700);
            input = document.createElement('input');
            input.typeName = "text";
            input.id = "input";
            document.getElementById("list_block").appendChild(input);

            $("#input").keyup(function(e) {
                if(e.keyCode == 13)  {
                    serch($(this).val());
                }
            });

            for(var i=0; i<music.length; i++){
                if (document.getElementById("song_" + i) !== null) {
                    document.getElementById("song_" + i).remove();
                    document.getElementById("song_pic_" + i).remove();
                }
            }

            for(var i=0; i<music.length; i++){
                var iDiv = document.createElement('div');
                iDiv.id = 'song_'+i;
                iDiv.className = 'song_'+i;
                iDiv.innerHTML = music[i].artist+" - "+music[i].track;
                iDiv.style.borderBottom = "1px solid";
                iDiv.style.cursor = "pointer";
                iDiv.style.height = '51px';
                iDiv.setAttribute("onclick","animationPanel("+i+")");
                var picDiv = document.createElement('img');
                picDiv.style.width = '50px';
                picDiv.style.height = '50px';
                picDiv.setAttribute("src", music[i].cover);
                picDiv.style.float = "left";
                picDiv.id = 'song_pic_'+i;
                document.getElementById("list_block").appendChild(picDiv);
                document.getElementById("list_block").appendChild(iDiv);
            }
        }else{
            document.getElementById("list_block").setAttribute("open", "false");
            $("#list_block").animate({
                height: "0px"
            }, 700);
            setTimeout(function(){
                document.getElementById("input").remove();
                for(var i=0; i<music.length; i++){
                    document.getElementById("song_"+i).remove();
                    document.getElementById("song_pic_" + i).remove();
                }
            },690);
        }
    });
}

window.onload = function(){
    hidePanel();
    //arr_name = sortBubble(arr_name);
    $(".outer").css({display : "flex"});
    setTimeout(function(){
        document.getElementById("play").style.display = "block";
        $("#play").animate({
            opacity : 1
        },500);
    },1100)
};

function next(audio, index){
    if (index == null) {
        i = Math.floor(Math.random() * music.length);
    }else{
        i = index;
    }
    audio.load(music[i].song);
    audio.play();
}

function serch(query){
    if (query !== ""){
        for(var i=0; i<music.length; i++){
            if (document.getElementById("song_"+i) !== null)
                if (document.getElementById("song_" + i) !== null) {
                    document.getElementById("song_" + i).remove();
                    document.getElementById("song_pic_" + i).remove();
                }
        }

        for(var i = 0; i<music.length; i++){
            if ((music[i].artist + " - "+ music[i].track).toUpperCase().indexOf(query.toUpperCase()) !== -1) {
                var iDiv = document.createElement('div');
                iDiv.id = 'song_'+i;
                iDiv.className = 'song_'+i;
                iDiv.innerHTML = music[i].artist+" - "+music[i].track;
                iDiv.style.borderBottom = "1px solid";
                iDiv.style.cursor = "pointer";
                iDiv.style.height = '51px';
                iDiv.setAttribute("onclick","animationPanel("+i+")");
                var picDiv = document.createElement('img');
                picDiv.style.width = '50px';
                picDiv.style.height = '50px';
                picDiv.setAttribute("src", music[i].cover);
                picDiv.style.float = "left";
                picDiv.id = 'song_pic_'+i;
                document.getElementById("list_block").appendChild(picDiv);
                document.getElementById("list_block").appendChild(iDiv);
            }
        }
    }else{
        for(var i=0; i<music.length; i++){
            if (document.getElementById("song_" + i) !== null) {
                document.getElementById("song_" + i).remove();
                document.getElementById("song_pic_" + i).remove();
            }
        }
        for(var i = 0; i<music.length; i++){
            var iDiv = document.createElement('div');
            iDiv.id = 'song_'+i;
            iDiv.className = 'song_'+i;
            iDiv.innerHTML = music[i].artist+" - "+music[i].track;
            iDiv.style.borderBottom = "1px solid";
            iDiv.style.cursor = "pointer";
            iDiv.style.height = '51px';
            iDiv.setAttribute("onclick","animationPanel("+i+")");
            var picDiv = document.createElement('img');
            picDiv.style.width = '50px';
            picDiv.style.height = '50px';
            picDiv.setAttribute("src", music[i].cover);
            picDiv.style.float = "left";
            picDiv.id = 'song_pic_'+i;
            document.getElementById("list_block").appendChild(picDiv);
            document.getElementById("list_block").appendChild(iDiv);
        }
    }

}

function sortBubble(data) {
    var tmp;

    for (var i = data.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (data[j].artist > data[j+1].artist) {
                tmp = data[j];
                data[j] = data[j+1];
                data[j+1] = tmp;
            }
        }
    }
    return data;
}

















