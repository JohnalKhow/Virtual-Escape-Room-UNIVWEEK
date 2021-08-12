var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var watched = false;
var lockerbg = document.getElementById("theatre");
//INIT AUDIO FILES 
//CONTROLLED BY .play() function
var sound = new Audio('assets/audio/Locker BGM.mp3');
sound.loop = true;

//INITIALIZE ALL OBJECTS
window.onload = function() {
    sound.play();
    //EACH OBJECT MUST HAVE A CORRESPONDING CANVAS 
    var c = document.getElementById("lock");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 52, 70);
};

//EVENT LISTENERS

//EACH OBJECT MUST HAVE A CORRESPONDING EVENT LISTENER
lock.addEventListener('click', (event) => {
    modal.style.display = "block";
});

//MODAL HANDLING


span.onclick = function() {
    modal.style.display = "none";
}


function getInputValue() {
    var inputVal = document.getElementById("inputPassword").value;
    if (inputVal == "0545") {
        modal.style.display = "none";

        lockerbg.src = "assets/images/locker-w-key.jpg";
        var c = document.getElementById("getKey");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 93, 40);
    }

}

getKey.addEventListener('click', (event) => {
    window.location.href = "Doorknob.html"
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}