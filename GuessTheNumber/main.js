//Select difficulty for the game
function selectDifficulty(gameDifficulty) {
    //console.log(gameDifficulty);

    switch (gameDifficulty.toLowerCase()) {
        case "easy":
            break;

        case "normal":
            maxNumber = 50;
            maxTries = 7;
            break;

        case "hard":
            maxNumber = 100;
            maxTries = 10;
            break;

        default:
            //Случай в който не влизаме
            alert("Невалидна трудност! Автоматично е избрана трудност Easy...");
            break;
    }
}

function guessNumber() {
    //console.log(`userTries = ${userTries}`);
    while (userNumber !== randomNumber) {
        // прочитаме какво е въвел потребителя, като преобразуваме текста до число:
        userNumber = userNumberField.value * 1;
        userTries++;
        numbersHistory.unshift(userNumber);
        // логика на играта:
        if (userNumber > randomNumber && userTries < maxTries) {            
            outputNode.innerHTML = `Не познахте: Надолу!\nИстория: ${numbersHistory.join(', ')}`;
            outputNode.style.backgroundColor = "#99F";
            break;
        }else if (userNumber < randomNumber && userTries < maxTries) {
            outputNode.innerHTML = `Не познахте: Нагоре!\nИстория: ${numbersHistory.join(', ')}`;
            outputNode.style.backgroundColor = "#F99";
            break;
        }else if(userNumber === randomNumber && userTries < maxTries)  {
            
            outputNode.innerHTML = `Браво, познахте от ${userTries}-я път!\nИстория: ${numbersHistory.join(', ')}`;
            outputNode.style.backgroundColor = "#99FF99";
            break;
        //}else if (userTries === maxTries) {
        }else{
            outputNode.innerHTML = `Играта свърши! Числото беше ${randomNumber}.`;
            break;
        } 
    }
    
}

function newGame() {
    difficultyField.style.display = "block";
    gameField.style.display = "none";
    numbersHistory = [];
    userTries = 0;
    maxNumber = 10;
    maxTries = 5;
    randomNumber = generateRandomNumber(minNumber, maxNumber);
    outputNode.innerHTML = "Нова игра! Ще познаете ли числото?";
    userNumberField.value = "";
}

// "cache" DOM:
const outputNode = document.getElementById("output");

//const btnNode = document.getElementsByTagName("button")[0];
const gameFieldOKButton = document.querySelector("#gameField button");
const newGameButton = document.getElementById("new-game-button");
const maxNumberSpan = document.getElementById("max-number");
const difficultyField = document.getElementById("difficultyField");
const difficultyFieldOKButton = document.querySelector('#difficultyField button');
const gameField = document.getElementById("gameField");
const userNumberField = document.getElementById("userNumber");

let generateRandomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * maxNumber) + minNumber;

// Initialize Variables
let randomNumber;
let userGuess = null;
let userTries = 0;
let minNumber = 0;
let maxNumber = 10;
let maxTries = 5;
let numbersHistory = [];
let userNumber;

randomNumber = generateRandomNumber(minNumber, maxNumber); // Generate a Random Number

difficultyFieldOKButton.addEventListener("click", function () {
    selectDifficulty(document.getElementById("difficulty").value);
    difficultyField.style.display = "none";
    gameField.style.display = "block";
    maxNumberSpan.innerText = maxNumber;
});

// асоциираме събитието onclick на бутона с функцията guessNumber
gameFieldOKButton.addEventListener("click", guessNumber);
newGameButton.addEventListener("click", newGame);



