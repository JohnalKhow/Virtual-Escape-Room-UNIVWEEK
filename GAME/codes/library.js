var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var video = document.getElementById("video1");
var watched = false;

//INIT AUDIO FILES 
//CONTROLLED BY .play() function
var sound = new Audio('assets/audio/Library.mp3');


//INITIALIZE ALL OBJECTS
window.onload = function() {

    sound.play();
    sound.loop();
    //EACH OBJECT MUST HAVE A CORRESPONDING CANVAS 
    var c = document.getElementById("gameboard");
    var ctx = c.getContext("2d");
    ctx.rect(0, 10, 50, 50);
    ctx.stroke();

    var c = document.getElementById("gameboard2");
    var ctx = c.getContext("2d");
    ctx.rect(0, 10, 225, 125);
    ctx.stroke();
};

//EVENT LISTENERS
//EACH OBJECT MUST HAVE A CORRESPONDING EVENT LISTENER
gameboard.addEventListener('click', (event) => {
    console.log('clicked canvas');
    modal.style.display = "block";
});

gameboard2.addEventListener('click', (event) => {
    console.log('clicked canvas');
    window.open("Desktop.html", "_self");
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