var span = document.getElementsByClassName("back")[0];
var modal = document.getElementById("myModal");
var btn = document.getElementById("btn");
var logged = false;
var listened = false;

//INIT AUDIO FILES 
//CONTROLLED BY .play() function
var sound = new Audio('assets/audio/Desktop.mp3');


//INITIALIZE ALL OBJECTS
window.onload = function() {
    modal.style.display = "block";


};

btn.onclick = function() {
    var password = document.getElementById("password").value;
    console.log(password);
    if (password == "sunrise roast") {
        modal.style.display = "none";
        console.log("if entered");
        var c = document.getElementById("gameboard");
        var ctx = c.getContext("2d");
        ctx.rect(0, 10, 70, 90);
        ctx.stroke();
        logged = true;
    }
}

gameboard.addEventListener('click', (event) => {
    console.log('clicked canvas');
    if (logged) {
        sound.play();
        listen = true;

    }
});

span.onclick = function() {
    window.location.href = "Library.html";
}

sound.addEventListener('ended', (event) => {
    window.location.href = "Cafe.html";
});