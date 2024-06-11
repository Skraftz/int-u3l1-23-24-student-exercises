// CODE ALONG, PART 1
let favoriteColor;

// 1. Create a variable called `favoriteFood`.
let favoriteFood;

// 2. Create a variable called `favoriteNumber`.
let favoriteNumber;



// CODE ALONG, PART 2
//  3. Assign values for each variables.
// - Use a string value of your favorite color.
// - Use a string value of your favorite food.
// - Use a number value of your favorite number.
favoriteColor = "Orange"; //Sets it to "orange"
favoriteFood = favoriteColor; //set's it to "orange"
// 4. Console log each variable on a new line.
function Imcoughingreallybad () { //Inistiates and defines the function
    favoriteNumber = Math.random(); //Changes the favorite number to a random number
    console.log("My favorite number is always changing, but right now it is", favoriteNumber,"."); // Prints the favorite number of that second
    setTimeout(Imcoughingreallybad, 5000); //Runs the function Imcoughingreallybad()
};


console.log("My favorite color is ", favoriteFood,".");
console.log("My favorite food is ", favoriteColor,".");
Imcoughingreallybad();