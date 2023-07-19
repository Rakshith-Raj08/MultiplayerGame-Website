var buttonImage = document.getElementById("volume");

var audio = new Audio("Assests/Music/The Batman (2022) ! Theme ! Bgm.mp3");

buttonImage.addEventListener("click", function() {
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


  const canvas = document.getElementById('myCanvas');

    const ctx = canvas.getContext('2d');

    canvas.width = 1334;

    canvas.height = 702;

    ctx.fillStyle = 'white';

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    