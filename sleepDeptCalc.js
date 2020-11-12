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
