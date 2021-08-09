var bookList= [];
if (localStorage.getItem('bookList') === null) {
  bookList = [];
} else {
  bookList = JSON.parse(localStorage.getItem('bookList'));
}



window.onload = function() {
  refresh();
};



class Book{
  constructor(title, author){
  this.title = title;
  this.author = author;
  }
}

function addBook(){
    let title = document.getElementById("bookTitle").value
    let author = document.getElementById("bookAuthor").value
    bookList.push(new Book(title, author))
    localStorage.setItem('bookList', JSON.stringify(bookList));
    refresh()
}


document.getElementById("addBook").addEventListener("click", addBook);



function removeBook(arr, index) {
    console.log(arr.filter((_, i) => i !== index))
    localStorage.setItem('bookList', JSON.stringify(bookList));
    refresh()
}

function refresh(){

   var get_bookList = document.getElementById("bookList")
   get_bookList.innerHTML = ''
   for(let i = 0; i < bookList.length; i ++){
   var div = document.createElement("div");
   var title = document.createElement('h3');
   var author = document.createElement('h3');

   title.textContent = bookList[i].title ;
   author.textContent = bookList[i].author;

   div.append(title);
   div.append(author);

   get_bookList.appendChild(div)

   }

}
