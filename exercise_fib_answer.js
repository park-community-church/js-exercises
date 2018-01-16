/*
 * Fibbonacci Numbers Exercise
 * 28 Nov 2017
 *
 * Write a program that takes in a single Number as input and outputs that many
 * elements of the Fibonacci sequence.
 *
 * The Fibbonacci sequence is a recurrence relation defined as follows:
 *     a0 = 1
 *     a1 = 1
 *     a2 = 2
 *     a3 = 3
 *     a4 = 5
 *     ...
 *     an = a(n-1) + a(n-2)
 *
 * For example, if the user inputs 14, the program should print out the
 * first 14 elements in the Fibbonacci sequence.
 */

// Call this function to write to the screen
function renderToScreen(line) {
    document.getElementById('result').innerHTML = '<p>' + line + '</p>' +
        document.getElementById('result').innerHTML;
}

var n = Number(prompt('Please give me a number: '));

// Your code here
if (n === 1) {
    renderToScreen('1');
} else {
    renderToScreen('1');
    renderToScreen('1');
    var twoTermsBack = 1;
    var oneTermBack = 1;
    for (var i = 0; i < (n - 2); i++) {
        var fib = twoTermsBack + oneTermBack;
        renderToScreen(fib);
        twoTermsBack = oneTermBack;
        oneTermBack = fib;
    }
}