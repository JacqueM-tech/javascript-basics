
// Declared variables for the elements
var backgroundEl = document.getElementById("background"); 
var minus = document.getElementById("minus"); 
var plus = document.getElementById("plus"); 
var totalNumber = 0;

//Function to change the background width  
var changeBackground = function() {
    backgroundEl.style.width = totalNumber + "%";
};

//Function to be triggered when a button is clicked and changes the width of the background
  
var clickedButton = function(name) {
    if(name == "plus") {
        if(totalNumber <= 90){
        totalNumber += 10;
        changeBackground();
        console.log(totalNumber)
        } else {
            alert("sorry can't go higher")

        }
    }
    
    if(name == "minus") {
        if(totalNumber >= 10){
        totalNumber -= 10;
        changeBackground();
        console.log(totalNumber)
        } else {
            alert("sorry can't go lower")

        }
    }

};

// added clicked event listeners to all buttons
plus.addEventListener("click", clickedButton.bind(null, "plus"));
minus.addEventListener("click", clickedButton.bind(null, "minus"));
