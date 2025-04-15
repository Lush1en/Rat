const rats = [
  { name: "Cartoon Rat", img: "images/cartoon rat.png", sound: "sounds/goofy-ahh-car-horn-200870.mp3" },
  { name: "Sad Rat", img: "images/mouse-3194768-removebg-preview.png", sound: "sounds/isnt-that-amazing-meme-sfx-172488.mp3" },
  { name: "Mad Rat", img: "images/rat-1388829-removebg-preview.png", sound: "sounds/sus-meme-sound-181271.mp3" },
  { name: "S Rat", img: "images/rat-440987-removebg-preview.png", sound: "sounds/thud-sound-effect-319090.mp3" },
  { name: "Sigma Rat", img: "images/rat-9497195-removebg-preview.png", sound: "sounds/yeah-boy-114748.mp3" },
  { name: "Rats", img: "images/wildlife-3552300-removebg-preview.png", sound: "sounds/yeah-boy-114748.mp3" },
];

const legendary = {
  name: "🔥 Legendary 🔥",
  img: "images/rat-9497195-removebg-preview.png",
  sound: "sounds/yeah-boy-114748.mp3"
};

const popup = document.getElementById("popup");
const ratImage = document.getElementById("rat-image");
const ratName = document.getElementById("rat-name");
const scareText = document.getElementById("scare-text");
const clickText = document.getElementById("click-text");

let drawCount = 0;
let freeze = false;
let popupShown = false;

document.body.addEventListener("click", () => {
  if (freeze) return;

  // Zeige das Popup beim ersten Klick und entferne "CLICK ME"
  if (!popupShown) {
    popup.classList.remove("hidden"); // Popup sichtbar machen
    scareText.textContent = "CLICK ME AGAIN"; // Ersetze den Text
    popupShown = true;
    return; // Der erste Klick zeigt nur das Popup, aber noch keine Ratte
  }

  drawCount++;

  const isFinalDraw = drawCount === 4;

  const rat = Math.random() < 0.1 && !isFinalDraw
    ? legendary
    : rats[Math.floor(Math.random() * rats.length)];

  // Bild und Name sichtbar machen (nach dem ersten Klick)
  ratImage.classList.remove("hidden");
  ratName.classList.remove("hidden");

  // Die gezogene Ratte anzeigen
  ratImage.src = rat.img;
  ratName.textContent = rat.name;

  // Ton abspielen
  const audio = new Audio(rat.sound);
  audio.play();

  // Zeige den Text "CLICK ME AGAIN" bis zur letzten Ratte
  if (!isFinalDraw) {
    clickText.classList.remove("hidden"); // Zeige den Text
  } else {
    // Final Result
    freeze = true;
    scareText.textContent = "FINAL RESULT 🎉";
    // Hebe den finalen Text hervor
    scareText.style.fontSize = "30px";
    scareText.style.color = "red";
    scareText.style.fontWeight = "bold";
  }
});
