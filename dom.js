class Dom { // eslint-disable-line no-unused-vars
  constructor() {
    this.container = document.getElementById('container');
  }

  refresh(bookList) {
    const getBookList = document.createElement('bookList');
    getBookList.setAttribute('id', 'bookList');
    getBookList.setAttribute('class', 'bookList');
    const pageTitle = document.createElement('h3');
    pageTitle.textContent = 'All Awesome Books';
    this.container.appendChild(pageTitle);
    this.container.appendChild(getBookList);

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
      getBookList.appendChild(div);
    }
  }

  show(section) {
    this.container.innerHTML = '';
    switch (section) {
      case 'navAdd':
        this.drawForm();
        break;
      case 'navContact':
        this.drawContact();
        break;
      case 'navBookList':
        this.refresh(library.getBooks()); // eslint-disable-line no-undef
        break;
      default:
    }
  }

  drawForm() {
    const div = document.createElement('div');
    const form = document.createElement('form');
    const formDiv = document.createElement('div');
    const inputTitle = document.createElement('input');
    const inputAuthor = document.createElement('input');
    const button = document.createElement('button');

    const divAuthor = document.createElement('div');
    const divTitle = document.createElement('div');

    const h2 = document.createElement('h2');

    h2.textContent = 'Add a new Book';

    div.setAttribute('class', 'frame');
    inputTitle.setAttribute('id', 'bookTitle');
    inputAuthor.setAttribute('id', 'bookAuthor');

    inputTitle.setAttribute('placeholder', 'Title');
    inputAuthor.setAttribute('placeholder', 'Author');

    inputTitle.setAttribute('class', 'input');
    inputAuthor.setAttribute('class', 'input');

    button.setAttribute('id', 'addBook');
    button.textContent = 'Add';

    divAuthor.append(inputAuthor);
    divTitle.append(inputTitle);

    formDiv.append(divAuthor);
    formDiv.append(divTitle);

    form.append(formDiv);
    form.append(button);

    div.append(h2);

    div.append(form);

    this.container.append(div);
  }

  drawContact() {
    const div = document.createElement('div');
    div.id = 'Contact-info';

    const h2 = document.createElement('h2');
    h2.textContent = 'Contact Information';
    h2.setAttribute('class', 'contactTitle');
    div.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = "Do have any question or your want to say 'Hello'? \n You can reach out to us!";

    const ul = document.createElement('ul');
    ul.id = 'contactInformation';

    const li1 = document.createElement('li');
    li1.textContent = 'Our email: mail@mail.com';
    ul.appendChild(li1);

    const li2 = document.createElement('li');
    li2.textContent = 'Our phone number: 0043586656585';
    ul.appendChild(li2);

    const li3 = document.createElement('li');
    li3.textContent = 'Our address: Streetname 22, 76545 City, Country';
    ul.appendChild(li3);

    div.appendChild(p);
    div.appendChild(ul);

    this.container.append(div);
  }
}
