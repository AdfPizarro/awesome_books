var bookList= [];

const Book = (title, author)=> ({
  title, author
});

document.getElementById("addBook").addEventListener("click", function(){
  var author=document.getElementById("bookAuthor").value;
  var title=document.getElementById("bookTitle").value;

  bookList.push(Book(title, author));
  console.log(bookList)
  draw()
});

function remove(bookId) {
  bookList.splice(bookId, 1);
  console.log(bookList);
}
