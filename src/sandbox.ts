console.log("Function Typescript");

// Named function
function add(x:number, y:number):number {
    return x + y;
  }
console.log(add(1,1));
  // Anonymous function
let myAdd = function (x:number, y:number):number {
    return x + y;
  };
console.log(myAdd(2,2))
  function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
  }
   
  let result1 = buildName("Bob"); // works correctly now, returns "Bob Smith"
  let result2 = buildName("Bob", undefined); // still works, also returns "Bob Smith"

console.log(result1 + result2);

interface Card {
    suit: string;
    card: number;
  }
   
  interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
  }
   
  let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function (this: Deck) {
      return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);
   
        return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      };
    },
  };
   
  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();
   
  console.log("card: " + pickedCard.card + " of " + pickedCard.suit)
