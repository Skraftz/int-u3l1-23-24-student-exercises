// 1. Create a variable named `place` and set the value to a string that says whatever place you want.
let place = "John Island";
// 2. Create a variable named `creatureName` and set the value to a string that says whatever name you want to give the creature.
let creatureName = "John Creature OwO";
// 3. Create a variable named `color` and set the value to a string that says whatever color you want.
let color = "#a14fb6";
// 4. Create a variable named `color2` and set the value to a string that says a different color you want.
let color2 = "#5d34aa";
// 5. Create a variable named `emotion` and set the value to a string that says whatever emotion you want.
let emotion = "like 10 years into the joint made you a fu-. They had enough";
// 6. Create a variable named `character` and set the value to a string that says whatever name for a character you want.
let character = "John Yakuza";
// 7. Create a variable named `number` and set the value to a number greater than 1.
let number = 2;
// 8. Create a variable named `item` and set the value to a string that says whatever item/thing you want.
let item = "John Metal Pipe";
// 9. Create a variable named `item2` and set the value to a string that says a different item/thing you want.
let item2 = "John Survival";
// 10. Create a variable named `verb` and set the value to a string that says whatever verb you want.
let verb = "kill";
// 11. Create a variable named `adverb` and set the value to a string that says whatever adverb you want.
let adverb = "John";
// 12. Create a variable named `number2` and set the value to a number greater than 1.
let number2 = 621;

let madlyb = "#d9ead3";



// 14. Replace the null values with the appropriate variable you created above.
// - Afterwards, run your code and press the button to see your story ✨

document.querySelector("button").addEventListener("click", function() {
    document.querySelector(".place").innerHTML = place;
    document.querySelector(".place").style.color = madlyb;
    document.querySelector(".creature-name").innerHTML = creatureName;
    document.querySelector(".creature-name").style.color = madlyb;
    document.querySelector(".color").innerHTML = color;
    document.querySelector(".color").style.color = color;
    document.querySelector(".color-2").innerHTML = color2;
    document.querySelector(".color-2").style.color = color2;
    document.querySelector(".emotion").innerHTML = emotion;
    document.querySelector(".emotion").style.color = madlyb
    document.querySelector(".character").innerHTML = character;
    document.querySelector(".character").style.color = madlyb
    document.querySelector(".creature-name-again").style.color = madlyb
    document.querySelector(".number").style.color = madlyb
    document.querySelector(".item").style.color = madlyb
    document.querySelector(".character-again").style.color = madlyb
    document.querySelector(".item-2").style.color = madlyb
    document.querySelector(".verb").style.color = madlyb
    document.querySelector(".adverb").style.color = madlyb
    document.querySelector(".number-2").style.color = madlyb
    document.querySelector(".creature-name-again").innerHTML = creatureName;
    document.querySelector(".number").innerHTML = number;
    document.querySelector(".item").innerHTML = item;
    document.querySelector(".character-again").innerHTML = character;
    document.querySelector(".item-2").innerHTML = item2;
    document.querySelector(".verb").innerHTML = verb;
    document.querySelector(".adverb").innerHTML = adverb;
    document.querySelector(".number-2").innerHTML = number2;
    document.querySelector(".story-container").style = "display:block";
});
