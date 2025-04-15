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
  sound: "sounds/legend.mp3"
};

const popup = document.getElementById("popup");
const ratImage = document.getElementById("rat-image");
const ratName = document.getElementById("rat-name");
const scareText = document.getElementById("scare-text");

let drawCount = 0;
let freeze = false;

// Popup wird beim ersten Klick angezeigt
let popupShown = false;

document.body.addEventListener("click", () => {
  if (freeze) return;

  // Zeige das Popup nur beim ersten Klick
  if (!popupShown) {
    popup.classList.remove("hidden");
    popupShown = true;
    return; // Erster Klick nur zum Anzeigen, kein Bildwechsel
  }

  drawCount++;

  const isFinalDraw = drawCount === 4;

  const rat = Math.random() < 0.1 && !isFinalDraw
    ? legendary
    : rats[Math.floor(Math.random() * rats.length)];

  ratImage.src = rat.img;
  ratName.textContent = rat.name;

  const audio = new Audio(rat.sound);
  audio.play();

  if (isFinalDraw) {
    freeze = true;
    scareText.textContent = "Your final result 👑";
  }
});
