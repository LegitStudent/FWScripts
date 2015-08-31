// modeling a deck of cards using javascript
var faces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
var suits = ["Hearts", "Spades", "Clubs", "Diamonds"];


// what if we could interact with a single card by making it an object?
// making a card constructor:
function Card(face, suit) {
     this.face = face;
     this.suit = suit;
};

var pickACard = function() {
    //Randomizes and picks a face with a suit and concatenates the card
    //Random face integer from (0 - 12)
    var pickaFace = Math.floor(Math.random() * 13);
    //Random suit integer from (0 - 3)
    var pickaSuit = Math.floor(Math.random() * 4);
    var pickedFace = DeckofCards.faces[pickaFace];
    var pickedSuit = DeckofCards.sutis[pickaSuit];

    return pickedFace + " of " + pickedSuit;
};

// make a function that loads an entire deck of 52 cards in an object/class
// three for loops (i, j, k)
//loading cards in an array, 52 objects in array.
var deckArray = [];
for (i = 0; i < 52; i++) {
    for (j = 0; j < 13; j++) {
        for (k = 0; k < 4, k++) {
            deckArray[i] = new Card(faces[j], suits[k]);
        };
    };
};

// for now, test the pickACard function
function pickOneCard() {
    // from 0-51
    var pickCard = Math.Floor(Math.Random() * 52)
    alert(deckArray[pickCard]);
};

pickOneCard();
