async function run() {
    let input;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = [];

    const promise = new Promise(resolve => process.stdin.on('data', (userInput) => {
        let userIn = userInput.toString()
        resolve(userIn);
    }))

    input = await promise;
    
    for(let i = 0; i < input.length; i++){
        if(vowels.includes(input[i])){
            result.push(input[i]);
            if(input[i] === 'e' || input[i] === 'u'){
                result.push(input[i]);
            }
        }
    }

    let resultString = '';
    for(let i = 0; i < result.length; i++){
        resultString += result[i];
    }

    resultString = resultString.toUpperCase();
    console.log(resultString);
    process.exit();
}

run();
