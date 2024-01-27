const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let books = [];


app.post('/addBook', (req, res) => {
    const { title, author, Pyear } = req.body; 
    if (title && author && Pyear) {
        const newBook = { title, author, Pyear };
        books.push(newBook);
        res.json({ message: 'Book added successfully.', book: newBook });
    } else {
        res.status(400).json({ error: 'Title, author, and year are required.' });
    }
});


app.get('/getAllBooks', (req, res) => {
    res.json(books);
});


app.put('/updateBook/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const { title, author, Pyear } = req.body; 
    if (index >= 0 && index < books.length && title && author && Pyear) {
        books[index] = { title, author, Pyear };
        res.json({ message: 'Book updated successfully.', book: books[index] });
    } else {
        res.status(400).json({ error: 'Invalid index or missing data.' });
    }
});


app.delete('/deleteBook/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < books.length) {
        const deletedBook = books.splice(index, 1);
        res.json({ message: 'Book deleted successfully.', book: deletedBook[0] });
    } else {
        res.status(400).json({ error: 'Invalid index.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
