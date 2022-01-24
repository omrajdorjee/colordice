// ===============
var imageTracker = 'playImage';
//set events handlers for on click
document.getElementById("swapImage").onclick = function() {
	swapImage('song');
	playPause('song');
};
document.getElementById("autoPlay-2").onclick = function() {
		swapImage('songPl3');
	playPause('songPl3');
};
document.getElementById("autoPlay-3").onclick = function() {
		swapImage('songPl2');
	playPause('songPl2');
};
document.getElementById("stopImage").onclick = function() {
	stop();
}
document.getElementById("nextImage").onclick = function() {
	forward();
}
document.getElementById("backImage").onclick = function() {
	backward();
}



function Buttontoggle()
{
   var element = document.getElementById("video-section");
   element.classList.toggle("video-section-tgl");
   
  
  }
  

//hadlers
 var swapImage = function() {
  var image = document.getElementById('swapImage');
  if (imageTracker == 'playImage') {
  $("button").addClass("pills");
    $(".tempo").addClass("conseal"); 
 document.body.style.backgroundColor = '#77D970';
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


var playPause = function(playList) {
     let playplay= playList;
     
  if (playplay == 'song' && musicTracker == 'noMusic') {
  	audios[activeTrack].play();
    musicTracker = 'playMusic';
    
    
  } 
  else if(playplay == 'songPl2' && musicTracker == 'noMusic'){
    playList2[activeTrack].play();
    musicTracker = 'playMusic';
  }
  
  else if(playplay == 'songPl3' && musicTracker == 'noMusic'){
    playList3[activeTrack].play();
    musicTracker = 'playMusic';
  }
  
  else {
    $(".tempo").removeClass("conseal"); 
     audios[activeTrack].pause();
    playList2[activeTrack].pause();
    playList3[activeTrack].pause();
      document.body.style.backgroundColor = '#D3DEDC';
       $("button").removeClass("pills");
    musicTracker = 'noMusic';
  }
  showPlaying();
};

var stop = function() {
  if (musicTracker == 'playMusic') {
  	 audios[activeTrack].pause();
		 audios[activeTrack].currentTime = 0;
  	 audios[activeTrack].play();
      
  } else {
    audios[activeTrack].currentTime = 0;
  }
};

var forward = function(){
  function increment(){
  	 if (activeTrack < audios.length - 1)
     		activeTrack++;
     else activeTrack = 0;
  }
	if (musicTracker == 'playMusic') {
  	 audios[activeTrack].pause();
		 audios[activeTrack].currentTime = 0;
     
     increment();
  	 audios[activeTrack].play();
     
  }
   else {
    increment();
  }
  showPlaying();
};

var backward = function(){
  function decrement(){
  	 if (activeTrack > 0)
     		activeTrack--;
     else activeTrack = audios.length -1;
  }
	if (musicTracker == 'playMusic') {
  	 audios[activeTrack].pause();
		 audios[activeTrack].currentTime = 0;
     decrement();
  	 audios[activeTrack].play();
  } else {
    decrement();
  }
  showPlaying();
};

var showPlaying = function()
{
	var src = audios[activeTrack].src;
           
   $(".song").removeClass("playing");
   $(".song").addClass("playing");
   console.log( $(".song"));
};




document.getElementById('stopBtn').onclick = function stopAllAudio() {
    var sounds = document.getElementsByTagName('audio');
    $("button").removeClass("pills");
    $(".tempo").removeClass("conseal"); 
    playPause('song');
    playPause('songPl2');
    playPause('songPl3');
    for (i = 0; i < sounds.length; i++) sounds[i].pause();
};




var audioArr = document.querySelectorAll(".au");
function playpauseTrack(audio) {
    var curr_track = document.getElementById(audio);
    curr_track.play();

  
    var buttonArr = document.querySelectorAll(".audio").length;
    for (var i = 0; i < buttonArr; i++) {
        document.querySelectorAll(".audio")[i].addEventListener("click", function () {
            curr_track.pause();
           
          
        },100)
    }
      
}



// ===============






const quote = document.querySelector (".pauseAudIcon")
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
    $('.label').style.color = randomColor;
};

setBackgroundColor();

setInterval(() => {
    setBackgroundColor();
}, 1500);
