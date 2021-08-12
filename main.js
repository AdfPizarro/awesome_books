const library = new Library();// eslint-disable-line no-undef
const dom = new Dom(); // eslint-disable-line no-undef

function removeElem() {
  const dltButtons = document.querySelectorAll('.delete');
  dltButtons.forEach((el) => el.addEventListener('click', (event) => { // eslint-disable-line no-unused-vars
    library.removeBook(parseInt(el.id, 10));
    dom.refresh(); // eslint-disable-line no-use-before-define
  }));
}

window.onload = () => {
  dom.refresh(library.getBooks());
  addNavListeners();
  removeElem();
};

function addBook() {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;
  library.addBook(title, author);
  dom.refresh(library.getBooks());
  removeElem();
}

function addNavListeners() {
  const navButtons = document.querySelectorAll('.navButton');
  navButtons.forEach((el) => el.addEventListener('click', (event) => { // eslint-disable-line no-unused-vars
    dom.show(el.id);// eslint-disable-line no-use-before-define
    switch (el.id) {
      case 'navAdd':
        document.getElementById('addBook').addEventListener('click', addBook);
        break;
      default:

    }

  }));
}
