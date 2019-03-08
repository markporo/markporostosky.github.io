//detects the key being pressed on the keyboard
document.addEventListener("keydown", function(event) {
    makeNoise(event.key);
    buttonAnimation(event.key);
});

//Detects button Click for each .drum pad
for (var i = 0; i <= document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonClicked = this.innerHTML;

        makeNoise(buttonClicked);
        buttonAnimation(buttonClicked);



    });
}

// function that makes noise depending on the pad being clicked or key being pressed.
function makeNoise(key) {

    switch (key) {
        case "a":
            var audio = new Audio("sounds/iwannakick.wav");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/kingkick.wav");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/snared28.wav");
            audio.play();
            break;
        case "f":
            var audio = new Audio("sounds/snare2.wav");
            audio.play();
            break;

        case "g":
            var audio = new Audio("sounds/highhat.wav");
            audio.play();
            break;

        case "h":
            var audio = new Audio("sounds/floor.wav");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/racktom.wav");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/crash.wav");
            audio.play();
            break;

        default:
            console.log(buttonClicked);

    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");

    function removePressed() {
        activeButton.classList.remove("pressed");
    }

    setTimeout(removePressed, 100);



}