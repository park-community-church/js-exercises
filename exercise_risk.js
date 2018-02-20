var riskCountries = [
    'Alaska',
    'Alberta',
    'Central America',
    'Eastern United States',
    'Greenland',
    'Northwest Territory',
    'Ontario',
    'Quebec',
    'Western United States',
    'Argentina',
    'Brazil',
    'Peru',
    'Venezuela',
    'Great Britain',
    'Iceland',
    'Northern Europe',
    'Scandinavia',
    'Southern Europe',
    'Ukraine',
    'Western Europe',
    'Central Africa',
    'East Africa',
    'Egypt',
    'Madagascar',
    'North Africa',
    'South Africa',
    'Afghanistan',
    'China',
    'India',
    'Irkutsk',
    'Japan',
    'Kamchatka',
    'Middle East',
    'Mongolia',
    'Siam',
    'Siberia',
    'Ural',
    'Yakutsk',
    'Eastern Australia',
    'Indonesia',
    'New Guinea',
    'Western Australia'
];

function rollDice(/* Arguments here */) {
    // Your code here
    // return value of the dice roll
}

function gameLoop(attackingCountry, attackingTroops, defendingCountry, defendingTroops) {
    console.log('\nStarted the battle.');
    console.log(attackingCountry + ' has ' + attackingTroops + ' troops.');
    console.log(defendingCountry + ' has ' + defendingTroops + ' troops.');

    // Main game loop
    var gameOver = false;
    for (var turn = 1; /* What condition goes here? */; turn++) {
        // Report turn frontmatter to the user
        console.log('\nTurn ' + turn + ':');
        console.log('You have ' + attackingTroops + ' troops remaining');
        console.log(defendingCountry + ' has ' + defendingTroops + ' troops remaining.');

        // Your code here

        /*
         * Each loop should look like the following:
         * How many dice do you wish to throw?
         * You threw: n n n
         * Scandinavia threw: n n
         * You suffered 1 loss
         * Scandinavia suffered 1 loss
         *
         * The battle goes on until one of the countries loses all troops
         * The dice rules are:
         *    1) Match up the highest dice throw from the attacker to the highest from the defender
         *    2) If the attacker is higher, deduct one troop from the defender
         *    3) If the defender is higher or it's a tie, deduct one troop from the attacker
         *    4) If the defender threw a second die, match up to the attackers second highest, repeat above
         */
    }
}

// Main program
console.log('Welcome to Risk.');

// Set up battle between country
var attackingCountry = riskCountries[Math.floor(Math.random() * riskCountries.length)];
var defendingCountry = riskCountries[Math.floor(Math.random() * riskCountries.length)];
console.log('You are attacking ' + attackingCountry + ' from ' + defendingCountry + '.');

// Get number of troops on each side
var attackingTroops = parseInt(prompt('How many troops are you attacking with?'));
var defendingTroops = parseInt(prompt('How many troops is ' + defendingCountry + ' defending with?'));

gameLoop(attackingCountry, attackingTroops, defendingCountry, defendingTroops);
