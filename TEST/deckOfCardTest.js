
var assert = require('chai').assert
const deckOfCards = require('../OOPProgram/deckOfCards');

describe(' Testing Deck of cards', () => {

    it("Checking length of card", () => {
        let result = new deckOfCards.Deck();
        assert.isTrue(result.deck.length == 52, 'is 52 card');
    });
    it("Checking card in null or not", () => {
        let result = new deckOfCards.Deck();
        assert.isNotNull(result, 'is not null ');

    });
    it("Checking lenght of 1st player card", () => {
        let result = new deckOfCards.Deck();
        assert.isTrue(result.players(0).length == 9, ' 1st player should 9 card');
    });
    it("Checking lenght of 2st player card", () => {
        let result = new deckOfCards.Deck();
        assert.isTrue(result.players(1).length == 9, '2st player should 9 card');
    });
    it("Checking lenght of 3st player card", () => {
        let result = new deckOfCards.Deck();
        assert.isTrue(result.players(2).length == 9, ' 3st player should 9 card');
    });
    it("Checking lenght of 4st player card", () => {
        let result = new deckOfCards.Deck();
        assert.isTrue(result.players(3).length == 9, '4st player should 9 card');
    });


});




