const Book = require('./book');
const User = require('./user');

class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }

    addNewBook(book) {
        this.books.push(book);
        console.log(`The book "${book.title}" has been added to the library.`);
    }

    registerMember(user) {
        this.users.push(user);
        console.log(`The user "${user.name}" has been registered to the library.`);
    }

    borrowBook(userId, ISBN) {
        const user = this.users.find(user => user.id === userId);
        if (!user) {
            console.log(`No user with ID ${userId} found.`);
            return false;
        }

        const book = this.books.find(book => book.ISBN === ISBN);
        if (!book) {
            console.log(`No book with ISBN ${ISBN} found!`);
            return false;
        }

        return user.borrowBook(book);
    }

    returnBook(userId, ISBN) {
        const user = this.users.find(user => user.id === userId);
        if (!user) {
            console.log(`No user with ID ${userId} found.`);
            return false;
        }

        user.returnBook(ISBN);
    }

    getBookInfo(ISBN) {
        const book = this.books.find(book => book.ISBN === ISBN);
        if (book) {
            return `Title: ${book.title}, Author: ${book.author}, Borrowed: ${book.borrowed}`;
        } else {
            return `No book with ISBN ${ISBN} found in the library.`;
        }
    }

    getUserBorrowedBooks(userId) {
        const user = this.users.find(user => user.id === userId);
        if (!user) {
            console.log(`No user with ID ${userId} found.`);
            return [];
        }
        return user.getBorrowedBooks();
    }
}

module.exports = Library;
