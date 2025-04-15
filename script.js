const rats = [
  { name: "Cartoon Rat", img: "images/cartoon rat.png", sound: "sounds/ratte1.mp3" },
  { name: "Sad Rat", img: "images/mouse-3194768-removebg-preview.png", sound: "sounds/ratte2.mp3" },
  { name: "Angry Rat", img: "images/rat-1388829-removebg-preview.png", sound: "sounds/ratte3.mp3" },
  { name: "Secret Rat", img: "images/rat-440987-removebg-preview.png", sound: "sounds/ratte4.mp3" },
  { name: "Sigma Rat", img: "images/rat-9497195-removebg-preview.png", sound: "sounds/ratte5.mp3" },
  { name: "Rat Gang", img: "images/wildlife-3552300-removebg-preview.png", sound: "sounds/ratte5.mp3" },
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

  popup.classList.remove("hidden");

  // Slot-Animation: 3x zufällige Bilder zeigen
  let spinCount = 0;
  const spinInterval = setInterval(() => {
    const fakeRat = rats[Math.floor(Math.random() * rats.length)];
    ratImage.src = fakeRat.img;
    ratName.textContent = "???";
    spinCount++;

    if (spinCount >= 3) {
      clearInterval(spinInterval);
      showFinalRat();
    }
  }, 400);
});

function showFinalRat() {
  const isLegendary = Math.random() < 0.1;
  const rat = isLegendary
    ? legendary
    : rats[Math.floor(Math.random() * rats.length)];

  ratImage.src = rat.img;
  ratName.textContent = rat.name;

  const audio = new Audio(rat.sound);
  audio.play();

  if (isLegendary) {
    freeze = true;
    document.body.style.pointerEvents = "none";
    ratName.textContent += " 🏆";
    // 🔥 Später hier Firebase aufrufen und andere blockieren
  } else {
    setTimeout(() => popup.classList.add("hidden"), 2000);
  }
}
