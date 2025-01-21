
const myLibrary = [];

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
  
  console.table(myLibrary);
  for (const book of myLibrary) {
    console.table(book);
  }
}

addBookToLibrary('On the Beach', "Nevil Shute", 1958, 312, 'True');
addBookToLibrary('The Fellowship of the Ring', "John Ronald Reuel Tolkien", 1954, 423, 'True');
displayBooks();