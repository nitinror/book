document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const bookList = document.getElementById('bookList');

    function addBook() {
        const title = document.getElementById('title').value;
        const author = document.getElementById('Author').value;
        const publicationYear = document.getElementById('Pyear').value;

        if (title && author && publicationYear) {
            const newBook = { title, author, publicationYear };
            addBookToTable(newBook);
            clearForm();
        } else {
            alert('Please fill in all fields.');
        }
    }

    function addBookToTable(book) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.publicationYear}</td>`;
        bookList.appendChild(newRow);
    }

    function clearForm() {
        form.reset();
    }

    function updateBook() {
        console.log('Updating book...');
    }

    function fetchDetails() {
        console.log('Fetching details...');
    }

    function deleteBooks() {
        console.log('Deleting books...');
    }

    document.getElementById('addBookBtn').addEventListener('click', addBook);
    document.getElementById('updateBtn').addEventListener('click', updateBook);
    document.getElementById('fetchDetailsBtn').addEventListener('click', fetchDetails);
    document.getElementById('deleteBtn').addEventListener('click', deleteBooks);
});
