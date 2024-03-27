// Add some interactivity to the website


var nome = document.getElementById("nome")
var email = document.getElementById("email")
var botao = document.getElementById("btm");
var resultado = document.getElementById("resultado");
var card2 = document.getElementById("card2")
var card1 = document.getElementById("card1")




botao.addEventListener("click", function(){
  card1.style.display = "none"
  card2.style.display = "block"


});
