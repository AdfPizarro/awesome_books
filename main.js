const library = new Library();// eslint-disable-line no-undef
const dom = new Dom(); // eslint-disable-line no-undef

function removeElem() {
  const dltButtons = document.querySelectorAll('.delete');
  dltButtons.forEach((el) => el.addEventListener('click', (event) => { // eslint-disable-line no-unused-vars
    library.removeBook(parseInt(el.id, 10));
    dom.refresh(); // eslint-disable-line no-use-before-define
  }));
}

function bookList() {
  return library.getBooks();
}
window.onload = () => {
  dom.refresh(bookList());
  removeElem();
};

function addBook() {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;
  library.addBook(title, author);
  dom.refresh(bookList());
  removeElem();
}

document.getElementById('addBook').addEventListener('click', addBook);
