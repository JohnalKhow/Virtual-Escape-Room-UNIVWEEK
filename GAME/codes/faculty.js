var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var pigpen = document.getElementById("pigpen");
var code = document.getElementById("code");
var btn = document.getElementById("btn");
var encoded = false;
var watched = false;

//INIT AUDIO FILES 
//CONTROLLED BY .play() function
var sound = new Audio('assets/audio/Classroom, Faculty Room, Computer Lab.mp3');
sound.loop = true;

//INITIALIZE ALL OBJECTS
window.onload = function() {
    sound.play();
    code.style.display = "none";
    btn.style.display = "none";
    pigpen.style.display = "none";
    var c = document.getElementById("gameboard");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 10, 250, 75);
};

//EVENT LISTENERS
//EACH OBJECT MUST HAVE A CORRESPONDING EVENT LISTENER
gameboard.addEventListener('click', (event) => {
    console.log('clicked canvas');
    pigpen.style.display = "block";
    modal.style.display = "block";
    code.style.display = "block";
    btn.style.display = "block";
});


btn.onclick = function() {
    var pass = document.getElementById("code").value;
    console.log(pass);
    if (pass == "password") {
        console.log("if entered");
        code.style.display = "none";
        btn.style.display = "none";
        pigpen.style.display = "none";
        window.location.href = "Museum.html";
    }
}

//MODAL HANDLING
span.onclick = function() {
    modal.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}