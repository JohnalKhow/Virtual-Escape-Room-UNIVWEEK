var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var coffee1 = document.getElementById("coffee");
var coffee2 = document.getElementById("coffee2");
var barista = document.getElementById("barista");
var form = document.getElementById("order");
var btn = document.getElementById("btn");
var ordered = false;
var drank = false;

//INIT AUDIO FILES 
//CONTROLLED BY .play() function
var barista1 = new Audio('assets/audio/Barista 1.mp3');
var student = new Audio('assets/audio/Student Detective Audio.mp3');
var barista2 = new Audio('assets/audio/Barista 2.mp3');
var cafemusic = new Audio('assets/audio/Cafe.mp3');

//INITIALIZE ALL OBJECTS
window.onload = function() {

    cafemusic.play();
    cafemusic.loop();
    //EACH OBJECT MUST HAVE A CORRESPONDING CANVAS 
    var c = document.getElementById("gameboard");
    var ctx = c.getContext("2d");
    ctx.rect(0, 10, 50, 50);
    ctx.stroke();

    var c2 = document.getElementById("gameboard2");
    var ctx2 = c2.getContext("2d");
    ctx2.rect(0, 10, 125, 200);
    ctx2.stroke();

};

//EVENT LISTENERS
//EACH OBJECT MUST HAVE A CORRESPONDING EVENT LISTENER
gameboard.addEventListener('click', (event) => {
    console.log('clicked canvas');
    modal.style.display = "block";
    barista.style.display = "block";
    form.style.display = "none";
    btn.style.display = "none";
    coffee1.style.display = "none";
    coffee2.style.display = "none";
    barista1.play();
});

gameboard2.addEventListener('click', (event) => {
    console.log('clicked canvas');
    modal2.style.display = "block";
});


student.addEventListener('ended', (event) => {
    barista2.play();
});

barista1.addEventListener('ended', (event) => {
    form.style.display = "block";
    btn.style.display = "block";
});

barista2.addEventListener('ended', (event) => {
    coffee1.style.display = "block";
    coffee2.style.display = "none";
    var c3 = document.getElementById("drink");
    var ctx3 = c3.getContext("2d");
    ctx3.clearRect(0, 10, 400, 400);
    ordered = true;
});

drink.addEventListener('click', (event) => {
    if (ordered) {
        console.log('clicked canvas');
        coffee1.style.display = "none";
        coffee2.style.display = "block";
        var c4 = document.getElementById("key");
        var ctx4 = c4.getContext("2d");
        ctx4.strokeRect(0, 10, 100, 80);
        drank = true;
    }
});

key.addEventListener('click', (event) => {
    if (drank) {
        console.log('key pressed');
        window.location.href = "Faculty.html";
    }
});

btn.onclick = function() {
    var order = document.getElementById("order").value;
    console.log(order);
    if (order == "three c's latte") {
        console.log("if entered");
        student.play();
        form.style.display = "none";
        btn.style.display = "none";
    }
}

//MODAL HANDLING
span.onclick = function() {
    modal.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal || event.target == modal2) {
        modal.style.display = "none";
        modal2.style.display = "none";
    }
}