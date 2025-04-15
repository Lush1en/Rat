const rats = [
  { name: "Cartoon Rat", img: "images/cartoon rat.png", sound: "sounds/goofy-ahh-car-horn-200870.mp3", rarity: "Common", chance: 0.4  },
  { name: "Sad Rat", img: "images/mouse-3194768-removebg-preview.png", sound: "sounds/isnt-that-amazing-meme-sfx-172488.mp3", rarity: "Uncommon", chance: 0.25  },
  { name: "Mad Rat", img: "images/rat-1388829-removebg-preview.png", sound: "sounds/sus-meme-sound-181271.mp3", rarity: "Rare", chance: 0.15  },
  { name: "Secret Rat", img: "images/rat-440987-removebg-preview.png", sound: "sounds/thud-sound-effect-319090.mp3", rarity: "Epic", chance: 0.1  },
  { name: "Sigma Rat", img: "images/rat-9497195-removebg-preview.png", sound: "sounds/yeah-boy-114748.mp3", rarity: "Mythic", chance: 0.1  },
  { name: "Rats", img: "images/wildlife-3552300-removebg-preview.png", sound: "sounds/yeah-boy-114748.mp3", rarity: "Epic", chance: 0.1  },
];


const popup = document.getElementById("popup");
const ratImage = document.getElementById("rat-image");
const ratName = document.getElementById("rat-name");

let clicked = 0;


popup.addEventListener("click", () => {
  if (clicked < 4) {
    // Ratte auswählen
    const rat = rats[Math.floor(Math.random() * rats.length)];

    // Anzeigen
    ratImage.src = rat.image;
    ratName.textContent = rat.name;
    ratImage.classList.remove("hidden");
    ratName.classList.remove("hidden");

    clicked++;

    if (clicked === 4) {
      ratName.textContent = `FINAL RESULT: ${rat.name} 🎉`;
      popup.style.boxShadow = "0 0 30px gold";
    }
  }
});
