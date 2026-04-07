function displayNumbersDivisible(divisor = 23) {
    let sum = 0;
    let outcomes = [];

    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            outcomes.push(i);
            sum += i;
        }
    }

    console.log(`Outcome: ${outcomes.join(" ")}`);
    console.log(`Sum: ${sum}`);
}

// Default call
displayNumbersDivisible(); 
// Bonus calls:
// displayNumbersDivisible(3);
// displayNumbersDivisible(45);
//exercise2
const stock = { "banana": 6, "apple": 0, "pear": 12, "orange": 32, "blueberry": 1 };
const prices = { "banana": 4, "apple": 2, "pear": 1, "orange": 1.5, "blueberry": 10 };
const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;
    for (const item of shoppingList) {
        // Check if item is in stock and quantity > 0
        if (item in stock && stock[item] > 0) {
            total += prices[item];
            // Bonus: Decrease stock
            stock[item]--; 
        }
    }
    return total;
}

console.log("Total Bill:", myBill());
 //exercise3
 function changeEnough(itemPrice, amountOfChange) {
    // [quarters, dimes, nickels, pennies]
    const values = [0.25, 0.10, 0.05, 0.01];
    let totalWallet = 0;

    for (let i = 0; i < amountOfChange.length; i++) {
        totalWallet += amountOfChange[i] * values[i];
    }

    return totalWallet >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0])); // true

//exercise4
function hotelCost() {
    let nights;
    while (true) {
        nights = prompt("How many nights would you like to stay?");
        if (nights !== "" && !isNaN(nights)) return Number(nights) * 140;
    }
}

function planeRideCost() {
    let destination = "";
    while (destination === "" || !isNaN(destination)) {
        destination = prompt("Where are you going?");
    }
    if (destination === "London") return 183;
    if (destination === "Paris") return 220;
    return 300;
}

function rentalCarCost() {
    let days;
    while (true) {
        days = prompt("How many days for the car?");
        if (days !== "" && !isNaN(days)) {
            let cost = Number(days) * 40;
            if (days > 10) cost *= 0.95; // 5% discount
            return cost;
        }
    }
}

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    
    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
    return hotel + plane + car;
}

totalVacationCost();

//exercise5
// 1. Retrieve div
const container = document.getElementById("container");
console.log(container);

// 2. Change Pete to Richard
document.querySelectorAll(".list")[0].children[1].textContent = "Richard";

// 3. Delete second <li> of second <ul> (Sarah)
const secondUl = document.querySelectorAll(".list")[1];
secondUl.removeChild(secondUl.children[1]);

// 4. Change first <li> of each <ul> to your name
const allLists = document.querySelectorAll(".list");
allLists.forEach(ul => {
    ul.firstElementChild.textContent = "Gemini";
});

// Styling
allLists.forEach(ul => ul.classList.add("student_list"));
allLists[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

// Hide "Dan" (Last child of first <ul>)
// Note: Instructions say last <li> of first <ul>, which is Pete/Richard after changes
// But usually implies a specific target. Targeting text "Dan":
const allLis = document.querySelectorAll("li");
allLis.forEach(li => {
    if (li.textContent === "Dan") li.style.display = "none";
    if (li.textContent === "Richard") li.style.border = "1px solid black";
});

document.body.style.fontSize = "18px";

//exercise6
// 1. Change ID
const nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

// 2. Add Logout
const ul = nav.querySelector("ul");
const newLi = document.createElement("li");
const textNode = document.createTextNode("Logout");
newLi.appendChild(textNode);
ul.appendChild(newLi);

// 3. Display first and last
console.log("First:", ul.firstElementChild.textContent);
console.log("Last:", ul.lastElementChild.textContent);

//exercise7
const allBooks = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://m.media-amazon.com/images/I/710+H9E5K0L.jpg",
        alreadyRead: true
    },
    {
        title: "1984",
        author: "George Orwell",
        image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
        alreadyRead: false
    }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
    const div = document.createElement("div");
    const info = document.createElement("p");
    const img = document.createElement("img");

    info.textContent = `${book.title} written by ${book.author}`;
    img.src = book.image;
    img.style.width = "100px";

    if (book.alreadyRead) {
        info.style.color = "red";
    }

    div.appendChild(info);
    div.appendChild(img);
    section.appendChild(div);
});
