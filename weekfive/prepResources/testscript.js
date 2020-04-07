class Deck {
    constructor() {
      this.deck = [];
      // this.numOfCards = 52; getting data
        
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
      for (let suit in suits) {
        for (let value in values) {
          this.deck.push(`${values[value]} of ${suits[suit]}`);
        }
      }
    }
    // this.removeCard() // setting data
  }
  
const deck1 = new Deck();
console.log(deck1.deck);

// for drawing random cards:   Math.floor(Math.random()*52);