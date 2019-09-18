class Deck {
    constructor() {
const suit = ["Clubs", "Diamonds", "Hearts", "Spades"];
const rank = ["Ace","2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const numberOfCard = suit.length * rank.length;
var deck = [];
suit.map((ele) => {
    rank.map((rk) => {
        let temp = " ";
        deck.push(`${temp}${rk} ${ele}`);
    })
})
for (let i = 0; i < numberOfCard; i++) {
    let r = parseInt((Math.random() * deck.length));
    let temp = deck[i];
    deck[i] = deck[r];
    deck[r] = temp;
}
const arr = [[],[],[],[]];
let x = 0, y = 9;
const arr1 = [0, 1, 2, 3];
const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
arr1.map((data) => {
    arr2.map((data1) => {
        arr[data][data1] = deck[data1 + x]
    })
    x = x + 9;
})
let n = 1;
arr1.map((data) => {
    console.log(`${n}th Players Cards ::\n`);
    arr2.map((data1) => {
        console.log(`[${arr[data][data1]}] \n`);
    })
    // console.log('\n');
   n++;
});

    }
}