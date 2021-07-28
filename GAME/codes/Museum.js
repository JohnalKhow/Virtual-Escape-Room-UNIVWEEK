var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var video = document.getElementById("video1");
var btn = document.getElementById("btn");
var image = document.getElementById("safe");
var form = document.getElementById("form");
var watched = false;

//INIT AUDIO FILES 
//CONTROLLED BY .play() function
var sound = new Audio('assets/audio/Museum.mp3');
var safe = new Audio('assets/audio/safe.mp3');
safe.volume = 0.2;
var VA = new Audio('assets/audio/Vault.mp3');
sound.loop = true;

//INITIALIZE ALL OBJECTS
window.onload = function() {
    //EACH OBJECT MUST HAVE A CORRESPONDING CANVAS 
    sound.play();
    var c = document.getElementById("gameboard");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 10, 255, 250);
};

//EVENT LISTENERS

//EACH OBJECT MUST HAVE A CORRESPONDING EVENT LISTENER
gameboard.addEventListener('click', (event) => {
    console.log('clicked canvas');
    modal.style.display = "block";
});

ipad.addEventListener('click', (event) => {
    sound.pause();
    video.style.display = "block";
    btn.style.display = "none";
    form.style.display = "none";
    image.style.display = "none";
    video.play();
});

video.addEventListener("ended", event => {
    window.location.href = "ComputerLab.html";
});

//MODAL HANDLING
span.onclick = function() {
    modal.style.display = "none";

}

btn.onclick = function() {
    var form = document.getElementById("form").value;
    if (form == "8210") {
        safe.play();
        modal.style.display = "none";
        modal.style.display = "block";
        document.getElementById("safe").src = "assets/images/open-safe.jpg";
        var b = document.getElementById("ipad");
        var ctx = b.getContext("2d");
        ctx.clearRect(0, 10, 170, 160);
    }
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}