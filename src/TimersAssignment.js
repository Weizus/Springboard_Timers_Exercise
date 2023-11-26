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

