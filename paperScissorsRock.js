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