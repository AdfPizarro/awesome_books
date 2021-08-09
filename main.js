let bookList = [];
if (localStorage.getItem('bookList') === null) {
  bookList = [];
} else {
  bookList = JSON.parse(localStorage.getItem('bookList'));
}

function refresh() {
  const getBookList = document.getElementById('bookList');
  getBookList.innerHTML = '';
  for (let i = 0; i < bookList.length; i += 1) {
    const div = document.createElement('div');
    const title = document.createElement('h3');
    const author = document.createElement('h3');

    title.textContent = bookList[i].title;
    author.textContent = bookList[i].author;

    div.append(title);
    div.append(author);

    getBookList.appendChild(div);
  }
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

/* eslint-disable no-unused-vars */
function removeBook(index) {
  bookList = bookList.filter((_, i) => i !== index);
  localStorage.setItem('bookList', JSON.stringify(bookList));
  refresh();
}
/* eslint-enable no-unused-vars */
