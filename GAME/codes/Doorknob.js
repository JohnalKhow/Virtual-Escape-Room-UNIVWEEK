var sound = new Audio('assets/audio/Locker BGM.mp3');
sound.loop = true;
sound.volume = 0.25;
window.onload = function() {
    sound.play();
    var c = document.getElementById("doorknob");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 775, 350);
};

doorknob.addEventListener('click', (event) => {
    window.location.href = "Library.html";
});