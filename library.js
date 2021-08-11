class Library { // eslint-disable-line no-unused-vars
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
  }

  addBook(title, author) {
    this.bookList.push(new Book(title, author)); // eslint-disable-line no-undef
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }

  getBooks() {
    return this.bookList;
  }
}
