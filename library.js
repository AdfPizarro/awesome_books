class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.bookList = [];
    if (localStorage.getItem('bookList') === null) {
      this.bookList = [];
    } else {
      this.bookList = JSON.parse(localStorage.getItem('bookList'));
    }
  }

  removeBook(index) {
    this.bookList = this.bookList.filter((_, i) => i !== index);
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
    refresh();// eslint-disable-line no-use-before-define
  }

  addBook(title, author) {
    this.bookList.push(new Book(title, author));
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
    refresh();
  }

  getBooks(){
    return this.bookList;
  }

}
