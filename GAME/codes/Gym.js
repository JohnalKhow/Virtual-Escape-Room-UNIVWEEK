//var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var video = document.getElementById("video1");
var watched = false;
var heard = false;
var doorModal = document.getElementById("doorModal");
var doorRiddle = false;
//INIT AUDIO FILES 
//CONTROLLED BY .play() function
var sound = new Audio('assets/audio/Gym-Auditorium - V1.mp3');
var backmusic = new Audio('assets/audio/Auditorium.mp3')
backmusic.loop = true;
//INITIALIZE ALL OBJECTS
window.onload = function() {
    backmusic.play();
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

    var c = document.getElementById("door1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 10, 242, 512);

    var c = document.getElementById("door2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 10, 242, 512);    

    var c = document.getElementById("door3");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 10, 242, 512);    
};

//EVENT LISTENERS

//EACH OBJECT MUST HAVE A CORRESPONDING EVENT LISTENER
gameboard.addEventListener('click', (event) => {
    if(!watched)
    {
        modal.style.display = "block";
        video.play();
    }
});

gameboard2.addEventListener('click', (event) => {
    if(!watched)
    {
        modal.style.display = "block";
        video.play();
    }
});

gameboard3.addEventListener('click', (event) => {
    if(!watched)
    {
        modal.style.display = "block";
        video.play();
    }
});

gameboard4.addEventListener('click', (event) => {
    if(!watched)
    {
        modal.style.display = "block";
        video.play();
    }
});

door.addEventListener('click', (event) => {
    if (heard) {
        console.log('NEXT SCENE');
        doorModal.style.display = "block";
        doorRiddle=true;
    }
});

door1.addEventListener('click', (event) => {
    if (doorRiddle) {
        console.log('Cafeteria');

    }
});

door2.addEventListener('click', (event) => {
    if (doorRiddle) {
        console.log('Laboratory');

    }
});

door3.addEventListener('click', (event) => {
    if (doorRiddle) {
        console.log('Classroom');
        window.location.href = "Classroom.html";
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


video.onended = function() {
    watched = true;
    modal.style.display = "none";
    sound.play();
}

sound.onended = function() {
    heard = true;
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
        watched = true;
    }
}

