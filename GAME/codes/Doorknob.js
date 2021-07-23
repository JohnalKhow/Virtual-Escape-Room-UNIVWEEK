var sound = new Audio('assets/audio/Classroom, Faculty Room, Computer Lab.mp3');
sound.loop = true;

window.onload = function() {
    sound.play();
    var c = document.getElementById("doorknob");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 525, 200);
};

doorknob.addEventListener('click', (event) => {
    window.location.href = "Library.html";
});