class Dom { // eslint-disable-line no-unused-vars
  constructor() {
    this.container = document.getElementById('container');
  }

  refresh(bookList) {
    const getBookList = document.getElementById('bookList');
    getBookList.innerHTML = '';
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
      default:
    }
  }

  drawForm() {
    const div = document.createElement('div');
    const form = document.createElement('form');
    const formDiv = document.createElement('formDiv');
    const inputTitle = document.createElement('input');
    const inputAuthor = document.createElement('input');
    const button = document.createElement('button');

    div.setAttribute('class', 'frame');
    inputTitle.setAttribute('id', 'bookTitle');
    inputAuthor.setAttribute('id', 'bookAuthor');

    inputTitle.setAttribute('placeholder', 'Title');
    inputAuthor.setAttribute('placeholder', 'Author');

    button.setAttribute('id', 'addBook');
    button.textContent = 'Add';

    formDiv.append(inputTitle);
    formDiv.append(inputAuthor);

    form.append(formDiv);
    form.append(button);

    div.append(form);

    this.container.append(div);
  }

  drawContact(){
    let div = document.createElement("div");
    div.id = "Contact-info";

    let h2 = document.createElement("h2");
    h2.textContent = "Contact Information";
    div.appendChild(h2);

    let p = document.createElement("p");
    p.textContent = "Do have any question or your want to say 'Hello'? \n You can reach out to us!";

    let ul = document.createElement('ul')
    ul.id = "contactInformation";

    let li1 = document.createElement("li");
    li1.textContent = "Our email: mail@mail.com";
    ul.appendChild(li1)

    let li2 = document.createElement("li");
    li2.textContent = "Our phone number: 0043586656585";
    ul.appendChild(li2);

    let li3 = document.createElement("li");
    li3.textContent = "Our address: Streetname 22, 76545 City, Country";
    ul.appendChild(li3);

    div.appendChild(p);
    div.appendChild(ul);

    this.container.append(div);
  }
}
