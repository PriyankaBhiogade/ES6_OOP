
class Deck {
    constructor() {
      this.deck = [];
        const suits = ['♥', '♣', '♠', '♦'];
        const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        for (let suit in suits) {
            for (let value in ranks) {
                this.deck.push(`${ranks[value]} of ${suits[suit]}`);
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
    players() {
        const arr = [[], [], [], []];
        let x = 0, y = 9;
        const players = [0, 1, 2, 3];
        const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        players.map((player) => {
            cards.map((card) => {
                arr[player][card] = this.deck[card + x]
            })
            x = x + y;
        })
        let n = 1;
        players.map((player) => {
             console.log(`${n++}th Players Cards :: \n`);
           cards.map((card) => {
                let playerCard = arr[player][card];
                 console.log(`[${playerCard}] \n`);
            })
             console.log('\n');
        });
        
        return([arr[0]],arr[1],arr[2],arr[3]);
    }
}
const deck1 = new Deck();
deck1.shuffle()
deck1.players()

module.exports = {
        Deck
    }