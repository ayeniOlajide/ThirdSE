const Book = require('./models/book');
const User = require('./models/user');
const Library = require('./models/library');

const library = new Library();

// Add some initial books
const book1 = new Book('Chamber of Secrets', 'J. K. Rowling', '1234567890');
const book2 = new Book('The Lord of the Rings', ' J. R. R. Tolkien', '1234567891');
const book3 = new Book('A Game of Thrones ', 'George R.R. Martin', '1234567892');

library.addNewBook(book1);
library.addNewBook(book2);
library.addNewBook(book3);

// Register some initial users
const user1 = new User('Davido', 'U001');
const user2 = new User('Wizkid', 'U002');

library.registerMember(user1);
library.registerMember(user2);

// Borrow and return books
library.borrowBook('U001', '1234567890'); // Davido borrows Chamber of Secrets
library.borrowBook('U002', '1234567891'); // Wizkid borrows The Lord of the Rings

console.log(library.getBookInfo('1234567890')); // Info about Chamber of Secrets
console.log(library.getBookInfo('1234567891')); // Info about The Lord of the Rings

console.log(user1.getBorrowedBooks()); // Davido's borrowed books
console.log(user2.getBorrowedBooks()); // Wizkid's borrowed books

library.returnBook('U001', '1234567890'); // Davido returns Chamber of Secrets
console.log(user1.getBorrowedBooks()); // Davido's borrowed books after return

console.log(library.getUserBorrowedBooks('U001')); // Davido's borrowed books after return
console.log(library.getUserBorrowedBooks('U002')); // Wizkid's borrowed books
