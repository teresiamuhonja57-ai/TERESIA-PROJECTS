interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string; // The '?' makes this optional
}
class Library {
  private books: Book[] = [];

  public addBook(newBook: Book): void {
    this.books.push(newBook);
  }

  public getBookDetails(isbn: string): Book | string {
    const foundBook = this.books.find(book => book.isbn === isbn);
    return foundBook ? foundBook : "Book not found.";
  }

  // We need a protected getter to allow subclasses to access the books array
  protected getInternalBooks(): Book[] {
    return this.books;
  }
}

class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
    super(); // Initializes the base Library class
    this.website = website;
  }

  public listBooks(): string[] {
    // Map through the books array (accessed via the protected method) to get titles
    return this.getInternalBooks().map(book => book.title);
  }
}
// Create an instance of the DigitalLibrary
const myLibrary = new DigitalLibrary("https://galactic-archives.edu");

// Add some books
myLibrary.addBook({
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  isbn: "978-0547928227",
  publishedYear: 1937,
  genre: "Fantasy"
});

myLibrary.addBook({
  title: "Dune",
  author: "Frank Herbert",
  isbn: "978-0441172719",
  publishedYear: 1965
});

// 1. Print details of a specific book by ISBN
console.log("--- Book Search ---");
console.log(myLibrary.getBookDetails("978-0441172719"));

// 2. List all book titles
console.log("\n--- All Titles in Digital Library ---");
console.log(myLibrary.listBooks());

// 3. Print the website (Readonly)
console.log(`\nVisit us at: ${myLibrary.website}`);