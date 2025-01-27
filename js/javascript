document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.getElementById("yes-btn");
  const noButton = document.getElementById("no-btn");
  const noSound = document.getElementById("no-sound");
  const yesSound = document.getElementById("yes-sound");
  const catGif = document.getElementById("cat-gif");
  const step2Link = document.getElementById("step2");

  // Original and alternate gif URLs
  const originalGif = "https://media1.tenor.com/m/uZlEERJn_fgAAAAd/milly-silly-cat.gif";
  const noGif = "https://media1.tenor.com/m/Qeouj9YZkboAAAAd/orange-cat-cat.gif";
  const yesGif = "https://media.tenor.com/5nSKlBlwdkIAAAAi/cat.gif";

  // No button functionality
  noButton.addEventListener("mouseover", () => {
    noButton.style.top = `${Math.random() * 300}px`;
    noButton.style.left = `${Math.random() * 300}px`;
    noSound.play();

    // Temporarily change the gif when hovering
    catGif.src = noGif;
    setTimeout(() => {
      catGif.src = originalGif; // Revert back to the original gif after 2 seconds
    }, 2000);
  });

  // Yes button functionality
  yesButton.addEventListener("click", () => {
    // Change gif to a happy one
    catGif.src = yesGif;

    // Play the sound effect
    yesSound.play();

    // Enable the second step after 1.5 seconds (to show gif briefly)
    setTimeout(() => {
      step2Link.classList.remove("locked");
      step2Link.classList.add("active");
      catGif.src = originalGif; // Revert to original gif after step is unlocked
    }, 1500);
  });
});

