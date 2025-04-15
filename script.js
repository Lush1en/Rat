const rats = [
  { name: "Cartoon Rat", img: "images/cartoon rat.png", sound: "sounds/ratte1.mp3" },
  { name: "Sad Rat", img: "images/mouse-3194768-removebg-preview.png", sound: "sounds/ratte2.mp3" },
  { name: "Angry Rat", img: "images/rat-1388829-removebg-preview.png", sound: "sounds/ratte3.mp3" },
  { name: "Secret Rat", img: "images/rat-440987-removebg-preview.png", sound: "sounds/ratte4.mp3" },
  { name: "Sigma Rat", img: "images/rat-9497195-removebg-preview.png", sound: "sounds/ratte5.mp3" },
  { name: "Rat Gang", img: "imageswildlife-3552300-removebg-preview.png", sound: "sounds/ratte5.mp3" },
];

const legendary = {
  name: "🔥 Legendary 🔥",
  img: "images/rat-9497195-removebg-preview.png",
  sound: "sounds/legend.mp3"
};

const popup = document.getElementById("popup");
const ratImage = document.getElementById("rat-image");
const ratName = document.getElementById("rat-name");

let freeze = false;

document.body.addEventListener("click", () => {
  if (freeze) return;

  // 1 in 10 Chance für die legendäre Ratte
  const isLegendary = Math.random() < 0.1;

  const rat = isLegendary
    ? legendary
    : rats[Math.floor(Math.random() * rats.length)];

  // Setze Bild & Name
  ratImage.src = rat.img;
  ratName.textContent = rat.name;
  popup.classList.remove("hidden");

  // Spiele Sound
  const audio = new Audio(rat.sound);
  audio.play();

  // Freeze bei legendärer Ratte
  if (isLegendary) {
    freeze = true;
    document.body.style.pointerEvents = "none";
    ratName.textContent += " 🏆";
    // Hier kannst du später Statistik anzeigen etc.
  } else {
    setTimeout(() => popup.classList.add("hidden"), 1500);
  }
});

