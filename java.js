var buttonImage = document.getElementById("volume");

var audio = new Audio("Assests/Music/The Batman (2022) ! Theme ! Bgm.mp3");

buttonImage.addEventListener("click", function() {                              // Speaker On/off Function
  if (buttonImage.src.includes("Assests/Images/Volume.png")) {
    buttonImage.src = "Assests/Images/Silent.png";
    audio.pause();
  } else {
    buttonImage.src = "Assests/Images/Volume.png";
    audio.play();
    audio.loop = true;
  }
  });

var container1 = document.getElementById("container1"); 

var button = document.getElementById("link");                                   // Secound page function

button.addEventListener('click', function() {
  window.location.href = "page2.html";
  
});

