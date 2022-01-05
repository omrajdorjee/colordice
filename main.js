
document.getElementById('stopButton').onclick = function() {
  var sounds = document.getElementsByTagName('audio');
  for(i=0; i<sounds.length; i++) sounds[i].pause();
};


function changeBodyBg(color){
      document.body.style.background = color;
      document.getElementById("btn").style.background = color;
    

  }

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
new Sign().print(document.body)

// =============== Audio =============

function pauseAudio(audio){
 var au = document.getElementById(audio); 
     
  au.pause(); 
}


function playAudio(audio) { 
  var au = document.getElementById(audio);
  au.play(); 
   
} 


// =================================================================
// ============= MAIM FUNCTIONS =============




function roll(){

      

      let dice = document.querySelectorAll("#dice-1, #dice-2");
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
     
    },
    1500
    );

  var audio = document.getElementById("rollingaudio");
        audio.play();


  var randomNumDone = Math.random();
  var randomNum = (Math.floor(randomNumDone * 6)) + 1;
  var randomCom = Math.floor((Math.random() * 4) + 1)
  var randomNumD2 = (Math.floor(randomNumDone * 3)) + randomCom;


    setTimeout(function() {
document.querySelector("#total").innerHTML = "blue " + ( (randomNum)+ " \u26AF" + " red " + (randomNumD2) );
    }, 1500);

  
   
      if( randomNum > randomNumD2 ){         
          setTimeout(function() {
      document.getElementById("results").textContent="Player Blue Wins";
        document.getElementById("results").style.color="#00A19D"; 
    }, 1500);
  }
  else if ( randomNum < randomNumD2 ){
           setTimeout(function() {
              document.getElementById("results").textContent="Player Red Wins";    
         document.getElementById("results").style.color="#DF2E2E";
    }, 1500);
  }

  else {   
           setTimeout(function() {
   document.getElementById("results").textContent="DRAW";           
         document.getElementById("results").style.color="#6ECB63";
      }, 1500);
  }

if (randomNum === 1) {
       document.getElementById("comOne").classList.add("toggle");
       document.getElementById("comTwo").classList.add("toggle");
       document.getElementById("comThree").classList.add("toggle");
       document.getElementById("comFour").classList.add("toggle");
       document.getElementById("comFive").classList.add("toggle");
       document.getElementById("comSix").classList.add("toggle");
       document.getElementById("comMid").classList.add("toggleMid");
}
if (randomNum === 2) {
       document.getElementById("comOne").classList.add("toggle");
       document.getElementById("comTwo").classList.add("toggle");
       document.getElementById("comThree").classList.remove("toggle");
       document.getElementById("comFour").classList.remove("toggle");
       document.getElementById("comFive").classList.add("toggle");
       document.getElementById("comSix").classList.add("toggle");
       document.getElementById("comMid").classList.remove("toggleMid");
}
if (randomNum === 3) {
         document.getElementById("comOne").classList.add("toggle");
         document.getElementById("comTwo").classList.add("toggle");
         document.getElementById("comThree").classList.remove("toggle");
         document.getElementById("comFour").classList.remove("toggle");
         document.getElementById("comFive").classList.add("toggle");
         document.getElementById("comSix").classList.add("toggle");
         document.getElementById("comMid").classList.add("toggleMid");
}

if (randomNum === 4) {
        document.getElementById("comOne").classList.remove("toggle");
        document.getElementById("comTwo").classList.add("toggle");
        document.getElementById("comThree").classList.remove("toggle");
        document.getElementById("comFour").classList.remove("toggle");
        document.getElementById("comFive").classList.add("toggle");
        document.getElementById("comSix").classList.remove("toggle");
        document.getElementById("comMid").classList.remove("toggleMid");
}

if (randomNum === 5) {
       document.getElementById("comOne").classList.remove("toggle");
       document.getElementById("comTwo").classList.add("toggle");
       document.getElementById("comThree").classList.remove("toggle");
       document.getElementById("comFour").classList.remove("toggle");
       document.getElementById("comFive").classList.add("toggle");
       document.getElementById("comSix").classList.remove("toggle");
       document.getElementById("comMid").classList.add("toggleMid");

}
       
if (randomNum === 6) {
      document.getElementById("comOne").classList.remove("toggle");
      document.getElementById("comTwo").classList.remove("toggle");
      document.getElementById("comThree").classList.remove("toggle");
      document.getElementById("comFour").classList.remove("toggle");
      document.getElementById("comFive").classList.remove("toggle");
      document.getElementById("comSix").classList.remove("toggle");
      document.getElementById("comMid").classList.remove("toggleMid");
}

/* ========================================== */
/* ==========// DICE 2 // ================== */

if (randomNumD2 === 1) {
      document.getElementById("dc1").classList.add("toggle");
      document.getElementById("dc2").classList.add("toggle");
      document.getElementById("dc3").classList.add("toggle");
      document.getElementById("dc4").classList.add("toggle")
      document.getElementById("dc5").classList.add("toggle");
      document.getElementById("dc6").classList.add("toggle");
      document.getElementById("dcMid").classList.add("toggleMid");
}
if (randomNumD2 === 2) {
      document.getElementById("dc1").classList.add("toggle");
      document.getElementById("dc2").classList.add("toggle");
      document.getElementById("dc3").classList.remove("toggle");
      document.getElementById("dc4").classList.remove("toggle")
      document.getElementById("dc5").classList.add("toggle");
      document.getElementById("dc6").classList.add("toggle");
      document.getElementById("dcMid").classList.remove("toggleMid");
}
if (randomNumD2 === 3) {
      document.getElementById("dc1").classList.add("toggle");
      document.getElementById("dc2").classList.add("toggle");
      document.getElementById("dc3").classList.remove("toggle");
      document.getElementById("dc4").classList.remove("toggle")
      document.getElementById("dc5").classList.add("toggle");
      document.getElementById("dc6").classList.add("toggle");
      document.getElementById("dcMid").classList.add("toggleMid");
}
if (randomNumD2 === 4) {
      document.getElementById("dc1").classList.remove("toggle");
      document.getElementById("dc2").classList.add("toggle");
      document.getElementById("dc3").classList.remove("toggle");
      document.getElementById("dc4").classList.remove("toggle")
      document.getElementById("dc5").classList.add("toggle");
      document.getElementById("dc6").classList.remove("toggle");
      document.getElementById("dcMid").classList.remove("toggleMid");;
}
if (randomNumD2 === 5) {
       document.getElementById("dc1").classList.remove("toggle");
       document.getElementById("dc2").classList.add("toggle");
       document.getElementById("dc3").classList.remove("toggle");
       document.getElementById("dc4").classList.remove("toggle")
       document.getElementById("dc5").classList.add("toggle");
       document.getElementById("dc6").classList.remove("toggle");
       document.getElementById("dcMid").classList.add("toggleMid"); 
}
if (randomNumD2 === 6) {
        document.getElementById("dc1").classList.remove("toggle");
        document.getElementById("dc2").classList.remove("toggle");
        document.getElementById("dc3").classList.remove("toggle");
        document.getElementById("dc4").classList.remove("toggle")
        document.getElementById("dc5").classList.remove("toggle");
        document.getElementById("dc6").classList.remove("toggle");
        document.getElementById("dcMid").classList.remove("toggleMid");
}

 
console.log(randomNum);
console.log(randomNumD2);
 
}
