/**
 * A function that will print and decrement a number
 * @param num starting number
 * @returns n/a 
 */
function countDown(num) {
    if (num > 0) {
        console.log(num);
        setTimeout(countDown(num-1), 1000);
    } else {
        console.log("DONE!");
    }
}

let timeIntervalID = setInterval(function randomGame() {
    //pick a number between 0 and 1
    let rand = Math.random() * 1;
    rand *= 100;
    rand = Math.round(rand) / 100;
    if (rand > 0.75) {
        console.log(rand)
        clearInterval(timeIntervalID);
    }
}, 1000)