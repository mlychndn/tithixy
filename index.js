

document.querySelector("h1").addEventListener("click", function(){
   document.querySelector("h1").innerHTML = "Happy Birthday Tithi";

     changeName();
});

function changeName(){
  var audio = new Audio('sound/bday.mp3');
audio.play();
};

$(function () {
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});
