// Drum sounds
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");

// Trigger drums on clicks
var drumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumButtons; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		var button = this.innerHTML;
		playDrum(button);
		buttonAnimation(button);
	});
}

// Trigger drums on key presses
document.addEventListener("keydown", (e) => {
	playDrum(e.key);
	buttonAnimation(e.key);
});

function playDrum(drum) {
	switch (drum) {
		case "w":
			tom1.play();
			break;

		case "a":
			tom2.play();
			break;

		case "s":
			snare.play();
			break;

		case "d":
			kick.play();
			break;

		case "j":
			tom3.play();
			break;

		case "k":
			crash.play();
			break;

		case "l":
			tom4.play();
			break;

		default:
			break;
	}
}

function buttonAnimation(button) {
	try {
		var activeButton = document.querySelector(`.${button}`);
		activeButton.classList.add("pressed");

		setTimeout(() => {
			activeButton.classList.remove("pressed");
		}, 100);
	} catch (TypeError) {
		// Not a valid button
	}
}

// Mobile Friendly Drums to remove keyboard letters
// document.querySelector("body").onload = () => {
// 	if (screen.width <= 450) {
// 		var drums = document.querySelectorAll(".drum").length;
// 		for (var i = 0; i < drums; i++) {
// 			document.querySelectorAll(".drum")[i].innerHTML = "";
// 		}
// 	}
// };
