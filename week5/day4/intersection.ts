type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

// Create the intersection type
type PersonWithAddress = Person & Address;

const user: PersonWithAddress = {
  name: "Alice",
  age: 30,
  street: "123 Maple St",
  city: "Wonderland"
};

//exercise2
function describeValue(value: number | string): string {
  if (typeof value === "string") {
    return "This is a string";
  } else {
    return "This is a number";
  }
}

console.log(describeValue("Hello")); // "This is a string"
console.log(describeValue(42));      // "This is a number"

//exercise3
let someValue: any = "I am a string undercover";

// Casting using 'as' syntax
let strLength: number = (someValue as string).length;

// Casting using angle-bracket syntax (not usable in JSX/React)
let strUpper: string = (<string>someValue).toUpperCase();

console.log(strUpper);

//exercise4
function getFirstElement(arr: (number | string)[]): string {
  // We assert the first element is a string
  return arr[0] as string;
}

const mixedArray = ["Apple", 10, "Banana"];
console.log(getFirstElement(mixedArray).toUpperCase()); // "APPLE"

//exercise5
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(`Length is: ${item.length}`);
}

logLength("Hello TypeScript"); // Works (string has length)
logLength([1, 2, 3]);          // Works (array has length)
// logLength(10);              // Error: numbers don't have a length property
//exercise6
type PersonBasic = { name: string; age: number };
type Job = { position: string; department: string };

type Employee = PersonBasic & Job;

function describeEmployee(emp: Employee): string {
  if (emp.position === "Manager") {
    return `${emp.name} oversees the ${emp.department} department.`;
  } else if (emp.position === "Developer") {
    return `${emp.name} builds projects in the ${emp.department} department.`;
  } else {
    return `${emp.name} works as a ${emp.position}.`;
  }
}

const manager: Employee = { name: "Bob", age: 45, position: "Manager", department: "Sales" };
console.log(describeEmployee(manager));

//exercise7
// Almost everything in JS has .toString(), but we can enforce it
interface Stringable {
  toString(): string;
}

function formatInput<T extends Stringable>(input: T): string {
  // Using assertion to treat it as a string for formatting
  const result = (input as unknown as string).toString();
  return `Formatted: ${result.trim()}`;
}

console.log(formatInput("  Space  "));
console.log(formatInput(12345));



