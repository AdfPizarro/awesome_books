class Dom { // eslint-disable-line no-unused-vars
  constructor() {
    this.getBookList = document.getElementById('bookList');
  }

  refresh(bookList) {
    this.getBookList.innerHTML = '';
    for (let i = 0; i < bookList.length; i += 1) {
      const div = document.createElement('div');
      const bookInfo = document.createElement('div');
      const title = document.createElement('h3');
      const author = document.createElement('h3');
      const button = document.createElement('button');
      const span = document.createElement('span');

      title.textContent = bookList[i].title;
      author.textContent = bookList[i].author;
      span.textContent = ' by ';
      bookInfo.setAttribute('class', 'bookInfo');
      button.textContent = 'Delete';
      button.setAttribute('id', i);
      div.setAttribute('class', 'book');
      button.setAttribute('class', 'delete');

      bookInfo.append(title);
      bookInfo.append(span);
      bookInfo.append(author);

      div.append(bookInfo);

      div.append(button);

      this.getBookList.appendChild(div);
    }
  }
}
