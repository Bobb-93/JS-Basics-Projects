// Define 'questions' array with next data:

// Q1: "What is the capital of France?",
// Q2: "Which language is used for Front-end Web development?",
// Q3: "What does CSS stand for?"

let questions = [
    "What is the capital of France?",
    "Which language is used for Front-end Web development?",
    "What does CSS stand for?"
];

// Define options array with next data

// Q1 Options: "Berlin", "Madrid", "Paris", "Lisbon"
// Q2 Options: "Python", "JavaScript", "C++", "Java"
// Q3 Options: "Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"

let options = [
    ["Berlin", "Madrid", "Paris", "Lisbon"],
    ["Python", "JavaScript", "C++", "Java"],
    ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"],
];

// Define answers array with next data
// Q1 Answer: "Paris",
// Q2 Answer: "JavaScript",
// Q3 Answer: "Cascading Style Sheets"

let answers = [
    "Paris",
    "JavaScript",
    "Cascading Style Sheets"
];

// Define output variable which will contain a next string, using the data in questions, options and answers
let output = "";

for (let i = 0; i < questions.length; i++) {
    output += `${questions[i]} (${answers[i]})\n\t${options[i].join(', ')}\n`;
}

/* ---------------------------------- TEST ---------------------------------- */
console.log(output);

/* ---------------------------- EXPECTED OUTPUT: ---------------------------- */
// What is the capital of France? (Paris)
//     Berlin, Madrid, Paris, Lisbon
// Which language is used for Front-end Web development? (JavaScript)
//     Python, JavaScript, C++, Java
// What does CSS stand for? (Cascading Style Sheets)
//     Cascading Style Sheets, Creative Style System, Computer Style Sheets, Colorful Style Sheets