class Dom { // eslint-disable-line no-unused-vars
  constructor() {
    this.getBookList = document.getElementById('bookList');
  }

  refresh(bookList) {
    this.getBookList.innerHTML = '';
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

      this.getBookList.appendChild(div);
    }
  }
}