var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".cuadrado");
var colorDisplay = document.getElementById("color");
var messageDisplay = document.querySelector("#mensaje");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".modo");
init();
function init(){
	setupModeButtons();
	setupSquares();
	reset();
}
function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Facil" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}
function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//Agrega click listeners a los cuadrados
		squares[i].addEventListener("click", function(){
			//Agarra el valor del cuadrado escogido
			var clickedColor = this.style.background;
			//Compara el color escogido al color correcto
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correcto";
				resetButton.textContent = "Jugar otra vez?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Sigue intentando"
			}
		});
	}
}
function reset(){
	colors = generateRandomColors(numSquares);
	//Escoge un color nuevo del array
	pickedColor = pickColor();
	//Cambia el color de la barra al color del cuadrado
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "Colores Nuevos"
	messageDisplay.textContent = "";
	//Cambia el color de los cuadrados
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}
resetButton.addEventListener("click", function(){
	reset();
})
function changeColors(color){
	//Recorre los cuadrados
	for(var i = 0; i < squares.length; i++){
		//Le da el color a cada cuadrado
		squares[i].style.background = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//crear array
	var arr = []
	for(var i = 0; i < num; i++){
		//ingresar color aleatorio al array
		arr.push(randomColor())
	}
	//retorna el array
	return arr;
}
function randomColor(){
	//Escoge un "rojo" de 0 a 255
	var r = Math.floor(Math.random() * 256);
	//Escoge un "verde" de 0 a 255
	var g = Math.floor(Math.random() * 256);
	//Escoge un "azul" de 0 a 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}