// main screen
let mainScreenBtn = document.querySelector(".mainScreenBtn");
let playerOneNameInput = document.querySelector(".playerOneNameInput");
let mainScreen = document.querySelector(".mainScreen");
let heading = document.querySelector(".heading");
let error = document.querySelector(".error");
// main screen end

// screen two
let screenTwoBtn = document.querySelector(".screenTwoBtn");
let playerOneNumberInput = document.querySelector(".playerOneNumberInput");
let screenTwo = document.querySelector(".screenTwo");
let heading2 = document.querySelector(".heading2");
let error2 = document.querySelector(".error2");
// screen two end

// screen three
let screenThreeBtn = document.querySelector(".screenThreeBtn");
let playerTwoNameInput = document.querySelector(".playerTwoNameInput");
let screenThree = document.querySelector(".screenThree");
let heading3 = document.querySelector(".heading3");
let error3 = document.querySelector(".error3");
// screen three end

// screen four
let screenFourBtn = document.querySelector(".screenFourBtn");
let playerTwoNumberInput = document.querySelector(".playerTwoNumberInput");
let screenFour = document.querySelector(".screenFour");
let heading4 = document.querySelector(".heading4");
let error4 = document.querySelector(".error4");
// screen four end

// final screen
let finalScreen = document.querySelector(".finalScreen");
let congrates = document.querySelector(".congrates");
let returnBtn = document.querySelector(".returnBtn");
// final screen end

mainScreenBtn.addEventListener("click", function () {
  if (playerOneNameInput.value == "") {
    error.style.display = "block";
  } else {
    mainScreen.style.display = "none";
    screenTwo.style.display = "block";
  }
});

screenTwoBtn.addEventListener("click", function () {
  if (playerOneNumberInput.value >= 1 && playerOneNumberInput.value <= 9) {
    screenTwo.style.display = "none";
    screenThree.style.display = "block";
  } else {
    error2.style.display = "block";
  }
});

screenThreeBtn.addEventListener("click", function () {
  if (playerTwoNameInput.value == "") {
    error3.style.display = "block";
  } else {
    screenThree.style.display = "none";
    screenFour.style.display = "block";
  }
});

screenFourBtn.addEventListener("click", function () {
  if (playerTwoNumberInput.value == playerOneNumberInput.value) {
    screenFour.style.display = "none";
    finalScreen.style.display = "block";
  } else {
    error4.style.display = "block";
  }
});

finalScreen.addEventListener("click", function () {
    finalScreen.style.display = "none" 
    mainScreen.style.display = "block" 
})
