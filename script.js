
// Overall

const myLibrary = [];
const books = document.querySelector(".books");

function Book(title, author, year, pages, read) {
  this.title = title,
  this.author = author,
  this.year = year,
  this.pages = pages,
  this.read = read
}

function addBookToLibrary(title, author, year, pages, Boolean) {
  createBook = new Book(title, author, year, pages, Boolean);
  myLibrary.push(createBook); 
}

function displayBooks() {

  for (const book of myLibrary) {
    const divBook = document.createElement("div");
    divBook.setAttribute("class", "book");
    books.appendChild(divBook);

    const divTitle = document.createElement("div");
    divTitle.setAttribute("class", "book-title");
    divTitle.textContent = book.title;
    divBook.appendChild(divTitle);

    const divAuthor = document.createElement("div");
    divAuthor.setAttribute("class", "book-author");
    divAuthor.textContent = 'Author: ' + book.author;
    divBook.appendChild(divAuthor);

    const divYear = document.createElement("div");
    divYear.setAttribute("class", "book-year");
    divYear.textContent = 'Released: ' + book.year;
    divBook.appendChild(divYear);

    const divPages = document.createElement("div");
    divPages.setAttribute("class", "book-pages");
    divPages.textContent = 'Pages: ' + book.pages;
    divBook.appendChild(divPages);

    const divRead = document.createElement("div");
    divRead.setAttribute("class", "book-pages");
    divRead.textContent = 'Read: ' + book.read;
    divBook.appendChild(divRead);
  }
}

// Toggle Book Form 

const addBookButton = document.querySelector('.add-book-button');
const form = document.querySelector('.form');


function toggleForm() {
  if (form.style.display === 'block') { //if form is seen hide it
    form.style.display = 'none';
    addBookButton.style.backgroundColor = 'Indigo';
    addBookButton.style.color = 'White';
    addBookButton.style.border = 'None';

  } else {
    form.style.display = 'block';
    addBookButton.style.backgroundColor = 'White';
    addBookButton.style.color = 'Indigo';
    addBookButton.style.border = '1px solid Indigo';
  }
}

addBookButton.addEventListener('click', () => {
  toggleForm();
});

// Add Book
const submit = document.querySelector('.submit');
const input_title = document.querySelector('.input-title');
const input_author = document.querySelector('.input-author');
const input_year = document.querySelector('.input-year');
const input_pages = document.querySelector('.input-pages');
const input_read = document.querySelector('.input-read');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(input_title.value, input_author.value, input_year.value, input_pages.value, input_read.value);
  // let createBook = new Book(input_title.value, input_author.value, input_year.value, input_pages.value, input_read.value);
  // myLibrary.push(createBook);
  addBookToLibrary(input_title.value, input_author.value, input_year.value, input_pages.value, input_read.value);
  
  displayBooks();
  console.log(myLibrary);
})