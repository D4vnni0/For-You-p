document.getElementById('yes-btn').addEventListener('click', function () {
  const catGif = document.getElementById('cat-gif'); // The GIF element
  const yesSound = document.getElementById('yes-sound'); // The sound element

  // Change the GIF to a new one
  catGif.src = "https://media.tenor.com/qTqdz1pRW6MAAAAC/party-happy.gif"; // New GIF URL

  // Play the sound effect
  yesSound.play();

  // Wait for 2 seconds before redirecting to WhatsApp
  setTimeout(function () {
    window.location.href = "https://wa.me/601129791625?text=Hello!%20Is%20Mr%20Danni?%20available%20to%20talk?%20:3";
  }, 2000); // 2000 milliseconds = 2 seconds
});
