// item -> object selectionne via query selector

// State -> "" pour rend l'objet visible
// State -> "none" pour le rendre invisible

function ToggleVisibility(item,State) {
    item.style.display = State;
}

let mute = document.querySelector(".fa-volume-off");
let sound = document.querySelector(".fa-volume-up");
let play = document.querySelector (".fa-play-circle-o");
let pause = document.querySelector(".fa-pause-circle-o");
let video = document.querySelector (".player");
let play2 = document.querySelector (".video-player__video");

ToggleVisibility(mute, "none");

let videocontrols = document.querySelector (".video-players__controls");

play.addEventListener('click', function(){
    if(video.paused) video.play();
});

play2.addEventListener('click', function(){
    if(video.paused) video.play();
});

pause.addEventListener('click', function(){
    video.pause();
});

sound.addEventListener('click',function () {
    ToggleVisibility(sound,"none");
    ToggleVisibility(mute,"");
    video.volume = 0;
});

mute.addEventListener('click',function () {
    ToggleVisibility(mute,"none");
    ToggleVisibility(sound,"");
    video.volume = 1;
});