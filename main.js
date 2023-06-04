
const newBookButton = document.querySelector("#newBook");
const popUp = document.querySelector("#popupForm");
newBookButton.addEventListener("click",function(){
   if (popUp.style.display === 'none') {
    popUp.style.display = 'block';
   } else {
    popUp.style.display = 'none';
   }
});

function Book(title, author, pages, read) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
}

let myLibrary = [];

function addBookToLibrary(title,author,pages,read) {
   let newBook = new Book (title, author, pages, read);
   myLibrary.push(newBook);
}

function displayBooks() {
   let libraryShelf = document.querySelector("#library_shelf");
   libraryShelf.innerHTML = "";

   for(let i = 0; i < myLibrary.length; i++){
      let bookCard = document.createElement('div');
      bookCard.idList.add('book_card');

      let bookTitle = document.createElement('h3');
      bookTitle.textContent = 'Title: ${myLibrary[i].title}';

      let bookAuthor = document.createElement('p');
      bookAuthor.textContent = 'Author: ${myLibrary[i].author}';

      let bookPages = document.createElement('p');
      bookPages.textContent = 'Pages: ${myLibrary[i].pages}';

      let readButton = document.createElement('button');
      readButton.idList.add('read_button');
      readButton.textContent = 'Read Status';

      let removeButton = document.createElement('button');
      removeButton.idList.add('remove_button');
      removeButton.textContent = 'Remove';


      bookCard.appendChild(bookTitle);
      bookCard.appendChild(bookAuthor);
      bookCard.appendChild(bookPages);
      bookCard.appendChild(bookRead);
      bookCard.appendChild(readButton);
      bookCard.appendChild(removeButton);

      libraryShelf.appendChild(bookCard);
   }
}