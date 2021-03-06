var span = document.getElementsByClassName("back")[0];
var modal = document.getElementById("myModal");
var modalVid = document.getElementById("modalVid");
var video = document.getElementById("video1");
var btn = document.getElementById("btn");
var vidplayer = document.getElementById("vidplayer");
var logged = false;
var listened = false;
var sound = new Audio('assets/audio/Library.mp3');
sound.loop = true;

//INITIALIZE ALL OBJECTS
window.onload = function() {
    sound.play();
    modal.style.display = "block";
    modalVid.style.display = "none";
    vidplayer.style.display = "none";
    sound.play();
};

btn.onclick = function() {
    var password = document.getElementById("password").value;
    password = password.toUpperCase();
    console.log(password);
    if (password == "SUNRISE ROAST") {
        modal.style.display = "none";
        console.log("if entered");
        var c = document.getElementById("gameboard");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 10, 100, 125);
        logged = true;
    }
}

gameboard.addEventListener('click', (event) => {
    console.log('clicked canvas');
    if (logged) {
        sound.pause();
        sound.currentTime = 0;
        vidplayer.style.display = "block";
        modalVid.style.display = "block";
        sound.pause();
        video.play();
        listen = true;
    }
});

span.onclick = function() {
    window.location.href = "Library.html";
}

video.addEventListener('ended', (event) => {
    window.location.href = "Cafe.html";
});