let numOfColors = 6;
let colors = colorGenerator(numOfColors);
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let resetBtn = document.querySelector("#reset");
let easyBtn = document.querySelector("#btnEasy");
let hardBtn = document.querySelector("#btnHard");
let pickedColor = colorPicking();
let h1 = document.getElementsByTagName("h1")[0];
let statusMessage = document.getElementById("statusMessage");

// adding picked color to h1
colorDisplay.textContent = pickedColor;

//looping through squares
for(let i=0; i<squares.length; i++){
    //adding colors to squares
    squares[i].style.backgroundColor = colors[i];
    //adding click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        //compare clicked to picked color
        if (pickedColor == clickedColor){
            //adding picked color to all squares
            squaresColor();
            //adding picked color to h1
            h1.style.backgroundColor = pickedColor;
            // "PLAY AGAIN?" text to resetBtn
            resetBtn.textContent = "Play again?";
            //status message
            statusMessage.textContent = "Correct!";

        } else {
            //making the wrong square disappear
            this.style.backgroundColor = "#232323";
            //status message
            statusMessage.textContent = "Try again!";
        }
    });

}

//adding picked color to all squares
function squaresColor(){
    for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
} 

// generate array of random colors
function colorGenerator(num){
    let arr = [];
    for(let i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

// generate random color for colorGenerator
function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


// "NEW COLORS" button that resets the game
resetBtn.addEventListener("click", function(){
    colors = colorGenerator(numOfColors);
    pickedColor = colorPicking();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetBtn.textContent = "New colors";
    statusMessage.textContent = "";
    for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
});

// function that defines random color in colors array
function colorPicking(){
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}


// HARD / EASY game mode

//HARD
hardBtn.addEventListener("click", function(){
    numOfColors = 6;
    colors = colorGenerator(numOfColors);
    pickedColor = colorPicking();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetBtn.textContent = "New colors";
    statusMessage.textContent = "";
    hardBtn.classList.add("btnActive");
    easyBtn.classList.remove("btnActive");
    for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

//EASY
easyBtn.addEventListener("click", function(){
    numOfColors = 3;
    colors = colorGenerator(numOfColors);
    pickedColor = colorPicking();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetBtn.textContent = "New colors";
    statusMessage.textContent = "";
    easyBtn.classList.add("btnActive");
    hardBtn.classList.remove("btnActive");
    for(let i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});
