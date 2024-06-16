//Saludos
const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Buenos días";
} else if (time < 18) {
  greeting = "Buenas tardes";
} else {
  greeting = "Buenas noches";
}
document.getElementById("saludo").innerHTML = greeting;

//Conteo regresivo
function conteoRegresivo() {

  function actualizarConteoRegresivo() {
      var currentTime = new Date();
      var hours = 23 - currentTime.getHours();
      var minutes = 59 - currentTime.getMinutes();
      var seconds = 59 - currentTime.getSeconds();

      // Add leading zeros if necessary
      hours = (hours < 10) ? '0' + hours : hours;
      minutes = (minutes < 10) ? '0' + minutes : minutes;
      seconds = (seconds < 10) ? '0' + seconds : seconds;

      document.getElementById("hour").innerHTML = hours;
      document.getElementById("min").innerHTML = minutes;
      document.getElementById("sec").innerHTML = seconds;
  }

  // Actualizar el conteo regresivo cada segundo
  setInterval(actualizarConteoRegresivo, 1000);

  // Comenzar actualización
  actualizarConteoRegresivo();
}

//Comenzar el conteo regresivo cuando la página se cargue
conteoRegresivo();

//Copyright
const d = new Date();
let year = d.getFullYear();
document.getElementById("currentYear").innerHTML = year;