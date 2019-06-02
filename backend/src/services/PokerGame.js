var Result = { "win": 1, "loss": 2, "tie": 3, "error": 4 };

var PokerPlayer = function (hand) {
    this.hand = hand;
    this.breakdown = {
        'numberCount': HelperPoker.numberCount(hand),
        'consecutiveNumbers': HelperPoker.consecutiveNumbersCheck(hand),
        'sameSuits': HelperPoker.sameSuitsCheck(hand),
        'highCardIndex': pokerSymbols.indexOf(HelperPoker.getHighCard(hand))
    };
};


PokerPlayer.prototype.compareWith = function (hand) {

    if (hand === undefined) {
        console.log('Please compare to another hand');
        return Result.error;
    }

    const player1 = new PokerPlayer(this.hand);
    const player2 = hand;

    const p1Result = types.indexOf(HelperPoker.getResult(player1));
    const p2Result = types.indexOf(HelperPoker.getResult(player2));

    if (p1Result === 9 && p2Result === 9) {
        if (player1.breakdown.highCardIndex > player2.breakdown.highCardIndex) {
            return Result.win;
        } else if (player1.breakdown.highCardIndex < player2.breakdown.highCardIndex) {
            return Result.loss;
        } else {
            return Result.tie
        }

    } else if (p1Result < p2Result) {
        return Result.win;
    } else if (p1Result > p2Result) {
        return Result.loss;
    } else if (p1Result === p2Result) {
        return Result.tie
    } else {
        return Result.error;
    }
};

//Declarate a symbols of cards
const pokerSymbols = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',];

//Declarate ranking of hand
const types = [
    'Royal Flush',
    'Straight Flush',
    'Quadra',
    'Full House',
    'Flush',
    'Sequência',
    'Dois Pares',
    'Dois Pares',
    'Par',
    'Carta Alta',
]

var HelperPoker = {
    numberCount: (hand) => {
        let cardDenoms = {};

        cardNumbers.getHandDenominations(hand.split(" ")).map(ele => {
            if (pokerSymbols.includes(ele)) {
                typeof cardDenoms[ele] === "undefined"
                    ? (cardDenoms[ele] = 1)
                    : cardDenoms[ele]++;
            }
        });
        return cardDenoms;
    },

    consecutiveNumbersCheck: (hand) => {
        let indexes = [];
        let consecutiveNumbers = true;

        cardNumbers.getHandDenominations(hand.split(" ")).map(ele => {
            indexes.push(pokerSymbols.indexOf(ele));
        });

        const sortedIndexes = indexes.sort((a, b) => a - b);

        for (let i = 1; i < sortedIndexes.length; i++) {
            if (sortedIndexes[i - 1] != sortedIndexes[i] - 1) {
                consecutiveNumbers = false;
            }
        }
        return consecutiveNumbers;
    },

    sameSuitsCheck: (hand) => {
        const suitsInHand = cardNumbers.getHandSuits(hand.split(" "));
        const suit = suitsInHand.shift();
        let count = 0;

        suitsInHand.map(ele => {
            if (ele === suit) {
                count++;
            }
        });

        return count === 4 ? true : false;
    },
    getHighCard: (hand) => {
        let highIndex = 0;

        cardNumbers.getHandDenominations(hand.split(" ")).map(ele => {
            if (pokerSymbols.indexOf(ele) > highIndex) {
                highIndex = pokerSymbols.indexOf(ele);
            }
        });

        return pokerSymbols[highIndex];
    },
    getResult: (hand) => {
        const denoms = cardNumbers.getHandDenominations(hand.hand.split(" "));

        // Royal flush
        if (
            denoms.includes("A") &&
            hand.breakdown.consecutiveNumbers &&
            hand.breakdown.sameSuits
        ) {
            return types[0];
        }

        // Straight flush
        if (hand.breakdown.consecutiveNumbers && hand.breakdown.sameSuits) {
            return types[1];
        }

        // Four of a kind
        let duplicates = [];

        for (const prop in hand.breakdown.numberCount) {
            if (hand.breakdown.numberCount[prop] === 4) {
                return types[2];
            } else {
                duplicates.push(hand.breakdown.numberCount[prop]);
            }
        }

        // Full house
        if (
            (duplicates[0] === 3 && duplicates[1] === 2) ||
            (duplicates[1] === 3 && duplicates[0] === 2)
        ) {
            return types[3];
        }

        // Flush
        if (hand.breakdown.sameSuits) {
            return types[4];
        }

        // Straight
        if (hand.breakdown.consecutiveNumbers) {
            return types[5];
        }

        // Three of a kind
        for (const prop in hand.breakdown.numberCount) {
            if (hand.breakdown.numberCount[prop] === 3) {
                return types[6];
            }
        }

        // Two pairs
        // One Pair
        let pairs = [];
        denoms.map((ele, i) => {
            if (denoms[i] === denoms[i + 1]) {
                pairs.push(denoms[i]);
            }
        });

        if (pairs.length === 2) {
            return types[7];
        } else if (pairs.length === 1) {
            return types[8];
        }

        // High card
        return types[9];
    }
};


var cardNumbers = {
    getHandDenominations: (cards) => {
        return cards.map(ele => ele[0]).sort();
    },
    getHandSuits: (cards) => {
        return cards.map(ele => ele[1]).sort();
    }

}

const pokerHand = /(([2-9]{1})|10|A|J|K|Q)(E|O|C|P)/gm

const PrepareHand = (hand = '') => hand.match(pokerHand).join(' ')

module.exports = { PokerPlayer, HelperPoker, PrepareHand, Result }


// Example hands for testing, uncomment to use in browser console
// const sampleHandRoyal = new PokerPlayer('AS KS TS QS JS'); // Royal flush
// const sampleHandStrFlush = new PokerPlayer('3S 5S 7S 6S 4S'); // Straight flush
// const sampleHandFour = new PokerPlayer('AS AD AC AH JS'); // 4 of a kind
// const sampleHandFull = new PokerPlayer('QS 2D 2C QS QH'); // Full house
// const sampleHandFlush = new PokerPlayer('2S 4S 6S QS JS'); // Flush
// const sampleHandStr = new PokerPlayer('4S 5C 7H 8S 6D'); // Straight
// const sampleHandThree = new PokerPlayer('4H 4C 4S 2H JS'); // 3 of a kind
// const sampleHand2Pair = new PokerPlayer('7D 7C 3S TD TH'); // Two Pairs
// const sampleHand1Pair = new PokerPlayer('AS AH 5D 2S 3C'); // Pair
// const sampleHandHighCard = new PokerPlayer('AS 8D TS 3C 5H'); // High card


// /* UI LOGIC */

// let message;
// const submitBtn = document.getElementById('submit-btn');


// submitBtn.addEventListener('click', () => { 

//     let messageText = document.getElementById('message');
//     let playerOneResult = document.getElementById('playerResult');
//     let playerTwoResult = document.getElementById('oppoResult');   
//     let playerOneHand, playerTwoHand, playerOneValue, playerTwoValue;

//     playerOneValue = document.getElementById('player1').value.toUpperCase();
//     playerTwoValue = document.getElementById('player2').value.toUpperCase();

//     if (playerOneValue.length !== 0 && playerTwoValue.length !== 0) {
//     playerOneHand = new PokerPlayer(playerOneValue);
//     playerTwoHand = new PokerPlayer(playerTwoValue);

//     playerOneResult.innerHTML = HelperPoker.getResult(playerOneHand);
//     playerTwoResult.innerHTML = HelperPoker.getResult(playerTwoHand);

//     playerOneHand.compareWith(playerTwoHand);

//     messageText.innerHTML = message;
//     } else {
//             messageText.innerHTML = "Please enter valid Value";
//     }

// })
