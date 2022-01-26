function stopAllAudio() {
    autoClicks();
    $("button").removeClass("pills");
    $(".tempo").removeClass("conseal"); 
    $('.asw-2, .asw-3').removeClass("tglHide");
    document.body.style.backgroundColor = '#D3DEDC';
    justStop();  
};
//stop button
function justStop() {
  var sounds = document.getElementsByTagName('audio');
  for(i=0; i<sounds.length; i++) sounds[i].pause();
}
// toggle auto play button
function autoClicks() {
    if (playplay == 'song') {
  document.getElementById("swapImage").click(); 
}
else if (playplay == 'songPl2') {
  document.getElementById("autoPlay-3").click(); 
}
else if (playplay == 'songPl3'){
  document.getElementById("autoPlay-2").click(); 
}
}
// play pause pills button
function playpauseTrack(audio) {
  justStop();
    var curr_track = document.getElementById(audio);
    curr_track.play();      
}
// switch to video section
function Buttontoggle()
{
   var element = document.getElementById("video-section");
   element.classList.toggle("video-section-tgl");
    }


// ===============
var imageTracker = 'playImage';
//set events handlers for on click
document.getElementById("swapImage").onclick = function() {
  justStop();
  swapImage('song');
	playPause('song');
};
document.getElementById("autoPlay-2").onclick = function() {
  justStop();
	swapImage('songPl3');
	playPause('songPl3');
};
document.getElementById("autoPlay-3").onclick = function() {
  justStop();
	swapImage('songPl2');
	playPause('songPl2');

};
document.getElementById("nextImage").onclick = function() {
	forward();
}
document.getElementById("backImage").onclick = function() {
	backward();
}

//hadlers
 var swapImage = function() {
  var image = document.getElementById('swapImage');
  if (imageTracker == 'playImage') {
  $("button").addClass("pills");
    $(".tempo").addClass("conseal"); 
 document.body.style.backgroundColor = '#c3c3c3';
  } else {
    imageTracker = 'playImage';
  }
};

//playing flag 
var musicTracker = 'noMusic';
//playlist audios 
  var audios = [];
  var playList2 =[];
  var playList3 =[];

 $('.song').each(function(){
 		var load = new  Audio($(this).attr("src"));
    load.load();
    load.addEventListener('ended',function(){
       forward();
    });
    audios.push(load);
 });

 $('.songPl2').each(function(){
 		var load = new  Audio($(this).attr("src"));
    load.load();
    load.addEventListener('ended',function(){
       forward();
    });
    playList2.push(load);
 });
 $('.songPl3').each(function(){
 		var load = new  Audio($(this).attr("src"));
    load.load();
    load.addEventListener('ended',function(){
       forward();
    });
    playList3.push(load);
 });


//active track
var activeTrack = 0;

let playplay = "";
var playPause = function(playList) {
    
    playplay = playList;    
  if (playplay == 'song' && musicTracker == 'noMusic') {
    audios[activeTrack].play();
    musicTracker = 'playMusic';  
    $('.asw-2, .asw-3').addClass("tglHide");
  } 
  else if(playplay == 'songPl2' && musicTracker == 'noMusic'){
    playList2[activeTrack].play();   
    musicTracker = 'playMusic';
    $('.asw-1, .asw-3').addClass("tglHide");
  }
  
  else if(playplay == 'songPl3' && musicTracker == 'noMusic'){
    playList3[activeTrack].play();
    musicTracker = 'playMusic';
    $('.asw-2, .asw-1').addClass("tglHide");
  } 
  else {
    $(".tempo").removeClass("conseal"); 
     audios[activeTrack].pause();
    playList2[activeTrack].pause();
    playList3[activeTrack].pause();
   document.body.style.backgroundColor = '#D3DEDC';
   $('.asw-2, .asw-3, .asw-1').removeClass("tglHide");
   $("button").removeClass("pills");
    musicTracker = 'noMusic';
  }
  showPlaying();
  return playplay;
};


var forward = function(){
  function increment(value){
  	 if (activeTrack < value.length - 1)
     		activeTrack++;
     else activeTrack = 0;
  }
	if (playplay == 'song' &&  musicTracker == 'playMusic') {
  	 audios[activeTrack].pause();
		 audios[activeTrack].currentTime = 0;
     
     increment(audios);
  	 audios[activeTrack].play();
     
  }
	if (playplay == 'songPl2' && musicTracker == 'playMusic') {
  	 playList2[activeTrack].pause();
		 playList2[activeTrack].currentTime = 0;
     
     increment(playList2);
  	 playList2[activeTrack].play();
    
     
  }
	if (playplay == 'songPl3' && musicTracker == 'playMusic') {
  	 playList3[activeTrack].pause();
		 playList3[activeTrack].currentTime = 0;  
     increment(playList3);
  	 playList3[activeTrack].play();  
  }
   else {
    increment();
  }
  
};

var backward = function(){
  function decrement(){
  	 if (activeTrack > 0)
     		activeTrack--;
     else activeTrack = audios.length -1;
  }
	if (playplay == 'song' &&  musicTracker == 'playMusic') {
  	 audios[activeTrack].pause();
		 audios[activeTrack].currentTime = 0;  
     decrement(audios);
  	 audios[activeTrack].play();
     
  }
	if (playplay == 'songPl2' && musicTracker == 'playMusic') {
  	 playList2[activeTrack].pause();
		 playList2[activeTrack].currentTime = 0;    
     decrement(playList2);
  	 playList2[activeTrack].play();
    
     
  }
	if (playplay == 'songPl3' && musicTracker == 'playMusic') {
  	 playList3[activeTrack].pause();
		 playList3[activeTrack].currentTime = 0;    
     decrement  (playList3);
  	 playList3[activeTrack].play();
     
  }
  else {
    decrement();
  }
  showPlaying();
};
var showPlaying = function()
{
	var src = audios[activeTrack].src;
   $(".audio").removeClass("playing");
   $('.audio').addClass("playing");
   console.log(src);
};

// ===============
const background = document.querySelector("#title");

const getRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
};

const getRandomColor = () => {
    const h = getRandomNumber(360);

    return `hsl(${h}deg, 90%, 40%)`;
};

const setBackgroundColor = () => {
    const randomColor = getRandomColor();
    background.style.color = randomColor;
};

setBackgroundColor();

setInterval(() => {
    setBackgroundColor();
}, 1500);
