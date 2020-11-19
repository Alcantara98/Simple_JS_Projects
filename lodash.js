/**
 * Mini Lodash Library
 * 
 * In this project, you will be implementing some of the most exciting functionality 
 * from the widely-popular lodash.js library. You will be implementing ten methods 
 * that add new functionality for numbers, strings, objects, and arrays.
 *
 * In implementing each method, we will follow these four steps:
 *
 * Specify the functionality of the method we are implementing
 * Ideate a game plan for how to implement this functionality in code
 * Implement our game plan
 * Test our code to ensure it works as expected
 * 
 * @author Elbert Alcantara
 */
const _ = {

    /**
     * If the provided number is smaller than the lower bound, it will return the lower bound as the 
     * final number.
     * If the number is larger than the upper bound, it will return the upper bound as the final number.
     * If the number is already within the two bounds, it will return the number as the final number.
     * 
     * @param {number} number 
     * @param {number} lowBound 
     * @param {number} upBound 
     */
    clamp(number, lowBound, upBound) {
        return Math.min(upBound, Math.max(number, lowBound));
    },

    /**
     * If the provided number is smaller than the start value, .inRange() will return false.
     * If the provided number is larger than or equal to the end value, .inRange() will return false.
     * If the provided number is within the start and end values, .inRange() will return true.
     * If no end value is provided to the method, the start value will be 0 and the end value will be 
     * the provided start value.
     * If the provided start value is larger than the provided end value, the two values will be swapped.
     * 
     * @param {number} num Number to check.
     * @param {number} start 
     * @param {number} end 
     */
    inRange(num, start, end) {
        if (!end) {
            end = start;
            start = 0;
        }

        let low = start < end ? start : end;
        let high = start < end ? end : start;

        return num >= low && num < high;
    },

    /**
     * .words() takes one argument: a string.
     * .words() splits the string into an array of words.
     * A word is defined by a space-separated string of characters, so each space character, ' ', 
     * indicates the end of one word and the start of the next.
     * 
     * @param {string} str String of words.
     */
    words(str) {
        let wordArr = [];
        currentWord = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i] != ' ') {
                currentWord += str[i];
            } else {
                wordArr.push(currentWord);
                currentWord = '';
            }
        }
        wordArr.push(currentWord);
        return wordArr;
    },

    /**
     * .pad() takes three arguments: a string and a length and a string.
     * .pad() adds third argument evenly to both sides of the string to make it reach the desired padding.
     * Extra padding is added to the end of the string if an odd amount of padding is required to 
     * reach the specified length.
     * 
     * @param {string} str 
     * @param {number} len 
     * @param {string} pad If no pad argument is given, default is a space ' '.
     */
    pad(str, len, pad = ' ') {

        let startPadding = '';
        for (let i = 0; i < len; i++) {
            if (i % 2 === 0) {
                str += chr;
            }else{
                startPadding += pad;
            }
        }
        return startPadding + str;
    },

    /**
     * .has() takes two arguments: an object and a key.
     * .has() checks to see if the provided object contains a value at the specified key.
     * .has() will return true if the object contains a value at the key and will return false if not.
     * Will not check nested objects.
     * 
     * @param {object} obj 
     * @param {string} key 
     */
    has(obj, key){
        let val = obj[key];

        if(val === undefined){
            return false;
        }
        return true;
    },

    /**
     * .invert() takes one argument: an object
     * .invert() iterates through each key / value pair in the provided object and swaps the 
     * key and value.
     * 
     * @param {object} obj 
     */
    invert(obj){
        let newObj = {};
        let keys = Object.keys(obj);

        for(let i = 0; i < keys.length; i++){
            newObj[obj[keys[i]]] = keys.filter(word => {
                if(obj[word] === obj[keys[i]]){
                    return word;
                }
            });
        }
        return newObj
    },

    /**
     * .findKey() takes two arguments: an object and a predicate function — a function that returns a boolean value.
     * .findKey() iterates through each key / value pair in the provided object and calls the predicate function with the value.
     * .findKey() returns the first key that has a value that returns a truthy value from the predicate function.
     * .findKey() returns undefined if no values return truthy values from the predicate function.
     * 
     * @param {object} obj 
     * @param {function} predFunc Takes one argument which is the Key Value.
         
     }} predFunc 
     */
    findKey(obj, predFunc){
        let keyArr = Object.keys(obj);
        for(let i = 0; i < keyArr.length; i++){
            let newVal = predFunc(obj[keyArr[i]]);
            if(newVal){
                return keyArr[i];
            }
        }
    },

    /**
     * drop() takes two arguments: an array and a number representing the number of items to drop 
     * from the beginning of the array.
     * .drop() returns a new array which contains the elements from the original array, excluding 
     * the specified number of elements from the beginning of the array.
     * If the number of elements to drop is unspecified, it drops one element.
     * 
     * @param {array} arr 
     * @param {number} numToDrop 
     */
    drop(arr, numToDrop = 1){
        return arr.slice(numToDrop);
    },

    /**
     * .dropWhile() takes two arguments: an array and a predicate function
     * The supplied predicate function takes three arguments: the current element, the current 
     * element index, and the whole array.
     * .dropWhile() creates a new copy of the supplied array, dropping elements from the beginning 
     * of the array until an element causes the predicate function to return a falsy value.
     * 
     * @param {array} arr 
     * @param {function} predFunc 
     */
    dropWhile(arr, predFunc){
        let dropNumber = arr.findIndex((element, index) => {
            return !predFunc(element, index, arr);
        })
        return this.drop(arr, dropNumber);
    },

    chunk(arr, size){
        let result = [];
        let arrCount = -1;
        for(let i = 0; i < arr.length; i++){
            if(i % size === 0){
                result.push([]);
                arrCount++;
            }
            result[arrCount].push(arr[i]);
        }
        return result;
    }
};

module.exports = _;