
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

  while (books.firstChild) {
    books.removeChild(books.firstChild);
  }

  for (const book of myLibrary) {
    const divBook = document.createElement("div");
    divBook.setAttribute("class", "book");
    books.appendChild(divBook);

    const book_content = document.createElement("div");
    book_content.setAttribute("class", "book-content");
    divBook.appendChild(book_content);

    const divTitle = document.createElement("div");
    divTitle.setAttribute("class", "book-title");
    divTitle.textContent = book.title;
    book_content.appendChild(divTitle);

    const divAuthor = document.createElement("div");
    divAuthor.setAttribute("class", "book-author");
    divAuthor.textContent = 'Author: ' + book.author;
    book_content.appendChild(divAuthor);

    const divYear = document.createElement("div");
    divYear.setAttribute("class", "book-year");
    divYear.textContent = 'Released: ' + book.year;
    book_content.appendChild(divYear);

    const divPages = document.createElement("div");
    divPages.setAttribute("class", "book-pages");
    divPages.textContent = 'Pages: ' + book.pages;
    book_content.appendChild(divPages);

    const divRead = document.createElement("div");
    divRead.setAttribute("class", "book-pages");
    divRead.textContent = 'Read: ' + book.read;
    book_content.appendChild(divRead);

    const btnRemove = document.createElement("button");
    btnRemove.setAttribute("id", myLibrary.indexOf(book));
    btnRemove.setAttribute("class", "remove-book");
    btnRemove.textContent = 'Remove';
    divBook.appendChild(btnRemove);
    //Remove Books
    btnRemove.addEventListener("click", (e) => {
      console.log(e.target.id);
      console.log(document.getElementById(e.target.id));
      let remove = document.getElementById(e.target.id);
      books.removeChild(remove);
      
});
  }
}

addBookToLibrary('Alexander Hamilton', 'Ron Chernow', 2004, 818, 'False');
addBookToLibrary(`Harry Potter and the Philosopher's Stone`, 'JK Rowling', 1997, 223, 'True');

// Toggle Book Form 

const addBookButton = document.querySelector('.add-book-button');
const form = document.querySelector('.form');


function toggleForm() {
  if (form.style.display === 'block') { //if form is seen hide it
    form.style.display = 'none';
    addBookButton.style.backgroundColor = 'Indigo';
    addBookButton.style.color = 'White';
    addBookButton.style.border = 'None';
    addBookButton.textContent = 'Add Book';

  } else {
    form.style.display = 'block';
    addBookButton.style.backgroundColor = 'White';
    addBookButton.style.color = 'Indigo';
    addBookButton.style.border = '1px solid Indigo';
    addBookButton.textContent = 'Close';
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
  addBookToLibrary(input_title.value, input_author.value, input_year.value, input_pages.value, input_read.value);
  displayBooks();
  console.log(myLibrary);
  input_title.value = '';
  input_author.value = '';
  input_year.value = '';
  input_pages.value = '';
  input_read.value = '';
})

//Display Books
const display_books_button = document.querySelector('.display-books-button');

display_books_button.addEventListener('click', () => displayBooks());

