// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
// }

// var truck = new Car("ford", "f-150", 2004);
// var car = new Car("subaru", "impreza", 2001);


// function hello() {
//     console.log(this);
// }


// hello()

// console.log("Hello!!!")
// $(document).ready(function () {
//     console.log("hello")
// })
// #(element).event(function =>
//     the thing that you want to happen)


class Deck {
    constructor() {
        this.deck = [];
        this.numofcards = 52;
        var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        for(var suit in suits){
            for(var value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            };
        };
    }
    showDeck() {
        console.log(this.deck)
    }
    changeNum() {
        this.numofcards = 4;
    }
}
var cards = new Deck();
// console.log(cards.showDeck())
// #(element).event(function =>
//     the thing that you want to happen)
$('#draw').click(function(){
    $('#display').append(`<p>${cards.deck[Math.floor(Math.random()*51)]}</p>`)
})
// know the button has been clicked
    // find where i want to add the card
    // add the card

$('#reset').click(function(){
    $('#display').empty();
})

