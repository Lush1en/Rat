const rats = [
  { name: "Cartoon Rat", img: "images/cartoon rat.png", sound: "sounds/goofy-ahh-car-horn-200870.mp3", rarity: "Common", chance: 0.4 },
  { name: "Sad Rat", img: "images/mouse-3194768-removebg-preview.png", sound: "sounds/isnt-that-amazing-meme-sfx-172488.mp3", rarity: "Uncommon", chance: 0.25 },
  { name: "Mad Rat", img: "images/rat-1388829-removebg-preview.png", sound: "sounds/sus-meme-sound-181271.mp3", rarity: "Rare", chance: 0.15 },
  { name: "Secret Rat", img: "images/rat-440987-removebg-preview.png", sound: "sounds/thud-sound-effect-319090.mp3", rarity: "Epic", chance: 0.1 },
  { name: "Sigma Rat", img: "images/rat-9497195-removebg-preview.png", sound: "sounds/yeah-boy-114748.mp3", rarity: "Mythic", chance: 0.1 },
  { name: "Rats", img: "images/wildlife-3552300-removebg-preview.png", sound: "sounds/yeah-boy-114748.mp3", rarity: "Epic", chance: 0.1 },
];

const popup = document.getElementById("popup");
const ratImage = document.getElementById("rat-image");
const ratName = document.getElementById("rat-name");
const ratRarity = document.getElementById("rat-rarity");

let clicked = 0;

// Event listener auf das gesamte Body-Element anwenden
document.body.addEventListener("click", () => {
  if (clicked < 4) {
    const rat = rats[Math.floor(Math.random() * rats.length)];

    // Bild und Name setzen
    ratImage.src = rat.img;
    ratName.textContent = rat.name;
    ratRarity.textContent = `Rarity: ${rat.rarity}`;

    // Rarität farblich anpassen
    switch (rat.rarity) {
      case 'Common':
        ratRarity.style.color = "#b0b0b0";
        break;
      case 'Uncommon':
        ratRarity.style.color = "#4caf50";
        break;
      case 'Rare':
        ratRarity.style.color = "#2196f3";
        break;
      case 'Epic':
        ratRarity.style.color = "#9c27b0";
        break;
      case 'Mythic':
        ratRarity.style.color = "#e53935";
        break;
    }

    // Die Klasse 'hidden' entfernen, um das Bild und den Text sichtbar zu machen
    ratImage.classList.remove("hidden");
    ratName.classList.remove("hidden");
    ratRarity.classList.remove("hidden");

    clicked++;

if (clicked === 4) {
  ratName.textContent = `FINAL RESULT: ${rat.name} 🎉`;
  popup.style.boxShadow = "0 0 30px gold";

  // Verstecke den "CLICK ME AGAIN" Text
  document.getElementById("scare-text").style.display = "none";
}
  }
});
