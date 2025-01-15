let books = [];

function addBook(){
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const bookDescription = document.getElementById("bookDescription").value;
    const pagesNumber = parseInt(document.getElementById("pagesNumber").value);
    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book = {
            name: bookName,
            author : authorName,
            bookDescription : bookDescription,
            pagesNumber : pagesNumber
        };
        books.push(book);
        showBooks();
        clearInputs();
    }
    else{
        alert("Please fill in all fields correctly.");
    }
}

function showBooks(){
    const bookDiv = books.map((book, index) => 
        `<h1>book Number: ${index+1}</h1>
        <p><strong>Book Name : </strong> ${book.name}</p>
        <p><strong>Author Name : </strong> ${book.author}</p>
        <p><strong>Book Description : </strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages : </strong> ${book.pagesNumber}</p>`
    );
    document.getElementById("books").innerHTML = bookDiv.join("");

}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}