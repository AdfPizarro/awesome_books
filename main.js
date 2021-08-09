var bookList= [];

class Book{
  constructor(title, author){
  this.title = title;
  this.author = author;
  
}
}

document.getElementById("addBook").addEventListener("click", add_book);

function add_book(){
var title = document.getElementById("bookTitle").value
var author = document.getElementById("bookAuthor").value
bookList.push(new Book(title, author))
console.log(bookList)
refresh()
}


function remove_book(arr, index) {
    console.log(arr.filter((_, i) => i !== index)) 
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