const myLibrary = [
    // {
    //     title: 'The Lion, the Witch and the Wardrobe',
    //     author: 'C.S. Lewis',
    //     pages: 112,
    //     read: 'No'
    // },
    // {
    //     title: 'Harry Potter',
    //     author: 'J.K. Rowling',
    //     pages: '225',
    //     read: 'Yes'
    // },
    // {
    //     title: 'book 3',
    //     author: 'Royal Finch',
    //     pages: '69',
    //     read: 'No'
    // }
];

function Book(title, author, pages, isbn) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isbn = isbn;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    addBookToTable(myLibrary);
}

const table = document.querySelector('tbody');

// create delete button for books
function createDeleteButton(row) {
    const deleteBtn = document.createElement('button');
    const cell = document.createElement('td');

    deleteBtn.textContent = 'Remove';
    deleteBtn.addEventListener('click', () => {
        table.deleteRow(row.getAttribute('data-index'));
        fixIndexAfterDelete();
    })
    cell.appendChild(deleteBtn);
    row.appendChild(cell);
}

// fix row index after deletion
function fixIndexAfterDelete() {
    const rows = document.querySelectorAll('tbody>tr');
    rows.forEach((row, index) => {
        row.setAttribute('data-index', index)
    })
}


function addBookToTable(myLibrary) {
    const book = myLibrary[myLibrary.length - 1];

    const row = document.createElement('tr');
    row.setAttribute('data-index', myLibrary.length - 1);

    for(const prop in book) {
        const cell = document.createElement('td');

        if(prop == 'read') {
            const button = document.createElement('button');
            const span = document.createElement('span');

            button.classList.add('toggle');
            button.textContent = 'Toggle';
            button.addEventListener('click', () => {
                if(span.textContent == 'Yes') {
                    span.textContent = 'No';
                }
                else {
                    span.textContent = 'Yes';
                }
            })
            span.textContent = book[prop];
            row.appendChild(cell);
            cell.appendChild(span);
            cell.appendChild(button);

        }
        else {
            cell.textContent = book[prop];
            row.appendChild(cell);
        }
    }
    createDeleteButton(row)
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
    addBookToLibrary(obj);
    modal.close();
});




