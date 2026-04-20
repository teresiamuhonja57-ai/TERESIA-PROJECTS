class EmployeeClass {
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;

    constructor(name: string, salary: number, position: string, department: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    public getEmployeeInfo(): string {
        return `Name: ${this.name}, Position: ${this.position}`;
    }
}

const emp = new EmployeeClass("Marcus", 50000, "Developer", "IT");
console.log(emp.getEmployeeInfo());
//exercise2
class Product {
    readonly id: number;
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getProductInfo(): string {
        return `Product: ${this.name}, Price: $${this.price}`;
    }
}

const laptop = new Product(101, "MacBook", 1200);
console.log(laptop.getProductInfo());

// Attempting to modify id:
// laptop.id = 202; // ❌ Error: Cannot assign to 'id' because it is a read-only property.
//exercise3
class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        return "Some generic animal sound";
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name); // Call the parent constructor
    }

    // Overriding the base method
    override makeSound(): string {
        return "bark";
    }
}

const myDog = new Dog("Buddy");
console.log(myDog.makeSound()); // Output: "bark"

//exercise4
class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }
}

// Accessing directly from the class name
console.log(Calculator.add(10, 5));      // 15
console.log(Calculator.subtract(20, 8)); // 12
//exercise5
interface User {
    readonly id: number;
    name: string;
    email: string;
}

// Extending the interface
interface PremiumUser extends User {
    membershipLevel?: string; // The '?' makes it optional
}

function printUserDetails(user: PremiumUser) {
    console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
    if (user.membershipLevel) {
        console.log(`Membership: ${user.membershipLevel}`);
    } else {
        console.log("Membership: Standard");
    }
}

const vip = {
    id: 1,
    name: "Sarah",
    email: "sarah@example.com",
    membershipLevel: "Gold"
};

printUserDetails(vip);

