"use strict"

let inputLoopText = document.getElementById('InputLoopText');
let loopCountNumber = document.getElementById("LoopCount");
let lineOutputParmition = document.getElementById("lineOutputBool");
let submitButton = document.getElementById("submitBtn");
let outputShow = document.getElementById("showText");

submitButton.addEventListener("click", function(){
	let inputLoopValue = inputLoopText.value;
	let inputLoopNumber = Number(loopCountNumber.value);

	let dataStore = "";
	if (inputLoopValue != "" && inputLoopNumber >= 1) {
		outputShow.style.display = "block";
		dataStore = "";

		for(let i = 0; i < inputLoopNumber; i++){
			dataStore += inputLoopValue + " , ";
			outputShow.innerHTML = dataStore;
		}
	}

	if (inputLoopValue != "" && inputLoopNumber >= 1 && lineOutputParmition.checked) {
		outputShow.style.display = "block";
		dataStore = "";

		for(let i = 0; i < inputLoopNumber; i++){
			dataStore += inputLoopValue + "\n";
			outputShow.innerHTML = dataStore;
		}
	}

});