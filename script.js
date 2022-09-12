let bookTitle = document.getElementById('title').value;
let bookAuthor = document.getElementById('author').value;
let bookPages = document.getElementById('pages').value;
let bookStatus = document.querySelector('input[name="readStatus"]:checked').value;
let submitButton = document.getElementById('submit');
let libraryContainer = document.getElementById('container');

console.log(bookStatus)

let myLibrary = [];

function Book(title, author, pages, read) {
  let readStatus
  this.title = title 
  this.author = author
  this.pages = pages
  this.read = function() {
    if (read === true) {
      readStatus = 'already read'
    } else {
      readStatus = 'not read yet'
    }
  } 
  this.read()
  this.info = function() {
   console.log(`${title} by ${author}, ${pages} pages, ${readStatus}`);
}
}
let book1
submitButton.addEventListener('click', addBookToLibrary());

function addBookToLibrary() {
   book1 = new Book(bookTitle, bookAuthor, bookPages, false);
   myLibrary.push(book1)
// make button to prompt user input and add book to myLibrary array
// display every book in array on the page.
}
  book1.info();

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
theHobbit.info();
