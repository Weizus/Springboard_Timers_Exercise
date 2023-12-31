/**
 * A function that will print and decrement a number
 * @param num starting number
 * @returns n/a 
 */
function countDown(num) {
    if (num > 0) {
        console.log(num);
        setTimeout(function() {
            countDown(num-1)
        }, 1000);
    } else {
        console.log("DONE!");
    }
}

countDown(5);

/**
 * generates a random number and increments the # of tries before a desirable
 * number is made
 * @param none
 * @returns none
 */
let tries = 0;
function randomGame() {
    //pick a number between 0 and 1
    let rand = Math.random() * 1;
    rand *= 100;
    rand = Math.round(rand) / 100;
    //track tries
    tries++;
    //conditional for printing and ending the loop
    if (rand > 0.75) {
        console.log(`Random number: ${rand}. Took ${tries} tries.`);
        clearInterval(timeIntervalID);
    }
}
let timeIntervalID = setInterval(randomGame, 1000);