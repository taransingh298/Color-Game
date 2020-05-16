// variables
var squares = document.querySelectorAll(".square");

var pickedColor;
var color;

var colorDisplay = document.getElementById("change");
var message = document.querySelector("#message");
var jumbo = document.querySelector(".jumbotron");
var newColor = document.querySelector("#newColor");

// easy and hard mode
var easyMode = document.querySelector("#easy");
var hardMode = document.querySelector("#hard");


// by default mode is hard
var numValue = 6;
hardMode.classList.add("selected");

easyMode.addEventListener("click",function(){
	numValue = 3;
	hardMode.classList.remove("selected");
	this.classList.add("selected");
	color = generateRandomColor(numValue);
	reset();
	// hide lower 3 squares;
});


hardMode.addEventListener("click",function(){
	numValue = 6;
	easy.classList.remove("selected");
	this.classList.add("selected");
	color = generateRandomColor(numValue);
	reset();
});


// strring rgb dispaly on jumvotron so that user can guess the color logically that's the game we built
// calling reset on every refresh

reset();

function reset(){
	//console.log(numValue);    helps in checking how modes are selecting
	newColor.textContent = "New Color"
	color = generateRandomColor(6);

	var x = Math.floor(Math.random() * numValue ); // now range is from 0 to 5;
	pickedColor = color[x];

	colorDisplay.textContent = pickedColor;

	for(var i = 0 ; i < squares.length ; i++){
		if(i < numValue){
			squares[i].style.background = color[i];
		}

		else{
			squares[i].style.background = "#232323";
		}

		squares[i].addEventListener("click" , function(){
			var clickedColor = this.style.background;
			if(pickedColor === clickedColor){
				//alert("correct");
				message.textContent = "Correct!";
				changeColor(clickedColor);
				newColor.textContent = "Play Again?"
			}
			else{
				//alert("wrong");
				this.style.background = "#232323";
				message.textContent = "Try Again";
			}
		});
		message.textContent = "";
	}

}

function changeColor(clickedColor){
	for(var i = 0 ; i < numValue ; i++){
		squares[i].style.background = clickedColor;
	}
	jumbo.style.background = clickedColor;
}

function generateRandomColor(num){
	var arr = [];
	// run n times fill arr with random color and return in the end
	for(var i = 0 ; i < num ; i++){
		arr.push(randomColor());
		//console.log(arr[i]);
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256); // from 0 to 255 exclude the no we multiply

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

newColor.addEventListener("click" , function(){
	// on every newturn jumbotron color is set to default...we can do it by adding and removing classes also
	jumbo.style.background = "#4682B4";
	color = generateRandomColor(6);
	reset();
});

