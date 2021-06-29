var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var video = document.getElementById("video1");
var watched = false;

//INIT AUDIO FILES 
//CONTROLLED BY .play() function
var sound = new Audio('assets/audio/audiofile.mp3');



//INITIALIZE ALL OBJECTS
window.onload = function() {

    //EACH OBJECT MUST HAVE A CORRESPONDING CANVAS 
    var c = document.getElementById("gameboard");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 10, 50, 50);

    var c = document.getElementById("gameboard2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 10, 50, 80);

    var c = document.getElementById("gameboard3");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 10, 60, 60);

    var c = document.getElementById("gameboard4");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 10, 50, 80);

    var c = document.getElementById("door");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 10, 70, 130);

};

//EVENT LISTENERS

//EACH OBJECT MUST HAVE A CORRESPONDING EVENT LISTENER
gameboard.addEventListener('click', (event) => {
    console.log('clicked canvas');
    modal.style.display = "block";
    video.play();
});

gameboard2.addEventListener('click', (event) => {
    console.log('clicked canvas');
    modal.style.display = "block";
    video.play();
});

gameboard3.addEventListener('click', (event) => {
    console.log('clicked canvas');
    modal.style.display = "block";
    video.play();
});

gameboard4.addEventListener('click', (event) => {
    console.log('clicked canvas');
    modal.style.display = "block";
    video.play();
});

door.addEventListener('click', (event) => {
    if (watched) {
        console.log('NEXT SCENE');
    }
});



//MODAL HANDLING
span.onclick = function() {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
    watched = true;

}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
        watched = true;
    }
}