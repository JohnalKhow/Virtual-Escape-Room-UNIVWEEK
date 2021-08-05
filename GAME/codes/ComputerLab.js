var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var video = document.getElementById("video1");
var btn = document.getElementById("btn");
var img = document.getElementById("threat");
var video = document.getElementById("video1");
var video2 = document.getElementById("video2");
var announce = document.getElementById("announcement");
var check = false;

//INIT AUDIO FILES 
//CONTROLLED BY .play() function
var sound = new Audio('assets/audio/Classroom, Faculty Room, Computer Lab.mp3');
var paper = new Audio('assets/audio/paper.mp3');
sound.loop = true;


//INITIALIZE ALL OBJECTS
window.onload = function() {
    //EACH OBJECT MUST HAVE A CORRESPONDING CANVAS 
    sound.play();
    var c = document.getElementById("gameboard");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 10, 40, 40);

    var b = document.getElementById("usb");
    var ctx = b.getContext("2d");
    ctx.clearRect(0, 10, 50, 30);
};

//EVENT LISTENERS

//EACH OBJECT MUST HAVE A CORRESPONDING EVENT LISTENER
gameboard.addEventListener('click', (event) => {
    paper.play();
    console.log('clicked canvas');
    modal.style.display = "block";
    threat.style.display = "block";
    video1.style.display = "none";
    check = true;
});

usb.addEventListener('click', (event) => {
    if (check == true) {
        sound.pause();
        modal.style.display = "block";
        threat.style.display = "none";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.left = "-10vw";
        modal.style.top = "-10vw";
        video.style.display = "block";
        span.style.display = "none";
        video.play();
    }

});

video.addEventListener("ended", event => {
    video.style.display = "none";
    video2.style.display = "block";
    video2.play();
});

video2.addEventListener("ended", event => {
    video2.style.display = "none";
    modal.style.width = "50%";
    modal.style.left = "25vw";
    modal.style.top = "7vw";
    announce.style.display = "block";
    span.style.display = "none";
});

//MODAL HANDLING
span.onclick = function() {
    modal.style.display = "none";
}