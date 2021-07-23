//var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var video = document.getElementById("video1");
var watched = false;
var doorModal = document.getElementById("doorModal");
var doorRiddle = false;
var button = document.getElementById("start");
//INIT AUDIO FILES 
//CONTROLLED BY .play() function
var sound = new Audio('assets/audio/Classroom-V1.mp3');
var backmusic = new Audio('assets/audio/Classroom, Faculty Room, Computer Lab.mp3')
backmusic.loop = true;

//INITIALIZE ALL OBJECTS
window.onload = function() {
    backmusic.play()
    //EACH OBJECT MUST HAVE A CORRESPONDING CANVAS 
    var c = document.getElementById("GIcon");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 15, 15);
};

//EVENT LISTENERS

//EACH OBJECT MUST HAVE A CORRESPONDING EVENT LISTENER
GIcon.addEventListener('click', (event) => {
    console.log('clicked canvas');
    sound.play();
});

door.addEventListener('click', (event) => {
    if (watched) {
        console.log('NEXT SCENE');
        doorModal.style.display = "block";
        doorRiddle=true;
    }
});


//MODAL HANDLING

/*
span.onclick = function() {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
    watched = true;
}
*/

button.onclick = function(){
    window.location.href = "Locker.html"
}

sound.onended = function() {
    watched = true;
    modal.style.display = "block";
}
/*
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
        watched = true;
    }
}
*/