/*
 * Fibbonacci Numbers Exercise
 * 28 Nov 2017
 *
 * Write a program that takes in a single Number as input and outputs that many
 * elements of the Fibonacci sequence.
 *
 * The Fibbonacci sequence is a recurrence relation defined as follows:
 *     a1 = 1
 *     a2 = 1
 *     a3 = 2
 *     a4 = 3
 *     a5 = 5
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