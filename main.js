
const newBookButton = document.querySelector("#newBook");
const popUp = document.querySelector("#popupForm");
newBookButton.addEventListener("click",function(){
    popUp.style.display = "block";
});

const close = document.querySelector("#close_button");
close.addEventListener("click", function() {
   popUp.style.display = "none";
});

class Book{
   constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
   }
}

let myLibrary = [];
function addBookToLibrary(title,author,pages,read) {
    newBook = new Book (title, author, pages, read);
   myLibrary.push(newBook);
}

function displayBooks() {
   let libraryShelf = document.querySelector("#library_shelf");
   libraryShelf.innerHTML = "";

   for(let i = 0; i < myLibrary.length; i++){
      let bookCard = document.createElement('div');
      bookCard.classList.add('book_card');

      let bookTitle = document.createElement('h3');
      bookTitle.textContent = `Title: ${myLibrary[i].title}`;

      let bookAuthor = document.createElement('p');
      bookAuthor.textContent = `Author: ${myLibrary[i].author}`;

      let bookPages = document.createElement('p');
      bookPages.textContent = `Pages: ${myLibrary[i].pages}`;

      let readButton = document.createElement('button');
      readButton.classList.add('read_button');
      readButton.textContent = 'Read Status';

      let removeButton = document.createElement('button');
      removeButton.classList.add('remove_button');
      removeButton.textContent = 'Remove';


      bookCard.appendChild(bookTitle);
      bookCard.appendChild(bookAuthor);
      bookCard.appendChild(bookPages);
      bookCard.appendChild(readButton);
      bookCard.appendChild(removeButton);

      libraryShelf.appendChild(bookCard);

      readButton.addEventListener("click", function(){
         if (readButton.textContent === "Read") {
            readButton.textContent = "Not Read";
            readButton.style.backgroundColor = "#fde047"
         } else {
            readButton.textContent = "Read";
            readButton.style.backgroundColor = "#a78bfa";
         }
      })

      removeButton.addEventListener("click", function() {
         bookCard.remove();
         myLibrary.splice(myLibrary.indexOf(bookCard),1);
      });
   }
}

const form = document.querySelector("#myform");
const addButton = document.querySelector('#add_button');
addButton.addEventListener('click', function (event) {
   event.preventDefault();
   let title = document.querySelector('#title').value;
   let author = document.querySelector('#author').value;
   let pages = document.querySelector('#pages').value;
   let read = document.querySelector('#read').checked;
   
   addBookToLibrary(title,author,pages,read);
   displayBooks();
   popUp.style.display = "none";
   form.reset();
});

newBookButton.addEventListener("click", function(event){
   event.preventDefault();
       popUp.style.display = 'block';
});

