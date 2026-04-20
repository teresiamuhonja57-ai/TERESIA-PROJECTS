const message: string = "Hello, World!";
console.log(message);
//exercise2
let age: number = 25;
let userName: string = "John Doe";

console.log(`Name: ${userName}, Age: ${age}`);

//exercise3
let id: string | number;

id = 101;          // Valid
id = "ABC-101";    // Also valid
//exercise4
function checkNumber(num: number): string {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

console.log(checkNumber(10));  // "positive"
console.log(checkNumber(-5));  // "negative"

//exersice5
function getDetails(name: string, age: number): [string, number, string] {
    const greeting = `Hello, ${name}! You are ${age} years old.`;
    return [name, age, greeting];
}

const details = getDetails("Alice", 25);
console.log(details);

//exersice6

type PersonDetails = {
    name: string;
    age: number;
};

function createPerson(name: string, age: number): PersonDetails {
    return {
        name: name,
        age: age
    };
}

const newPerson = createPerson("Bob", 30);
console.log(newPerson);

//exercise7
// Assuming there is an <input id="user-email"> in your HTML
const emailInput = document.getElementById("user-email") as HTMLInputElement;

if (emailInput) {
    emailInput.value = "hello@example.com";
}

//exercise8
function getAction(role: string): string {
    switch (role.toLowerCase()) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        default:
            return "Invalid role";
    }
}

console.log(getAction("admin"));
//exercise9
// 1. Define Overload Signatures
function greet(): string;
function greet(name: string): string;

// 2. Implementation
function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    }
    return "Hello, Guest!";
}

console.log(greet());        // "Hello, Guest!"
console.log(greet("Zelda")); // "Hello, Zelda!"