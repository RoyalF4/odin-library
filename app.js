const myLibrary = [
    {
        title: 'The Lion, the Witch and the Wardrobe',
        author: 'C.S. Lewis',
        pages: 112,
        read: 'no'
    },
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        pages: '225',
        read: 'yes'
    },
    {
        title: 'book 3',
        author: 'Royal Finch',
        pages: '69',
        read: 'no'
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
    addBookToTable(book);
}

const table = document.querySelector('tbody');

for(obj of myLibrary) {
    const row = document.createElement('tr');
    for(const property in obj) {
        const cell = document.createElement('td');
        cell.textContent = obj[property];
        row.appendChild(cell);
    }
    table.appendChild(row);
}

function addBookToTable(book) {
    const row = document.createElement('tr');
    for(const prop in book) {
        const cell = document.createElement('td');
        cell.textContent = book[prop];
        row.appendChild(cell);
    }
    table.appendChild(row);
}



const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('#close-modal')
const form = document.querySelector('form');

openModal.addEventListener('click', () => {
    form.reset();
    modal.showModal();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    console.log(obj)
    addBookToLibrary(obj);
    modal.close();
});


// to-do
// add radio button to read input


