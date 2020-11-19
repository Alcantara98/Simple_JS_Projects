
/**
 * Whale Talk
 * 
 * Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.
 *
 * There are a few simple rules for translating text to whale language:
 *
 * There are no consonants. Only vowels excluding “y”.
 * The u‘s and e‘s are extra long, so we must double them in our program.
 * Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
 * 
 * @author Elbert Alcantara
 */
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
