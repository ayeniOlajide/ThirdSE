class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.borrowed = false;
    }

    isBorrowed() {
        return this.borrowed;
    }
}

module.exports = Book;
