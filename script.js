const rats = [
  { name: "Cartoon Rat", img: "images/cartoon rat.png", sound: "sounds/goofy-ahh-car-horn-200870.mp3", rarity: "Common", chance: 0.4  },
  { name: "Sad Rat", img: "images/mouse-3194768-removebg-preview.png", sound: "sounds/isnt-that-amazing-meme-sfx-172488.mp3", rarity: "Uncommon", chance: 0.25  },
  { name: "Mad Rat", img: "images/rat-1388829-removebg-preview.png", sound: "sounds/sus-meme-sound-181271.mp3", rarity: "Rare", chance: 0.15  },
  { name: "S Rat", img: "images/rat-440987-removebg-preview.png", sound: "sounds/thud-sound-effect-319090.mp3", rarity: "Epic", chance: 0.1  },
  { name: "Sigma Rat", img: "images/rat-9497195-removebg-preview.png", sound: "sounds/yeah-boy-114748.mp3", rarity: "Mythic", chance: 0.1  },
  { name: "Rats", img: "images/wildlife-3552300-removebg-preview.png", sound: "sounds/yeah-boy-114748.mp3", rarity: "Epic", chance: 0.1  },
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

// Funktion, um basierend auf Chance eine Ratte zu ziehen
function drawRandomRat() {
  const rand = Math.random();
  let cumulative = 0;

  for (let rat of rats) {
    cumulative += rat.chance;
    if (rand <= cumulative) {
      return rat;
    }
  }

  // Fallback (wegen Rundungsfehler)
  return rats[rats.length - 1];
}

document.body.addEventListener("click", () => {
  if (freeze) return;

  // Erster Klick: Popup anzeigen, aber noch keine Ratte
  if (!popupShown) {
    popup.classList.remove("hidden");
    scareText.textContent = "CLICK ME AGAIN";
    popupShown = true;
    return;
  }

  drawCount++;
  const isFinalDraw = drawCount === 4;

  // 10% Chance auf legendäre Ratte (außer beim finalen Draw)
  const rat = (Math.random() < 0.1 && !isFinalDraw) ? legendary : drawRandomRat();

  // Rattenbild & Name sichtbar machen
  ratImage.classList.remove("hidden");
  ratName.classList.remove("hidden");

  ratImage.src = rat.img;
  ratName.textContent = `${rat.name} (${rat.rarity})`;

  // Seltenheitsklasse setzen (für Farbe)
  ratName.className = ""; // Alte Klassen entfernen
  ratName.classList.add(rat.rarity.toLowerCase());

  // Sound abspielen
  const audio = new Audio(rat.sound);
  audio.play();

  if (!isFinalDraw) {
    clickText.classList.remove("hidden");
  } else {
    freeze = true;
    scareText.textContent = "🎉 FINAL RESULT 🎉";
    scareText.style.fontSize = "32px";
    scareText.style.color = "gold";
    scareText.style.fontWeight = "bold";
    clickText.classList.add("hidden");
  }
});
