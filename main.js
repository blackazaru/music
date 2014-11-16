/**
 * Created by Danik Tsyrkunov on 02.11.2014.
 */





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
     arr_name = sortBubble(arr_name);
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

            for(var i=0; i<arr_name.length; i++){
                if (document.getElementById("song_"+i) !== null)
                    document.getElementById("song_"+i).remove();
            }

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
                document.getElementById("input").remove();
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

function serch(query){
    if (query !== ""){
        for(var i=0; i<arr_name.length; i++){
            if (document.getElementById("song_"+i) !== null)
                document.getElementById("song_"+i).remove();
        }

        for(var i = 0; i<arr_name.length; i++){
            if (arr_name[i].toUpperCase().indexOf(query.toUpperCase()) !== -1) {
                var iDiv = document.createElement('div');
                iDiv.id = 'song_' + i;
                iDiv.className = 'song_' + i;
                iDiv.innerHTML = arr_name[i];
                iDiv.style.borderBottom = "1px solid";
                iDiv.style.cursor = "pointer";
                iDiv.setAttribute("onclick", "next(a[0]," + i + ")");
                document.getElementById("list_block").appendChild(iDiv);
            }
        }
    }else{
        for(var i=0; i<arr_name.length; i++){
            if (document.getElementById("song_"+i) !== null)
                document.getElementById("song_"+i).remove();
        }
        for(var i = 0; i<arr_name.length; i++){
                var iDiv = document.createElement('div');
                iDiv.id = 'song_' + i;
                iDiv.className = 'song_' + i;
                iDiv.innerHTML = arr_name[i];
                iDiv.style.borderBottom = "1px solid";
                iDiv.style.cursor = "pointer";
                iDiv.setAttribute("onclick", "next(a[0]," + i + ")");
                document.getElementById("list_block").appendChild(iDiv);
        }
    }

}

function sortBubble(data) {
    var tmp;

    for (var i = data.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (data[j] > data[j+1]) {
                tmp = data[j];
                data[j] = data[j+1];
                data[j+1] = tmp;
                var  c = arr_audio[j];arr_audio[j] = arr_audio[j+1];arr_audio[j+1] = c;
                c = album[j];album[j] = album[j+1];album[j+1] = c;
            }
        }
    }
    return data;
}















