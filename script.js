let bookTitle = document.getElementById('title').value;
let bookAuthor = document.getElementById('author').value;
let bookPages = document.getElementById('pages').value;
let bookStatus = document.querySelector('input[name="readStatus"]:checked').value;
let submitButton = document.getElementById('submit')

console.log(bookStatus)

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title 
  this.author = author
  this.pages = pages
  this.info = function() {
   console.log(`${title} by ${author}, ${pages} pages, ${this.read()}`);
}
  this.read = function() {
    if (read === true) {
      console.log('already read')
    } else {
      console.log('not read yet')
    }
  } 
}

submitButton.addEventListener('click', addBookToLibrary());

function addBookToLibrary() {
   const book1 = new Book(bookTitle, bookAuthor, bookPages, false);
// make button to prompt user input and add book to myLibrary array
// display every book in array on the page.
  book1.info();
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
theHobbit.info();
