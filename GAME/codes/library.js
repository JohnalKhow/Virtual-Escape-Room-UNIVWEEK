var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var video = document.getElementById("video1");
var watched = false;

//INIT AUDIO FILES 
//CONTROLLED BY .play() function
var sound = new Audio('assets/audio/Library.mp3');
sound.loop = true;

//INITIALIZE ALL OBJECTS
window.onload = function() {

    sound.play();
    //EACH OBJECT MUST HAVE A CORRESPONDING CANVAS 
    var c = document.getElementById("gameboard");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 10, 75, 90);

    var c2 = document.getElementById("gameboard2");
    var ctx2 = c2.getContext("2d");
    ctx2.clearRect(0, 10, 250, 200);

};

//EVENT LISTENERS
//EACH OBJECT MUST HAVE A CORRESPONDING EVENT LISTENER
gameboard.addEventListener('click', (event) => {
    console.log('clicked canvas');
    modal.style.display = "block";
});

gameboard2.addEventListener('click', (event) => {
    console.log('clicked canvas');
    window.location.href = "Desktop.html";
});




//MODAL HANDLING
span.onclick = function() {
    modal.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";

    }
}