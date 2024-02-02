const myLibrary = [
    {
        title: 'The Lion, the Witch and the Wardrobe',
        author: 'C.S. Lewis',
        pages: 112,
        isbn: '9781350275515'
    },
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        pages: 225,
        isbn: '3423443243253'
    },
    {
        title: 'book 3',
        author: 'Royal Finch',
        pages: 69,
        isbn: '343243252532'
    }
];

function Book(title, author, pages, isbn) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isbn = isbn;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const table = document.querySelector('tbody');

// for(let i = 1; i <= myLibrary.length; i++) {
//     const row = table.insertRow(-1);
//     row.appendChild('td').textContent = 'test'
// }

for(obj of myLibrary) {
    const row = document.createElement('tr');
    for(const property in obj) {
        const cell = document.createElement('td');
        cell.textContent = obj[property];
        row.appendChild(cell);
    }
    table.appendChild(row);
}


// const table = document.querySelector('tbody');

//  const row = table.insertRow(1);

//  row.insertCell(0).innerHTML='hello';