const algo = require('./utility');
const que = require('./Utility/queue')
class Deck {
    constructor() {
        this.deck = [];
        const suits = ['♥', '♣', '♠', '♦'];
        const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        for (let suit in suits) {
            for (let value in ranks) {
                this.deck.push(`${ranks[value]}-of-${suits[suit]}\n`);
            }
        }
    }
    shuffle() {
        const deck = this.deck;
        let m = this.deck.length, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            [deck[m], deck[i]] = [deck[i], deck[m]];
        }
        return this.deck;
    }
    data() {
        const deck = this.deck;
        const player1 = new que.Queue();
        const player2 = new que.Queue();
        const player3 = new que.Queue();
        const player4 = new que.Queue();
        for (let index = 0; index < deck.length; index++) {
            if (index < 13) {
                player1.push(deck[index]);//pushing values into the queue
            }
            else if (index < 26 && index >= 13) {
                player2.push(deck[index]);//pushing values into the queue
            }
            else if (index < 39 && index >= 26) {
                player3.push(deck[index]);//pushing values into the queue
            }
            else {
                player4.push(deck[index]);//pushing values into the queue
            }
        }
        const array1 = player1.getData().split(" ");//splitting data that is in the queue
        const array2 = player2.getData().split(" ");
        const array3 = player3.getData().split(" ");
        const array4 = player4.getData().split(" ");

        algo.insertionSortString(array1);//sorting all the values using insertion sort
        algo.insertionSortString(array2);
        algo.insertionSortString(array3);
        algo.insertionSortString(array4);

        console.log(`The cards that 1st player is having is :: \n${array1}`);//displaying all the cards that the player have
        console.log(`The cards that 2nd player is having is :: \n${array2}`);
        console.log(`The cards that 3rd player is having is :: \n${array3}`);
        console.log(`The cards that 4th player is having is :: \n${array4}`);
    }
}
const deck1 = new Deck();
deck1.shuffle();
deck1.data();

