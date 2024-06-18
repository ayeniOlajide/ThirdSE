class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (this.borrowedBooks.length >= 3) {
            console.log(`${this.name} cannot borrow more than 3 books.`);
            return false;
        }
        if (book.isBorrowed()) {
            console.log(`The book "${book.title}" is already borrowed.`);
            return false;
        }
        this.borrowedBooks.push(book);
        book.borrowed = true;
        return true;
    }

    returnBook(ISBN) {
        const bookIndex = this.borrowedBooks.findIndex(book => book.ISBN === ISBN);
        if (bookIndex !== -1) {
            const book = this.borrowedBooks[bookIndex];
            book.borrowed = false;
            this.borrowedBooks.splice(bookIndex, 1);
            console.log(`The book "${book.title}" has been returned.`);
        } else {
            console.log(`No book with ISBN ${ISBN} found in borrowed books.`);
        }
    }

    getBorrowedBooks() {
        return this.borrowedBooks.map(book => book.title);
    }
}

module.exports = User;
