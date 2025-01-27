
document.addEventListener("DOMContentLoaded", () => {
  const ribbon = document.getElementById("unwrap-ribbon");
  const presentBox = document.getElementById("present-box");
  const insidePresent = document.getElementById("inside-present");
  const flowerImage = document.getElementById("flower-image");
  const specialMessage = document.getElementById("special-message");
  const nextStepButton = document.getElementById("next-step");
  const soundEffect = document.getElementById("sound-effect");
  const flowerSound = document.getElementById("flower-sound");

  const step3Button = document.getElementById("step-3"); // Step 3 button
  const step2Button = document.getElementById("step-2"); // Step 2 button
  const step1Button = document.getElementById("step-1"); // Step 1 button

  // Ribbon click functionality
  ribbon.addEventListener("click", () => {
    // Play an animation for the ribbon sliding away
    ribbon.style.animation = "slide-away 1s forwards";
    setTimeout(() => {
      // After the ribbon slides away, change the present box
      presentBox.src = "images/gift-box-open.jpg";  // Use your own image
      presentBox.style.animation = "none"; // Stop the wiggling animation

      // Show the confetti and message
      insidePresent.style.display = "block";

      // Enable Step 3 button (unlock navigation)
      step3Button.disabled = false;
    }, 1000);
  });

  // Second step functionality: Clicking the wiggling gift box
  presentBox.addEventListener("click", () => {
    // Play the sound effect for the box click
    soundEffect.play();

    // Fade out the gift box and fade in the flower image
    presentBox.style.opacity = 0;
    flowerImage.style.opacity = 1;

    // Play the flower sound effect
    flowerSound.play();
  });

  // Button functionality to move to the next step (Step 3)
  step3Button.addEventListener("click", () => {
    // After clicking Step 3, show a new message or go to a new page
    window.location.href = "finalpage.html"; // Change this URL to wherever you want to go
  });
  
  // Button functionality for the rest of the navigation steps (optional)
  step1Button.addEventListener("click", () => {
    alert("You're already at Step 1!");
  });
  
  step2Button.addEventListener("click", () => {
    alert("You're already at Step 2!");
  });
});
