let library = {
    libraryContainer: document.getElementById('library-container'),
    searchResults: document.getElementById('search-results'),
    bookTitleInput: document.getElementById('book-title'),
    bookAuthorInput: document.getElementById('book-author'),
    searchTermInput: document.getElementById('search-term'),
    addBookButton: document.getElementById('add-book'),
    displayBooksButton: document.getElementById('display-books'),
    hideBooksButton: document.getElementById('hide-books'),
    searchButton: document.getElementById('search-book')
};

function displayBooks() {

    library.libraryContainer.style.display = "block";
    library.libraryContainer.innerHTML = '';

    for (let i = 0; i < books.length; i++) {
        library.libraryContainer.innerHTML += `
            <div class="book">
                <h2>${books[i].title}</h2>
                <p>${books[i].author}</p>
            </div>
        `;

    }
}

// Book constructor
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

// Array to store books
let books = [];

library.addBookButton.addEventListener('click', function () {
    let title = library.bookTitleInput.value;
    let author = library.bookAuthorInput.value;

    if (title && author) {
        let newBook = new Book(title, author);
        books.push(newBook);
        displayBooks();
    }
});

library.searchButton.addEventListener('click', function () {
    //console.log(library);

    let searchTerm = library.searchTermInput.value.toLowerCase();
    library.searchResults.innerHTML = '';

    //let searchResults = document.getElementById('search-results');
    //searchResults.innerHTML = '';

    let filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );

    for (let i = 0; i < filteredBooks.length; i++) {
        library.searchResults.innerHTML += `
            <div class="book">
                <h2>${filteredBooks[i].title}</h2>
                <p>${filteredBooks[i].author}</p>
            </div>
        `;
    }
});

library.displayBooksButton.addEventListener('click', displayBooks);

library.hideBooksButton.addEventListener('click', function () {
    library.libraryContainer.style.display = "none";
})