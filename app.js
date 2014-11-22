function setData(track, artist, album, coverUrl) {
    $("#track").text(track);
    $("#artist").text(artist);
    $("#album").text(album);
    $('#cover').css('background-image', 'url(' + coverUrl + ')');
}

function hidePanel() {
    $('#line-track').transition({
        width:"0px"
    });

    $('#track')
        .css({
            transformOrigin: '0px 0px'
        })
        .transition({
            perspective: '500px',
            rotateX: '90deg'
        });
    $('#album')
        .css({
            transformOrigin: '0px 20px'
        })
        .transition({
            perspective: '100px',
            rotateX: '90deg'
        });

    $('#line-artist').transition({
        width:"0px",
        marginLeft : "100%"
    });

    $('#artist')
        .css({
            transformOrigin: '0px 20px'
        })
        .transition({
            opacity: 0
        });

    $('#cover')
        .css({
            transformOrigin: '0px 0px'
        })
        .transition({
            perspective: '100px',
            rotateY: '90deg'
        });
    $(".outer").transition({
        height: 0,
        width: 0,
        delay: 1000
    });
}

function showPanel() {
    $(".outer").transition({
        height: 87,
        width: 300
    });

    $('#line-track').transition({
        width:"100%",
        delay: 1000
    });

    $('#track')
        .css({
            transformOrigin: '0px 0px'
        })
        .transition({
            perspective: '500px',
            rotateX: '0deg',
            delay: 1000
        });
    $('#album')
        .css({
            transformOrigin: '0px 20px'
        })
        .transition({
            perspective: '100px',
            rotateX: '0deg',
            delay: 1000
        });

    $('#line-artist').transition({
        width:"100%",
        marginLeft : "0",
        delay: 1000
    });

    $('#artist')
        .css({
            transformOrigin: '0px 20px'
        })
        .transition({
            opacity: 1,
            delay: 1000
        });

    $('#cover')
        .css({
            transformOrigin: '0px 0px'
        })
        .transition({
            perspective: '100px',
            rotateY: '0deg',
            delay: 1000
        });
}

function showMiniPanel(){
    $("#mini-panel").animate({
        marginLeft: "1%"
    },1000);
}

function hideMiniPanel(){
    $("#mini-panel").animate({
        marginLeft: "-50%"
    },1000);
}

function setDataMiniPanel(){
    setTimeout(function(){
        document.getElementById("name").innerText = music[i].track;
        document.getElementById("name_group").innerText = music[i].artist;
        document.getElementById("album-mini").style.backgroundImage = "url("+music[i].cover+")";
        document.getElementById("album-mini").style.backgroundRepeat =  "no-repeat";
        document.getElementById("album-mini").style.backgroundSize = "100%";
    },1100)
}




