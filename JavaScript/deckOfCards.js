var faces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
var suits = ["Hearts", "Spades", "Clubs", "Diamonds"];

function Card(face, suit) {
     this.face = face;
     this.suit = suit;
}

var deckArray = [];
for (var i = 0; i < 52; i++) {
    for (var j = 0; j < 13; j++) {
        for (var k = 0; k < 4; k++) {
            deckArray[i] = new Card(faces[j], suits[k]);
        }
    }
}

// for now, test the pickACard function
function pickACard()
{
    // from 0-51
    var pickCard = Math.floor(Math.random() * 52);
    printCard(deckArray[pickCard]);
}

function printCard(card_object)
{
    alert(card_object.face + " of " + card_object.suit);
}
