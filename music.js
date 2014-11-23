/**
 * Created by Danik Tsyrkunov on 16.11.2014.
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
    "http://dl.zaycev.net/97258/3074526/system_of_a_down_-_b.y.o.b._(zaycev.net).mp3",
"http://dl.zaycev.net/139764/1615746/soad_-_revenga_(zaycev.net).mp3",
"http://dl.zaycev.net/139764/1266916/soad_-_radio_video_(zaycev.net).mp3",

"http://cs5071v4.vk.me/u4665445/audios/df246f50724f.mp3",
"http://cs521217v4.vk.me/u58073616/audios/98f4191ddf0c.mp3",
"http://cs4608v4.vk.me/u25047245/audios/2b4e3d00ec31.mp3",
"http://cs4843v4.vk.me/u8132429/audios/b593067ab80c.mp3",
"http://cs5082v4.vk.me/u76457645/audios/da99eeb5bd9f.mp3",
"http://cs1380v4.vk.me/u7719320/audios/f29d18f56b0b.mp3",
"http://cs9-4v4.vk.me/p20/c1cd1bff213bda.mp3",
"http://cs4664v4.vk.me/u22703745/audios/fbac136ec1c1.mp3",
"http://cs4695v4.vk.me/u15944945/audios/89ab6f76dfcd.mp3",
"http://cs4587v4.vk.me/u15944945/audios/fc77e020e694.mp3",
"http://cs4768v4.vk.me/u19042365/audios/56ff69927a51.mp3",
"http://cs521323v4.vk.me/u2697500/audios/16867c127af0.mp3",
"http://cs9-3v4.vk.me/p10/993c8811566d7e.mp3",
"http://cs9-6v4.vk.me/p18/9db0de45dd48ad.mp3",
"http://cs9-6v4.vk.me/p18/9db0de45dd48ad.mp3",
"http://cs1636v4.vk.me/u2225884/audios/5b0e64cf82f7.mp3",
"http://cs4528v4.vk.me/u656845/audios/a1204f38636b.mp3",
"http://cs1346v4.vk.me/u1216759/audios/51ac43e15f48.mp3",
"http://cs4488v4.vk.me/u7843745/audios/e158b327e1dc.mp3",
"http://cs4897v4.vk.me/u18549578/audios/3d6b156084bf.mp3",
"http://cs4488v4.vk.me/u7843745/audios/c790490f14a3.mp3",
"http://cs4966v4.vk.me/u47104455/audios/8d95bc619b3f.mp3",
"http://cs4810v4.vk.me/u8871698/audios/99f7c0ed535a.mp3",
"http://cs1468v4.vk.me/u1664079/audios/73f30661c9e6.mp3",
"http://cs4540v4.vk.me/u35894224/audios/11f4a87c8e9a.mp3",
"http://cs1809v4.vk.me/u4854703/audios/7f4271d048ea.mp3",
"http://cs1464v4.vk.me/u1666196/audios/cab39e883cfb.mp3",
"http://cs1277v4.vk.me/u764444/audios/eb2d83eac024.mp3",
"http://cs5011v4.vk.me/u3296999/audios/bdef417e27dd.mp3",
"http://cs1040v4.vk.me/u1846763/audios/e3a5e151f6c1.mp3",
"http://cs536518v4.vk.me/u2742053/audios/ec083cc5559d.mp3",
"http://cs9-5v4.vk.me/p16/792602b3bd76aa.mp3",
"http://cs9-6v4.vk.me/p7/61fbbf1ff99ca1.mp3",
"http://cs9-3v4.vk.me/p1/98ed36ee97be94.mp3",
"http://cs4701v4.vk.me/u6108945/audios/30fcea3495c6.mp3",
"http://cs4997v4.vk.me/u2763964/audios/2333eb02f162.mp3",
"http://cs4774v4.vk.me/u4842564/audios/fdbf20c85635.mp3",
"http://cs1345v4.vk.me/u8903551/audios/f77a725ef329.mp3"];



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
    "System Of A Down - B.Y.O.B.",
"System Of A Down - Revenga",
"System Of A Down - Radio/Video",

"Serj Tankian - Gate 21",
"Serj Tankian - Harakiri",
"Serj Tankian - Empty Walls",
"Serj Tankian - Feed Us",
"Serj Tankian - Honking Antelope",
"Scars On Broadway - They Say",
"Scars On Broadway - Whoring Streets",
"Scars On Broadway - 3005",
"Deftones - Diamond Eyes",
"Deftones - Knife Party",
"Deftones - Hole In The Earth",
"Deftones - Swerve City",
"System Of A Down - Fuck The System",
"System Of A Down - I-E-A-I-A-I-O",
"System Of A Down - Question!",
"System Of A Down - Lost In Hollywood",
"System Of A Down - Holy Mountains",
"Rise Against - Ready To Fall",
"Rise Against - Audience of One",
"Rise Against - Re-education (Through Labour)",
"Rise Against - Tip The Scales",
"Rise Against - Broken Mirrors",
"Rise Against - Lanterns",
"Korn - Here To Stay",
"Korn - Another Brick In The Wall",
"Korn - Dead Bodies Everywhere",
"Korn - Wake Up",
"Korn - No Way",
"Godsmack - Love-Hate-Sex-Pain",
"Godsmack - I Stand Alone",
"Godsmack - 1000hp",

"Bon Jovi – Always",
"Bon Jovi – You Give Love a Bad Name",
"Bon Jovi – Livin' On A Prayer",
"Bon Jovi – Wanted Dead Or Alive",
"Bon Jovi – Bad Medicine",
"Bon Jovi – Runaway",
"Bon Jovi – We Got It Going On"];

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
    "http://cdn.albumoftheyear.org/album/mezmerize.jpg",
    "http://cdn.albumoftheyear.org/album/mezmerize.jpg",
    "http://cdn.albumoftheyear.org/album/mezmerize.jpg",

    "http://forum.autoua.net/files/4815965-serjtankia.jpg",
    "http://cs304910.vk.me/v304910939/32ba/HK_egrAxUiQ.jpg",
    "http://img.wmgstg.com/wmgstankiandx/files/elect%20the%20dead_0.jpg",
    "http://img.wmgstg.com/wmgstankiandx/files/elect%20the%20dead_0.jpg",
    "http://img.wmgstg.com/wmgstankiandx/files/elect%20the%20dead_0.jpg",
    "http://img01.mr-static.com/photo/ScarsOnBroadway/ScarsOnBroadway-02-big.jpg",
    "http://img01.mr-static.com/photo/ScarsOnBroadway/ScarsOnBroadway-02-big.jpg",
    "http://img01.mr-static.com/photo/ScarsOnBroadway/ScarsOnBroadway-02-big.jpg",
    "http://www.heavyblogisheavy.com/wp-content/uploads/2010/03/24715_379793252490_5544067490_3610653_4806129_n.jpg",
    "http://press.wbr.com/media/cms/images/201110/white-pony-extralarge_1318892797258.jpg",
    "http://united-metal.ru/uploads/posts/2012-09/1347992280_15752.jpg",
    "http://hangout.altsounds.com/geek/gars/images/1/2/8/3/8/deftoneskoinoyokancovernew.jpeg",
    //leha
    "http://nhetic.files.wordpress.com/2012/08/system-of-a-down-steal-this-album.jpg",
    "http://nhetic.files.wordpress.com/2012/08/system-of-a-down-steal-this-album.jpg",
    "https://fanart.tv/fanart/music/cc0b7089-c08d-4c10-b6b0-873582c17fd6/albumcover/mezmerize-4ddaf6be7f5d2.jpg",
    "https://fanart.tv/fanart/music/cc0b7089-c08d-4c10-b6b0-873582c17fd6/albumcover/mezmerize-4ddaf6be7f5d2.jpg",
    "http://www.ultraimg.com/images/G5eK.jpg",

    "http://2.bp.blogspot.com/_AfnWPBFmZA0/TGNwnjkWWqI/AAAAAAAAFzA/CcBnlP_WhmI/s1600/The+Sufferer+And+The+Witness.jpg",
    "http://3219a2.medialib.glogster.com/media/ca/ca0d7d3687cf28572dad5dd74efbcbe2d10ca8a4d6eb2e069bbfb446519c997e/riseagainst-albumartwork-appealtoreason-rgbhires.jpg",
    "http://3219a2.medialib.glogster.com/media/ca/ca0d7d3687cf28572dad5dd74efbcbe2d10ca8a4d6eb2e069bbfb446519c997e/riseagainst-albumartwork-appealtoreason-rgbhires.jpg",
    "http://www.copertinedvd.org/copertine-cd-file/R/rise_against_-_siren_song_of_the_counter_culture_-_front.jpg",
    "http://www.shopradiocast.com/product_images/f/094/Cover__300RGB__42614_zoom.jpg",
    "http://music.totalassault.com/team_release_img/581.jpg",
    "http://4.bp.blogspot.com/-dISOZeoDO8w/UCZYi_YYsiI/AAAAAAAAAh0/XNdSXEArHkU/s1600/Korn-Greatest_Hits_Volume_1-Frontal.jpg",
    "http://4.bp.blogspot.com/-dISOZeoDO8w/UCZYi_YYsiI/AAAAAAAAAh0/XNdSXEArHkU/s1600/Korn-Greatest_Hits_Volume_1-Frontal.jpg",
    "http://members.xoom.virgilio.it/solesinfo/K/Korn%20-%20Follow%20the%20leader%20-%20F.jpg",
    "http://ak1.ostkcdn.com/images/products/5807265//bmmg/ent/Korn-The-Essential-Korn-Parental-Advisory-L886978438829.JPG",
    "http://www.nuclearblast.de/static/articles/197/197193.png/1000x1000.png",
    "http://images.coveralia.com/audio/g/Godsmack-The_Oracle-Frontal.jpg?647",
    "http://images.coveralia.com/audio/g/Godsmack-Faceless-Frontal.jpg?220",
    "http://www.guitarworld.com/files/imagecache/futureus_imagegallery_fullsize/gallery/Godsmack_1000hp_Album%20Cover%20Final.jpg",

    "http://vk.com/away.php?utf=1&to=https%3A%2F%2Freturntothe80s.files.wordpress.com%2F2010%2F09%2Fbon-jovi-greatest-hits.jpg",
    "http://vk.com/away.php?utf=1&to=https%3A%2F%2Freturntothe80s.files.wordpress.com%2F2010%2F09%2Fbon-jovi-greatest-hits.jpg",
    "http://vk.com/away.php?utf=1&to=https%3A%2F%2Freturntothe80s.files.wordpress.com%2F2010%2F09%2Fbon-jovi-greatest-hits.jpg",
    "http://vk.com/away.php?utf=1&to=https%3A%2F%2Freturntothe80s.files.wordpress.com%2F2010%2F09%2Fbon-jovi-greatest-hits.jpg",
    "http://vk.com/away.php?utf=1&to=https%3A%2F%2Freturntothe80s.files.wordpress.com%2F2010%2F09%2Fbon-jovi-greatest-hits.jpg",
    "http://vk.com/away.php?utf=1&to=https%3A%2F%2Freturntothe80s.files.wordpress.com%2F2010%2F09%2Fbon-jovi-greatest-hits.jpg",
    "http://vk.com/away.php?utf=1&to=http%3A%2F%2Fimages.coveralia.com%2Faudio%2Fb%2FBon_Jovi-Lost_Highway-Frontal.jpg%3F835"
]


var music = [
    {
        "track":"A Beautiful Lie",
        "artist":"30 Seconds To Mars",
        "album":"",
        "song":"http://dl.zaycev.net/1021/977320/30_seconds_to_mars_-_a_beautiful_lie_(zaycev.net).mp3",
        "cover":"http://1.bp.blogspot.com/-4lw4yRu8ZKM/UhO-J8zr7cI/AAAAAAAABQg/Z1869A96QcA/s1600/30_Seconds_To_Mars-A_Beautiful_Lie-Frontal.jpg"
    },
    {
        "track":"Stay",
        "artist":"30 Seconds To Mars",
        "album":"",
        "song":"http://dl.zaycev.net/1021/2978485/30_seconds_to_mars_-_stay_(zaycev.net).mp3",
        "cover":"http://www.album-info.ru/Shared/Cover/2014/30-seconds-to-mars-stay-song.jpg"
    },
    {
        "track":"The Kill",
        "artist":"30 Seconds To Mars",
        "album":"",
        "song":"http://dl.zaycev.net/1021/793531/30_seconds_to_mars_-_the_kill_(zaycev.net).mp3",
        "cover":"http://1.bp.blogspot.com/-4lw4yRu8ZKM/UhO-J8zr7cI/AAAAAAAABQg/Z1869A96QcA/s1600/30_Seconds_To_Mars-A_Beautiful_Lie-Frontal.jpg"
    },
    {
        "track":"Always",
        "artist":"Bon Jovi",
        "album":"",
        "song":"http://dl.zaycev.net/13822/712082/bon_jovi_-_always_(zaycev.net).mp3",
        "cover":"http://vk.com/away.php?utf=1&to=https%3A%2F%2Freturntothe80s.files.wordpress.com%2F2010%2F09%2Fbon-jovi-greatest-hits.jpg"
    },
    {
        "track":"Bad Medicine",
        "artist":"Bon Jovi",
        "album":"",
        "song":"http://dl.zaycev.net/13822/2047490/bon_jovi_-_bad_medicine_(zaycev.net).mp3",
        "cover":"http://vk.com/away.php?utf=1&to=https%3A%2F%2Freturntothe80s.files.wordpress.com%2F2010%2F09%2Fbon-jovi-greatest-hits.jpg"
    },
    {
        "track":"Livin' On A Prayer",
        "artist":"Bon Jovi",
        "album":"",
        "song":"http://dl.zaycev.net/13822/842723/bon_jovi_-_livin_on_a_prayer_(zaycev.net).mp3",
        "cover":"http://vk.com/away.php?utf=1&to=https%3A%2F%2Freturntothe80s.files.wordpress.com%2F2010%2F09%2Fbon-jovi-greatest-hits.jpg"
    },
    {
        "track":"Runaway",
        "artist":"Bon Jovi",
        "album":"",
        "song":"http://dl.zaycev.net/13822/1112530/bon_jovi_-_runaway_(zaycev.net).mp3",
        "cover":"http://vk.com/away.php?utf=1&to=https%3A%2F%2Freturntothe80s.files.wordpress.com%2F2010%2F09%2Fbon-jovi-greatest-hits.jpg"
    },
    {
        "track":"Wanted Dead Or Alive",
        "artist":"Bon Jovi",
        "album":"",
        "song":"http://dl.zaycev.net/13822/1781956/bon_jovi_-_wanted_dead_or_alive_(zaycev.net).mp3",
        "cover":"http://vk.com/away.php?utf=1&to=https%3A%2F%2Freturntothe80s.files.wordpress.com%2F2010%2F09%2Fbon-jovi-greatest-hits.jpg"
    },
    {
        "track":"We Got It Going On",
        "artist":"Bon Jovi",
        "album":"",
        "song":"http://dl.zaycev.net/13822/129201/bon_jovi_-_we_got_it_going_on_(zaycev.net).mp3",
        "cover":"http://vk.com/away.php?utf=1&to=http%3A%2F%2Fimages.coveralia.com%2Faudio%2Fb%2FBon_Jovi-Lost_Highway-Frontal.jpg%3F835"
    },
    {
        "track":"You Give Love a Bad Name",
        "artist":"Bon Jovi",
        "album":"",
        "song":"http://dl.zaycev.net/13822/2300873/bon_jovi_-_you_give_love_a_bad_name_(zaycev.net).mp3",
        "cover":"http://vk.com/away.php?utf=1&to=https%3A%2F%2Freturntothe80s.files.wordpress.com%2F2010%2F09%2Fbon-jovi-greatest-hits.jpg"
    },
    {
        "track":"Alone",
        "artist":"Bullet For My Valentine",
        "album":"",
        "song":"http://dl.zaycev.net/15033/682830/bullet_for_my_valentine_-_alone_(zaycev.net).mp3",
        "cover":"http://cdn.licklibrary.com////cdn.licklibrary.com/~/media/LL/Uploads/news/F/Fever.ashx"
    },
    {
        "track":"Diamond Eyes",
        "artist":"Deftones",
        "album":"",
        "song":"http://dl.zaycev.net/23735/805606/deftones_-_diamond_eyes_(zaycev.net).mp3",
        "cover":"http://www.heavyblogisheavy.com/wp-content/uploads/2010/03/24715_379793252490_5544067490_3610653_4806129_n.jpg"
    },
    {
        "track":"Hole In The Earth",
        "artist":"Deftones",
        "album":"",
        "song":"http://dl.zaycev.net/23735/47605/deftones_-_hole_in_the_earth_(zaycev.net).mp3",
        "cover":"http://united-metal.ru/uploads/posts/2012-09/1347992280_15752.jpg"
    },
    {
        "track":"Knife Party",
        "artist":"Deftones",
        "album":"",
        "song":"http://dl.zaycev.net/23735/120027/deftones_-_knife_party_(zaycev.net).mp3",
        "cover":"http://press.wbr.com/media/cms/images/201110/white-pony-extralarge_1318892797258.jpg"
    },
    {
        "track":"Swerve City",
        "artist":"Deftones",
        "album":"",
        "song":"http://dl.zaycev.net/23735/1981750/deftones_-_swerve_city_(zaycev.net).mp3",
        "cover":"http://hangout.altsounds.com/geek/gars/images/1/2/8/3/8/deftoneskoinoyokancovernew.jpeg"
    },
    {
        "track":"Beautiful Bride",
        "artist":"Flyleaf",
        "album":"",
        "song":"http://dl.zaycev.net/44153/482346/flyleaf_-_beautiful_bride_(zaycev.net).mp3",
        "cover":"http://theywillrockyou.com/wp-content/uploads/2009/12/flyleafcover.jpg"
    },
    {
        "track":"Cassie",
        "artist":"Flyleaf",
        "album":"",
        "song":"http://dl.zaycev.net/44153/63397/flyleaf_-_cassie_(zaycev.net).mp3",
        "cover":"http://img2.wikia.nocookie.net/__cb20100528162336/heavenmusic/images/thumb/1/16/Flyleaf_album.JPG/600px-Flyleaf_album.JPG"
    },
    {
        "track":"Missing",
        "artist":"Flyleaf",
        "album":"",
        "song":"http://dl.zaycev.net/44153/511170/flyleaf_-_missing_(zaycev.net).mp3",
        "cover":"http://theywillrockyou.com/wp-content/uploads/2009/12/flyleafcover.jpg"
    },
    {
        "track":"Supernatural",
        "artist":"Flyleaf",
        "album":"",
        "song":"http://dl.zaycev.net/44153/1610431/flyleaf_-_supernatural_(zaycev.net).mp3",
        "cover":"http://theywillrockyou.com/wp-content/uploads/2009/12/flyleafcover.jpg"
    },
    {
        "track":"1000hp",
        "artist":"Godsmack",
        "album":"",
        "song":"http://dl.zaycev.net/47319/3024664/godsmack_-_1000hp_(zaycev.net).mp3",
        "cover":"http://www.guitarworld.com/files/imagecache/futureus_imagegallery_fullsize/gallery/Godsmack_1000hp_Album%20Cover%20Final.jpg"
    },
    {
        "track":"I Stand Alone",
        "artist":"Godsmack",
        "album":"",
        "song":"http://dl.zaycev.net/47319/1729934/godsmack_-_i_stand_alone_(zaycev.net).mp3",
        "cover":"http://images.coveralia.com/audio/g/Godsmack-Faceless-Frontal.jpg?220"
    },
    {
        "track":"Love-Hate-Sex-Pain",
        "artist":"Godsmack",
        "album":"",
        "song":"http://dl.zaycev.net/47319/691416/godsmack_-_love-hate-sex-pain_(zaycev.net).mp3",
        "cover":"http://images.coveralia.com/audio/g/Godsmack-The_Oracle-Frontal.jpg?647"
    },
    {
        "track":"Another Brick In The Wall",
        "artist":"Korn",
        "album":"",
        "song":"http://dl.zaycev.net/59396/40490/korn_-_another_brick_in_the_wall_(zaycev.net).mp3",
        "cover":"http://4.bp.blogspot.com/-dISOZeoDO8w/UCZYi_YYsiI/AAAAAAAAAh0/XNdSXEArHkU/s1600/Korn-Greatest_Hits_Volume_1-Frontal.jpg"
    },
    {
        "track":"Dead Bodies Everywhere",
        "artist":"Korn",
        "album":"",
        "song":"http://dl.zaycev.net/59396/40233/korn_-_dead_bodies_everywhere_(zaycev.net).mp3",
        "cover":"http://members.xoom.virgilio.it/solesinfo/K/Korn%20-%20Follow%20the%20leader%20-%20F.jpg"
    },
    {
        "track":"Here To Stay",
        "artist":"Korn",
        "album":"",
        "song":"http://dl.zaycev.net/59396/40439/korn_-_here_to_stay_(zaycev.net).mp3",
        "cover":"http://4.bp.blogspot.com/-dISOZeoDO8w/UCZYi_YYsiI/AAAAAAAAAh0/XNdSXEArHkU/s1600/Korn-Greatest_Hits_Volume_1-Frontal.jpg"
    },
    {
        "track":"No Way",
        "artist":"Korn",
        "album":"",
        "song":"http://dl.zaycev.net/59396/40409/korn_-_no_way_(zaycev.net).mp3",
        "cover":"http://www.nuclearblast.de/static/articles/197/197193.png/1000x1000.png"
    },
    {
        "track":"Wake Up",
        "artist":"Korn",
        "album":"",
        "song":"http://dl.zaycev.net/59396/40407/korn_-_wake_up_(zaycev.net).mp3",
        "cover":"http://ak1.ostkcdn.com/images/products/5807265//bmmg/ent/Korn-The-Essential-Korn-Parental-Advisory-L886978438829.JPG"
    },
    {
        "track":"Audience of One",
        "artist":"Rise Against",
        "album":"",
        "song":"http://dl.zaycev.net/86004/822191/rise_against_-_audience_of_one_(zaycev.net).mp3",
        "cover":"http://3219a2.medialib.glogster.com/media/ca/ca0d7d3687cf28572dad5dd74efbcb…b2e069bbfb446519c997e/riseagainst-albumartwork-appealtoreason-rgbhires.jpg"
    },
    {
        "track":"Broken Mirrors",
        "artist":"Rise Against",
        "album":"",
        "song":"http://dl.zaycev.net/181168/933696/rise_against_-_broken_mirrors_(zaycev.net).mp3",
        "cover":"http://www.shopradiocast.com/product_images/f/094/Cover__300RGB__42614_zoom.jpg"
    },
    {
        "track":"Hero Of War",
        "artist":"Rise Against",
        "album":"",
        "song":"http://dl.zaycev.net/86004/421474/rise_against_-_hero_of_war_(zaycev.net).mp3",
        "cover":"http://www.covertbooking.com/images/uploads/photos/RiseAgainst_AlbumArtwork_AppealToReason_RGBHiRes.jpg"
    },
    {
        "track":"Lanterns",
        "artist":"Rise Against",
        "album":"",
        "song":"http://dl.zaycev.net/86004/1595239/rise_against_-_lanterns_(zaycev.net).mp3",
        "cover":"http://music.totalassault.com/team_release_img/581.jpg"
    },
    {
        "track":"Re-education (Through Labour)",
        "artist":"Rise Against",
        "album":"",
        "song":"http://dl.zaycev.net/86004/1763939/rise_against_-_re-education_(zaycev.net).mp3",
        "cover":"http://3219a2.medialib.glogster.com/media/ca/ca0d7d3687cf28572dad5dd74efbcb…b2e069bbfb446519c997e/riseagainst-albumartwork-appealtoreason-rgbhires.jpg"
    },
    {
        "track":"Ready To Fall",
        "artist":"Rise Against",
        "album":"",
        "song":"http://dl.zaycev.net/86004/1738499/rise_against_-_ready_to_fall_(zaycev.net).mp3",
        "cover":"http://2.bp.blogspot.com/_AfnWPBFmZA0/TGNwnjkWWqI/AAAAAAAAFzA/CcBnlP_WhmI/s1600/The+Sufferer+And+The+Witness.jpg"
    },
    {
        "track":"Satellite",
        "artist":"Rise Against",
        "album":"",
        "song":"http://dl.zaycev.net/86004/933692/rise_against_-_satellite_(zaycev.net).mp3",
        "cover":"http://cs618618.vk.me/v618618272/1d9c8/BCChxBsAnXs.jpg"
    },
    {
        "track":"Saviour",
        "artist":"Rise Against",
        "album":"",
        "song":"http://dl.zaycev.net/86004/2061302/rise_against_-_saviour_(zaycev.net).mp3",
        "cover":"http://www.covertbooking.com/images/uploads/photos/RiseAgainst_AlbumArtwork_AppealToReason_RGBHiRes.jpg"
    },
    {
        "track":"Tip The Scales",
        "artist":"Rise Against",
        "album":"",
        "song":"http://dl.zaycev.net/86004/133878/rise_against_-_tip_the_scales_(zaycev.net).mp3",
        "cover":"http://www.copertinedvd.org/copertine-cd-file/R/rise_against_-_siren_song_of_the_counter_culture_-_front.jpg"
    },
    {
        "track":"3005",
        "artist":"Scars On Broadway",
        "album":"",
        "song":"http://dl.zaycev.net/89279/273572/scars_on_broadway_-_3005_original_(zaycev.net).mp3",
        "cover":"http://img01.mr-static.com/photo/ScarsOnBroadway/ScarsOnBroadway-02-big.jpg"
    },
    {
        "track":"They Say",
        "artist":"Scars On Broadway",
        "album":"",
        "song":"http://dl.zaycev.net/89279/232733/scars_on_broadway_-_they_say_(zaycev.net).mp3",
        "cover":"http://img01.mr-static.com/photo/ScarsOnBroadway/ScarsOnBroadway-02-big.jpg"
    },
    {
        "track":"Whoring Streets",
        "artist":"Scars On Broadway",
        "album":"",
        "song":"http://dl.zaycev.net/89279/1150419/scars_on_broadway_-_whoring_streets_(zaycev.net).mp3",
        "cover":"http://img01.mr-static.com/photo/ScarsOnBroadway/ScarsOnBroadway-02-big.jpg"
    },
    {
        "track":"Empty Walls",
        "artist":"Serj Tankian",
        "album":"",
        "song":"http://dl.zaycev.net/90328/164323/serj_tankian_-_empty_walls_(zaycev.net).mp3",
        "cover":"http://img.wmgstg.com/wmgstankiandx/files/elect%20the%20dead_0.jpg"
    },
    {
        "track":"Feed Us",
        "artist":"Serj Tankian",
        "album":"",
        "song":"http://dl.zaycev.net/90328/1474490/serj_tankian_-_feed_us_(zaycev.net).mp3",
        "cover":"http://img.wmgstg.com/wmgstankiandx/files/elect%20the%20dead_0.jpg"
    },
    {
        "track":"Gate 21",
        "artist":"Serj Tankian",
        "album":"",
        "song":"http://dl.zaycev.net/90328/783250/serj_tankian_-_gate_21_(zaycev.net).mp3",
        "cover":"http://forum.autoua.net/files/4815965-serjtankia.jpg"
    },
    {
        "track":"Harakiri",
        "artist":"Serj Tankian",
        "album":"",
        "song":"http://dl.zaycev.net/90328/1434908/serj_tankian_-_harakiri_(zaycev.net).mp3",
        "cover":"http://cs304910.vk.me/v304910939/32ba/HK_egrAxUiQ.jpg"
    },
    {
        "track":"Honking Antelope",
        "artist":"Serj Tankian",
        "album":"",
        "song":"http://dl.zaycev.net/90328/173882/serj_tankian_-_honking_antelope_(zaycev.net).mp3",
        "cover":"http://img.wmgstg.com/wmgstankiandx/files/elect%20the%20dead_0.jpg"
    },
    {
        "track":"B.Y.O.B.",
        "artist":"System Of A Down",
        "album":"",
        "song":"http://dl.zaycev.net/97258/3074526/system_of_a_down_-_b.y.o.b._(zaycev.net).mp3",
        "cover":"http://cdn.albumoftheyear.org/album/mezmerize.jpg"
    },
    {
        "track":"Fuck The System",
        "artist":"System Of A Down",
        "album":"",
        "song":"http://dl.zaycev.net/139764/1266915/soad_-_fuck_the_system_(zaycev.net).mp3",
        "cover":"http://nhetic.files.wordpress.com/2012/08/system-of-a-down-steal-this-album.jpg"
    },
    {
        "track":"Holy Mountains",
        "artist":"System Of A Down",
        "album":"",
        "song":"http://dl.zaycev.net/139764/1458337/soad_-_holy_mountains_(zaycev.net).mp3",
        "cover":"http://www.ultraimg.com/images/G5eK.jpg"
    },
    {
        "track":"I-E-A-I-A-I-O",
        "artist":"System Of A Down",
        "album":"",
        "song":"http://dl.zaycev.net/139764/1419095/soad_-_i-e-a-i-a-i-o_(zaycev.net).mp3",
        "cover":"http://nhetic.files.wordpress.com/2012/08/system-of-a-down-steal-this-album.jpg"
    },
    {
        "track":"Lost In Hollywood",
        "artist":"System Of A Down",
        "album":"",
        "song":"http://dl.zaycev.net/139764/1561305/soad_-_lost_in_hollywood_(zaycev.net).mp3",
        "cover":"https://fanart.tv/fanart/music/cc0b7089-c08d-4c10-b6b0-873582c17fd6/albumcover/mezmerize-4ddaf6be7f5d2.jpg"
    },
    {
        "track":"Question!",
        "artist":"System Of A Down",
        "album":"",
        "song":"http://dl.zaycev.net/139764/1820481/soad_-_question_(zaycev.net).mp3",
        "cover":"https://fanart.tv/fanart/music/cc0b7089-c08d-4c10-b6b0-873582c17fd6/albumcover/mezmerize-4ddaf6be7f5d2.jpg"
    },
    {
        "track":"Radio/Video",
        "artist":"System Of A Down",
        "album":"",
        "song":"http://dl.zaycev.net/139764/1266916/soad_-_radio_video_(zaycev.net).mp3",
        "cover":"http://cdn.albumoftheyear.org/album/mezmerize.jpg"
    },
    {
        "track":"Revenga",
        "artist":"System Of A Down",
        "album":"",
        "song":"http://dl.zaycev.net/139764/1615746/soad_-_revenga_(zaycev.net).mp3",
        "cover":"http://cdn.albumoftheyear.org/album/mezmerize.jpg"
    },

    {
        "track":"Lifeline",
        "artist":"Papa Roach",
        "album":"",
        "song":"http://elisto12d.music.yandex.ru/get-mp3/2e8daa7d2d1746b1e400e250937751fe/5088240c348bd/10/data-0.6:27764016812:6182869?track-id=6816&play=false&experiments=%7B%22similarities%22%3A%22default%22%2C%22genreRadio%22%3A%22matrixnet-default-copy%22%2C%22recommendedArtists%22%3A%22ichwill_similar_artists%22%2C%22recommendedTracks%22%3A%22recommended_tracks_by_artist_from_history%22%2C%22recommendedAlbumsOfFavoriteGenre%22%3A%22recent%22%2C%22recommendedSimilarArtists%22%3A%22default%22%2C%22recommendedArtistsWithArtistsFromHistory%22%3A%22default%22%2C%22adv%22%3A%22a%22%2C%22myMusicButton%22%3A%22yes%22%2C%22userFeed%22%3A%22old%22%2C%22loserArtistsWithArtists%22%3A%22off%22%7D&from=web-search-track-track-main&albumId=77080",
        "cover":"http://covers1.img-themusic-world.info/000/16/16152.jpg"

    },
    {
        "track":"Carry Me",
        "artist":"Papa Roach",
        "album":"",
        "song":"http://elisto01f06.music.yandex.ru/get-mp3/abcb4312ad7b38fd8111cfc043756e3c/5088260c4d342/3/data-0.24:31428189758:6386624?track-id=6812&play=false&experiments=%7B%22similarities%22%3A%22default%22%2C%22genreRadio%22%3A%22matrixnet-default-copy%22%2C%22recommendedArtists%22%3A%22ichwill_similar_artists%22%2C%22recommendedTracks%22%3A%22recommended_tracks_by_artist_from_history%22%2C%22recommendedAlbumsOfFavoriteGenre%22%3A%22recent%22%2C%22recommendedSimilarArtists%22%3A%22default%22%2C%22recommendedArtistsWithArtistsFromHistory%22%3A%22default%22%2C%22adv%22%3A%22a%22%2C%22myMusicButton%22%3A%22yes%22%2C%22userFeed%22%3A%22old%22%2C%22loserArtistsWithArtists%22%3A%22off%22%7D&from=web-search-track-track-main&albumId=708",
        "cover":"http://www.renigk-news.de/daten/metamorphosis.jpg"
    },
    {
        "track": "Entombed",
        "artist": "Deftones",
        "album": "Koi No Yokan",
        "cover": "http://hangout.altsounds.com/geek/gars/images/1/2/8/3/8/deftoneskoinoyokancovernew.jpeg",
        "song": "http://elisto13d.music.yandex.ru/get-mp3/eb1244ed332c213b6ffe21ab45699ad8/508886898d662/7/data-0.1:508506248:7183463?track-id=5705634&play=false&experiments=%7B%22similarities%22%3A%22default%22%2C%22genreRadio%22%3A%22new-ichwill-matrixnet%22%2C%22recommendedArtists%22%3A%22ichwill_similar_artists%22%2C%22recommendedTracks%22%3A%22recommended_tracks_by_artist_from_history%22%2C%22recommendedAlbumsOfFavoriteGenre%22%3A%22recent%22%2C%22recommendedSimilarArtists%22%3A%22default%22%2C%22recommendedArtistsWithArtistsFromHistory%22%3A%22default%22%2C%22adv%22%3A%22a%22%2C%22myMusicButton%22%3A%22yes%22%2C%22userFeed%22%3A%22old%22%2C%22loserArtistsWithArtists%22%3A%22off%22%7D&from=web-artist_albums-album-album-saved&albumId=626049"
    }
]
