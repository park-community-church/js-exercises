/*
 * For this exercise, write a function that takes a string as input and outputs either:
 *     1) The first character that is repeated in the string, or
 *     2) The string 'No repetitions' if there are no repeated characters
 * Examples:
 *     banana => a (banana)
 *                   ^ ^
 *     mayonnaise => n (mayonnaise)
 *                          ^^
 *     butler => No repetitions
 *
 *     stackoverflow => o (stackoverflow)
 *                              ^     ^
 *     prototype => o (prototype)
 *                       ^ ^
 * Treat uppercase and lower case letters as having the same character value.
 *
 * Write the body of the function firstRepeat()
 *
 * When that is complete and working, write the body of the function firstRepeatNoSpaces(). Do not re-write the
 * main logic of the function, but rather use firstRepeat() to do most of the logic
 */

// Call this function to write to the screen
function renderToScreen(str, result) {
    var text = result ? str + ' => \'' + result + '\'': str;
    document.getElementById('result').innerHTML += '<p>' + text + '</p>';

}

function inArray(arr, character) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === character) {
            return true;
        }
    }
    return false;
}

/*
 * Given an input string, outputs either the first repeated character in the input string,
 * or if none exists, 'No repetitions'
 */
function firstRepeat(inputString) {
    var letterMemory = [];
    for (var i = 0; i < inputString.length; i++) {
        var currentLetter = (inputString.charAt(i));
        if (inArray(letterMemory, currentLetter)){
            return currentLetter;
        } else letterMemory.push(currentLetter)
    }
    return 'No repetitions'
}

/*
 * The same functionality as firstRepeat, but ignores the space character as a
 * possible repetition
 */
function firstRepeatNoSpaces(inputString) {
    inputString = inputString.replace(/\s/g,'');
    return firstRepeat(inputString)
}

testStrings = [
    'stackoverflow',
    'banana',
    'butler',
    'mayonnaise',
    'JavaScript',
    'criteria',
    'Tom Brady vs Nick Foles',
    'development',
    'I cannot?',
    'quick lazy fox',
    'C++ can be a hard language to learn',
    'var setUnion = Set(a).union(Set(b));',
    '$80k - $100k'
];

// Run algorithm to get output
renderToScreen('<h2>Considering space characters:</h2>');
for (var i = 0; i < testStrings.length; i++) {
    renderToScreen(testStrings[i], firstRepeat(testStrings[i]));
}
renderToScreen('<h2>Ignoring space characters:</h2>');
for (i = 0; i < testStrings.length; i++) {
    renderToScreen(testStrings[i], firstRepeatNoSpaces(testStrings[i]));
}
