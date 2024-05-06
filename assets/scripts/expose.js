window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelectionDropdown = document.querySelector("#horn-select");
  const hornImage = document.querySelector("img");
  const audioElement = document.querySelector("audio");
  const volumeControlElement = document.querySelector("#volume-controls");
  const volumeSlider = volumeControlElement.querySelector("input");
  const volumeImage = volumeControlElement.querySelector("img");
  const playButton = document.querySelector("button");
  const confetti = new JSConfetti();

  const imagePaths = [
    "assets/images/no-image.png",
    "assets/images/air-horn.svg",
    "assets/images/car-horn.svg",
    "assets/images/party-horn.svg"
  ];

  const audioPaths = [
    "",
    "assets/audio/air-horn.mp3",
    "assets/audio/car-horn.mp3",
    "assets/audio/party-horn.mp3"
  ];

  hornSelectionDropdown.addEventListener("change", updateHorn);
  volumeSlider.addEventListener("input", updateVolume);
  playButton.addEventListener('click', playSound);

  function updateHorn() {
    hornImage.src = imagePaths[hornSelectionDropdown.selectedIndex];
    audioElement.src = audioPaths[hornSelectionDropdown.selectedIndex];
  }

  function updateVolume() {
    let volumeLevel = volumeSlider.value;
    audioElement.volume = volumeLevel / 100;

    if (volumeLevel == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    } else if (volumeLevel < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    } else if (volumeLevel < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
  }

  function playSound() {
    audioElement.play();
    if (hornSelectionDropdown.selectedIndex == 3) {
      confetti.addConfetti();
    }
  }
}
