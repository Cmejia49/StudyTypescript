"use strict";
console.log("Function Typescript");
// Named function
function add(x, y) {
    return x + y;
}
console.log(add(1, 1));
// Anonymous function
let myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(2, 2));
function buildName(firstName, lastName = "Smith") {
    return firstName + " " + lastName;
}
let result1 = buildName("Bob"); // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined); // still works, also returns "Bob Smith"
console.log(result1 + result2);
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
