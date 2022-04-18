let myLibrary = [];

const addBtn = document.querySelector('.addBtn');
const form = document.querySelector('.formDisplay')
/*
a book contains a title, author, isbn, and number of pages
*/

class Book{
    constructor(title, author, isbn, numPages) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numPages = numPages;
}
}

myLibrary = [
    {
    title: "The Man",
    author: "Vince Mc",
    isbn: 0012,
    numPages: 430,
    }, {
        title: "Magi",
        author: "Suzuki",
        isbn: 0013,
        numPages: 385,
    },
];

// adding book to the library
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // form values
    const title = document.querySelector("bookTitle").value;
    const author = document.querySelector("bookAuthor").value;
    const isbn = document.querySelector("bookISBN").value;
    const pages = document.querySelector("bookPages").value;

    const book = new Book(title, author, isbn, pages);
    form.reset();
    myLibrary.push(book);
})

addBtn.addEventListener("click", () => {
    if(form.style.display === 'none'){
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
})

// Making the card
function addBookToLibrary(book){
const bookCardCont = document.querySelector(".book-cards");
const bookCont = document.createElement("div");
const bookTitle = document.createElement("span");

const authorCont = document.createElement("div");
const authorTitle = document.createElement("span");

const ISBNCont = document.createElement("div");
const ISBNnum = document.createElement("span");

const pagesCont = document.createElement("div");
const pagesNum = document.createElement("span");


bookCont.classList.add(".card-cont");
bookCont.setAttribute("id", myLibrary.indexOf(book));
bookTitle.textContent = "Book Title: ";
}
