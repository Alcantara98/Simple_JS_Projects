/**
 * Sleep Debt Calculator
 * 
 * Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t 
 * sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting 
 * enough sleep each week using a sleep debt calculator.
 *
 * The program will determine the actual and ideal hours of sleep for each night of the last week.
 *
 * Finally, it will calculate, in hours, how far you are from your weekly sleep goal.} day 
 */
const getSleepHours = day => {
    switch(day){
        case 'friday':
            return 10;
        case 'saterday':
            return 10;
        default:
            return 8;
    }
}

const getActualSleepHours = () => {
    let total = 0;

    total += getSleepHours('friday');
    total += getSleepHours('saterday');
    total += getSleepHours('sunday');
    total += getSleepHours('monday');
    total += getSleepHours('tuesday');
    total += getSleepHours('wednesday');
    total += getSleepHours('thursday');

    return total;
}

const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealHours = getIdealSleepHours();

    let difference = Math.abs(actualSleepHours - idealHours);
    if(actualSleepHours > idealHours){
        console.log(`You got ${difference} more hours than needed.`);
    }else if(actualSleepHours < idealHours){
        console.log(`You got ${difference} less hours than needed.`);
    }else{
        console.log('You got the perfect amount of sleep.');
    }
}

calculateSleepDebt();
