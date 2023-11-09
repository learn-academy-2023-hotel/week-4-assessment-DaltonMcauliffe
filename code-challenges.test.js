// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { updateExpression } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// // a) Create a test with an expect statement using the variable provided.
// // HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe ("colorArray",() => {
    it("takes in an array, removes the first item from the array and shuffles the remaining items", () => {
        expect(colorArray(colors1)).toEqual(expect.arrayContaining(["yellow","blue", "pink", "green"]))
        expect(colorArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo"]))
    })
})
// // ReferenceError: colorArray is not defined

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// // b) Create the function that makes the test pass.


// // Pseudo code:
// // made a function using array as a parameter
// // used syntax operator to go through the elements in the array
// // Create a for loop to go through the array in reverse order
// // create a new variable j to generate a random index between 0 and i
// // use fisher yates shuffle to shuffle the array
// // swap the elements at index i and j for the fisher yates
// // return the shuffled array with out the first element

const colorArray = (array) => {
    const[,... shuffle] = array;
    for (let i = shuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]]
    }
    return shuffle
}
console.log(colorArray(colors1))
console.log(colorArray(colors2))




// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
 describe ("voteCounter", () => {
    it("takes in a object and return the tally for the votes", () => {
        expect(voteCounter(votes1)).toEqual(11)
        expect(voteCounter(votes2)).toEqual(-31)
    })
})
// ReferenceError: voteCounter is not defined

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code:
//created function using votes as a parameter
// made a new variable total to calculate the total votes subtracting downVotes from upVotes
// return total 
// invoke the function and argument

const voteCounter = (votes) => {
    const total = votes.upVotes - votes.downVotes
    return total
}
console.log(voteCounter(votes1))
console.log(voteCounter(votes2))