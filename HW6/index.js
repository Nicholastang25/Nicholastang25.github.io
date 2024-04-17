let sounds = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];
let images = ["crash.png", "kick.png", "snare.png", "tom1.png", "tom2.png", "tom3.png", "tom4.png"];
let btns = document.querySelectorAll(".drum");


for (let i = 0; i < btns.length; i++) {
  let img = document.createElement("img");
  img.src = "images/" + images[i];
  img.alt = btns[i].className;
  img.className = "drum-img";
  img.height = 100;
  btns[i].innerHTML = "";
  btns[i].appendChild(img);
}


btns[0].addEventListener("click", function() {
  addNoise(sounds[0]);
});

btns[1].addEventListener("click", function() {
  addNoise(sounds[1]);
});

btns[2].addEventListener("click", function() {
  addNoise(sounds[2]);
});

btns[3].addEventListener("click", function() {
  addNoise(sounds[3]);
});

btns[4].addEventListener("click", function() {
  addNoise(sounds[4]);
});

btns[5].addEventListener("click", function() {
  addNoise(sounds[5]);
});

btns[6].addEventListener("click", function() {
  addNoise(sounds[6]);
});

function addNoise(sound) {
  var audio = new Audio("sounds/" + sound);
  audio.play();
}
