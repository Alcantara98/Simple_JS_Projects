/**
 * Rock, Paper, or Scissors
 * 
 * Rock paper scissors is a classic two player game. Each player chooses either rock, 
 * paper, or scissors. The items are compared, and whichever player chooses the more 
 * powerful item wins.
 *
 * The possible outcomes are:
 *
 * Rock destroys scissors.
 * Scissors cut paper.
 * Paper covers rock.
 * If there’s a tie, then the game ends in a draw.
 * Our code will break the game into four parts:
 *
 * Get the user’s choice.
 * Get the computer’s choice.
 * Compare the two choices and determine a winner.
 * Start the program and display the results.
 * 
 * @author Elbert Alcantara
 */
const readline = require('readline');

const getUserChoice = userInput => {
    userInput = userInput.toString().toLowerCase();
    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
        return userInput;
    } else {
        console.log("Invalid Input");
    }
}

const getComputerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'tie';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'user won';
        } else {
            return 'computer won';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'user won';
        } else {
            return 'computer won';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'user won';
        } else {
            return 'computer won';
        }
    }
}

const playGame = (userInput) => {
    let userIn = getUserChoice(userInput);
    let compIn = getComputerChoice();
    return determineWinner(userIn, compIn);
}



async function askQuestion(query) {
    while (true) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        const promise = new Promise(resolve => rl.question(query, userIn => {
            rl.close();
            resolve(playGame(userIn));
        }))
        const ans = await promise;
        console.log(ans);
    }
}

askQuestion("Pick: ");