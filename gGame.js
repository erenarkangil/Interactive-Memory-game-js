var picsdata =[("url('im1.jpg')"),("url('im2.jpg')"),("url('im3.jpg')"),("url('im4.jpg')")
,("url('im5.jpg')"),("url('im6.jpg')"),("url('im7.jpg')"),("url('im8.jpg')"),("url('im9.jpg')")
,("url('im10.jpg')"),("url('im11.jpg')"),("url('im12.jpg')")]

var isims2 = ["Fikret Gurgen","Arzucan Ozgur","Lale Akarun","Taylan Cemgil"
    ,"Cem Say","Haluk Bingol","Cem Ersoy","Alper Sen","Tuna Tugcu","Suzan Uskudarli","Levent Akin","Tunga Gungor",];
    

var mapped2 = [];

for(var i = 0; i <isims2.length; i++) {
		//get random color and push into arr
		var obj = {name:isims2[i], im:picsdata[i]};
		mapped2.push(obj)
	};


var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");




for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");	
		this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
		reset();
	});
}

var arbit = Array.from({length: 12}, () => Math.floor(Math.random() * 12));
var uniq = [... new Set(arbit)];

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares

	squares[i].style.backgroundImage = mapped2[uniq[i]].im;// BURASI.....
	//add click listeners to squares
	
    

	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		
		var clickedColor = mapped2[uniq[i]].name;
		//compare color to pickedColor
		console.log(clickedColor+pickedColor)
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Wrong";
		}
	});
}



function reset() {
	colors = generateRandomColors(numSquares);
	var arbit2 = Array.from({length: 12}, () => Math.floor(Math.random() * 12));
    var uniq2 = [... new Set(arbit)];
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Game";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundImage = mapped2[arbit2[uniq2[i]]].im;
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue"; //boun familiar
}

resetButton.addEventListener("click", function() {
	reset();
});

colorDisplay.textContent = pickedColor;



function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var arbit = Array.from({length: 12}, () => Math.floor(Math.random() * 12));
    var uniq = [... new Set(arbit)];
	var mapped=[]

    

    var isims2 = ["Fikret Gurgen","Arzucan Ozgur","Lale Akarun","Taylan Cemgil"
    ,"Cem Say","Haluk Bingol","Cem Ersoy","Alper Sen","Tuna Tugcu","Suzan Uskudarli","Levent Akin","Tunga Gungor",];
    
    var obj = {name:isims2[i], im:picsdata[i]};

	console.log(uniq[1])
    
    for(var i = 0; i <isims2.length; i++) {
		//get random color and push into arr
		var obj = {name:isims2[i], im:picsdata[i]};
		mapped.push(obj)
	}; 

    console.log(mapped);


	return mapped[arbit[0]].name;          //yardim
}



