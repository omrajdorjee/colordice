document.getElementById('stopButton').onclick = function () {
    var sounds = document.getElementsByTagName('audio');
    for (i = 0; i < sounds.length; i++) sounds[i].pause();
};

var audioArr = document.querySelectorAll(".au");

function playpauseTrack(audio) {
    var curr_track = document.getElementById(audio);
    curr_track.play();
    curr_track.textContent = "playing";
    var buttonArr = document.querySelectorAll(".audio").length;
    for (var i = 0; i < buttonArr; i++) {
        document.querySelectorAll(".audio")[i].addEventListener("click", function () {
            curr_track.pause();
          
        },100)


    }

}

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
    background.style.color = randomColor;
};

setBackgroundColor();

setInterval(() => {
    setBackgroundColor();
}, 1500);


// ===============
