let bookList = [];
if (localStorage.getItem('bookList') === null) {
  bookList = [];
} else {
  bookList = JSON.parse(localStorage.getItem('bookList'));
}

function removeBook(index) {
  bookList = bookList.filter((_, i) => i !== index);
  localStorage.setItem('bookList', JSON.stringify(bookList));
  refresh();// eslint-disable-line no-use-before-define
}

function refresh() {
  const getBookList = document.getElementById('bookList');
  getBookList.innerHTML = '';
  for (let i = 0; i < bookList.length; i += 1) {
    const div = document.createElement('div');
    const title = document.createElement('h3');
    const author = document.createElement('h3');
    const button = document.createElement('button');

    title.textContent = bookList[i].title;
    author.textContent = bookList[i].author;
    button.textContent = 'Delete';
    button.setAttribute('id', i);
    button.setAttribute('class', 'delete');

    div.append(title);
    div.append(author);
    div.append(button);

    getBookList.appendChild(div);
  }

  const dltButtons = document.querySelectorAll('.delete');
  dltButtons.forEach((el) => el.addEventListener('click', (event) => { // eslint-disable-line no-unused-vars
    removeBook(parseInt(el.id, 10));
  }));
}

window.onload = function () {
  refresh();
};

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function addBook() {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;
  bookList.push(new Book(title, author));
  localStorage.setItem('bookList', JSON.stringify(bookList));
  refresh();
}

document.getElementById('addBook').addEventListener('click', addBook);
