function Library() {
    this.bookList = [];
};


Library.prototype.addBook = function (title, author, year) {
    let boo = new Book(title, author, year);
    this.bookList.push(boo);
    return boo;
};
Library.prototype.getBooks = function () {
    return library.bookList;
};


function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
};

let library = new Library();
library.addBook("Eloquent JavaScript 3rd Edition", "Marijn Haverbeke", 2018);
library.addBook("JavaScript", "Vasylyna", 1625);
console.log(library.getBooks());