// Interpretted:
// 1. No need to convert, execute anyways without conversion
// 2. Code conversion on the Fly (while Running)
// 3. Line line Execution (Line 1 do not know whats there in line 3)

// Compiled:
// 1. Conversion to Machine Language
// 2. Executable code conversion
// 3. Whole code is converted into machine Language
// 4. Compile Time errors

// Concept of Hoisting

// Compiled/Interpretted - Twice Execution (Twice Interpretted) (Compiled)

alertUser();

console.log(userName)  // Output: Mayank, undefined

console.log(userDesignation)  // Error, Reference Error

function alertUser() {
    alert("Getting started...")
}

var userName = "Mayank";

console.log(userName)

// Twice Execution Method / Concept