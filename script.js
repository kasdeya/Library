let bookTitle = document.getElementById('title').value;
let bookAuthor = document.getElementById('author').value;
let bookPages = document.getElementById('pages').value;
let bookStatus = document.querySelector('input[name="readStatus"]:checked').value;
let submitButton = document.getElementById('submit');
let libraryContainer = document.getElementById('container');

/* console.log(bookStatus) */

let myLibrary = [];

function Book(title, author, pages, read, readStatus) {
  /* this.readStatus */
  this.title = title 
  this.author = author
  this.pages = pages
  this.read = function() {
    if (bookStatus == 'read') {
      this.readStatus = 'already read'
    } else if (bookStatus == 'reading') {
      this.readStatus = 'reading'
    } else {
      this.readStatus = 'not read yet'
    }
  } 
  this.read()
  this.info = function() {
   console.log(`${title} by ${author}, ${pages} pages, ${readStatus}`);

   return `${title} by ${author}, ${pages} pages, ${readStatus}`;
}
}

submitButton.addEventListener('click', () => {
 bookTitle = document.getElementById('title').value;
 bookAuthor = document.getElementById('author').value;
 bookPages = document.getElementById('pages').value;
 bookStatus = document.querySelector('input[name="readStatus"]:checked').value;
  /* let bookPrint = document.createElement("div") */
  /* libraryContainer.innerText = `${myLibrary[0].info()}`; */
  libraryContainer.innerText = ''
   myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, false));
  for (let i = 0; i < myLibrary.length; i++) {
/* let book_i */
  /* book1.info(); */
   /* book_i = new Book(bookTitle, bookAuthor, bookPages, false); */
   /* myLibrary.push(book_i) */
   /* myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, false)); */
    let cell_i = document.createElement("div");
    let cellTitle_i = document.createElement("h2");
    let cellAuthor_i = document.createElement("h3");
    let cellPages_i = document.createElement("h3");
    let cellStatus_i = document.createElement("h3");
    let removeButton_i = document.createElement("button");
    removeButton_i.innerText = 'Remove'
    libraryContainer.appendChild(cell_i).className = "library-item";
    cell_i.appendChild(cellTitle_i).classname = "item-title";
    cell_i.appendChild(cellAuthor_i).classname = "item-author";
    cell_i.appendChild(cellPages_i).classname = "item-pages";
    cell_i.appendChild(cellStatus_i).classname = "item-status";
    cell_i.appendChild(removeButton_i).classname = "remove-button";
    cellTitle_i.innerText = `${myLibrary[i].title}`
    cellAuthor_i.innerText = `${myLibrary[i].author}`
    cellPages_i.innerText = `${myLibrary[i].pages}`
    cellStatus_i.innerText = `${myLibrary[i].readStatus}`
    /* cell.innerText = `${myLibrary[i].info()}`; */
    removeButton_i.addEventListener('click', () => {
      myLibrary = myLibrary.filter(data => data.title != cellTitle_i.innerText)
      cell_i.innerText = ''
    });
  }
});

  // function removeBookFromLibrary(title, author, pages, status) {
  //   title.innerText = ''
  //   author.innerText = ''
  //   pages.innerText = ''
  //   status.innerText = ''
  // }

function addBookToLibrary() {
   /* book1 = new Book(bookTitle, bookAuthor, bookPages, false); */
   /* myLibrary.push(book1) */
// make button to prompt user input and add book to myLibrary array
// display every book in array on the page.
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
theHobbit.info();
