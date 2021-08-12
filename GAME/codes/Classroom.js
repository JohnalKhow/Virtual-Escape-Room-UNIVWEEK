//var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var video = document.getElementById("video1");
var watched = false;
var button = document.getElementById("start");
var videoModal = document.getElementById("vidModal");
//INIT AUDIO FILES 
//CONTROLLED BY .play() function
var gossipVideo = document.getElementById("video1");
var classroomImage = document.getElementById("theatre");
var backmusic = new Audio('assets/audio/Classroom Final BGM.mp3')
backmusic.loop = true;
backmusic.volume = 0.55;
//INITIALIZE ALL OBJECTS
window.onload = function() {
    backmusic.play()
    //EACH OBJECT MUST HAVE A CORRESPONDING CANVAS 
    var c = document.getElementById("GIcon");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 20, 20);
};

//EVENT LISTENERS

//EACH OBJECT MUST HAVE A CORRESPONDING EVENT LISTENER
GIcon.addEventListener('click', (event) => {
    console.log('clicked canvas');
    gossipVideo.play();
    videoModal.style.display = "block";
    classroomImage.src = "assets/images/black.jpg";
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
    window.location.href = "Locker.html";
}

gossipVideo.onended = function() {
    watched = true;
    videoModal.style.display = "none";
    classroomImage.src = "assets/images/Classroom.png";
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