
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

function addBookToLibrary(title, author, year, pages, read) {
  createBook = new Book(title, author, year, pages, read);
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


    //Container for buttons
    const divBtns = document.createElement("div");
    divBtns.setAttribute("class", "button-container");
    divBook.appendChild(divBtns);

    //Toggle button for read/not
    const toggle = document.createElement("button");
    toggle.setAttribute("class", "toggle");
    toggle.setAttribute("id", myLibrary.indexOf(book));
    toggle.textContent = book.read;
    if (book.read === "Not Read") {
      toggle.style.backgroundColor = 'White';
      toggle.style.color = 'Indigo';
      toggle.style.border = '1px solid Indigo';
      toggle.textContent = 'Not Read';
    }
    divBtns.appendChild(toggle);

    //Toggle Read
    function toggleRead(id) {
      if (myLibrary[id].read === "Not Read") { //if form is seen hide it
        toggle.style.backgroundColor = 'Indigo';
        toggle.style.color = 'White';
        toggle.style.border = 'None';
        toggle.textContent = 'Read';
        myLibrary[id].read = "Read";

      } else {
        toggle.style.backgroundColor = 'White';
        toggle.style.color = 'Indigo';
        toggle.style.border = '1px solid Indigo';
        toggle.textContent = 'Not Read';
        myLibrary[id].read = "Not Read";
      }
    }

    toggle.addEventListener('click', (e) => {
      let id = e.target.id;
      console.log(myLibrary[id], myLibrary[id].read);
      toggleRead(id);
    });

    


    const btnRemove = document.createElement("button");
    btnRemove.setAttribute("id", myLibrary.indexOf(book));
    btnRemove.setAttribute("class", "remove-book");
    btnRemove.textContent = 'Remove';
    divBtns.appendChild(btnRemove);
    //Remove Books
    btnRemove.addEventListener("click", (e) => {
      books.removeChild(divBook);
      myLibrary.splice(+e.target.id, 1);
      });
  }
}

addBookToLibrary('Alexander Hamilton', 'Ron Chernow', 2004, 818, 'Not Read');
addBookToLibrary(`Harry Potter and the Philosopher's Stone`, 'JK Rowling', 1997, 223, 'Read');

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

addBookButton.addEventListener('click', () => toggleForm());

// Add Book
const submit = document.querySelector('.submit');
const input_title = document.querySelector('.input-title');
const input_author = document.querySelector('.input-author');
const input_year = document.querySelector('.input-year');
const input_pages = document.querySelector('.input-pages');
const input_read = document.getElementsByName('read');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  let choice;
  
  for (let i = 0; i < input_read.length; i++) {
    if (input_read[i].checked) {
      choice = input_read[i].value
    }
  }
  console.log(choice);
  addBookToLibrary(input_title.value, input_author.value, input_year.value, input_pages.value, choice);
  displayBooks();
  console.log(myLibrary);
  input_title.value = '';
  input_author.value = '';
  input_year.value = '';
  input_pages.value = '';
})

//Display Books
const display_books_button = document.querySelector('.display-books-button');

display_books_button.addEventListener('click', () => displayBooks());


