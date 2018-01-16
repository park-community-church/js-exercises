/*
 * For this exercise, you will write a program that generates the Baum-Sweet sequence for a given
 * user input integer n.
 *
 * A Baum-Sweet sequence is an infinite sequence of 0's and 1's defined by the rule:
 *     - b_n = 1 if the binary representation of n contains no runs of consecutive 0's of length odd length
 *     - b_n = 0 otherwise
 * For example, b_4 = 1 (where b_4 represents the a_4 term of the sequence) because the binary representation
 * of 4 is 100, which only contains one run of consecutive 0's of length 2. Similarly, b_5 = 0 because the
 * binary representation of 5 is 101, which contains a run of consecutive 0s of length 1. When n is 19611206,
 * b_19611206 = 0 because:
 *
 *     19611206 = 1001010110011111001000110 base 2
 *                 00 0 0  00     00 000  0 runs of 0s
 *                    ^ ^            ^^^    odd length sequences
 * Because we find an odd length run of 0's, b_b_19611206 = 0
 *
 * For this exercise, you will write a program that generates the Baum-Sweet sequence from 0 to some
 * user input integer n, both inclusive. For example, given "20" as input, your program would emit:
 *     1 1011 0010 1001 0011 0010
 *
 * There are two functions you need to write: convertToBinaryString() and buildBaumSweet(). I give you
 * integerDivision() as a helper function, and rendertoScreen() for final output.
 *
 * The idea for this exercise comes from https://goo.gl/Fk4zxg
 */

/*
 * Use this function to assist with writing convertToBinaryString(). Returns a
 * length 2 array, where the 0th element is the quotient and the 1th element is
 * the remainder.
 */
function integerDivision(a, b) {
    return [Math.floor(a / b), a % b];
}

/*
 * This function, given a string of binary output, will partition the string
 * into groups of 4 for readability, then output to the document.
 */
function renderToScreen(binaryString) {
    var groupByFour = [];
    for (var i = binaryString.length; i >= 0; i -= 4) {
        if (i < 4) {
            groupByFour.unshift(binaryString.slice(0, i));
            break;
        }
        groupByFour.unshift(binaryString.slice(i - 4, i));
    }
    document.getElementById('result').innerHTML = '<p>' + groupByFour.join(' ') + '</p>' +
        document.getElementById('result').innerHTML;
}

/*
 * Given a decimal number, returns the binary representation of that number
 * as a string. For this, look up the algorithm to convert a decimal number
 * to its binary representation.
 */
function convertToBinaryString(/* Arguments here */) {
    // Your code
}

/*
 * Given an integer n, construct and return the Baum-Sweet sequence from 0 to n inclusive
 * as a string.
 */
function buildBaumSweet(/* Arguments here */) {
    // Your code here
}


var n = Number(window.prompt('Give me an integer'));
// Your code here