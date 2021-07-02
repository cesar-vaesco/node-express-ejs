const express = require("express");
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

let books = [];

const json_books = fs.readFileSync('src/books.json', 'utf-8');
books = JSON.parse(json_books);


router.get('/', (req, res) => {
    res.render('index.ejs', {
        books
    });
});

router.get('/new-entry', (req, res) => {
    res.render('new-entry.ejs');
});

router.post('/new-entry', (req, res) => {
    /* console.log(req.body); */
    // guardarm en el arreglo los datos que llegan del request
    const { title, author, image, description } = req.body;

    if (!title || !author || !image || !description) {
        res.status(400).send('La información enviada es incompleta');
    }

    let newBook = {
        id: uuidv4(),
        title,
        author,
        image,
        description
    }


    books.push(newBook);

    const json_books = JSON.stringify(books);
    fs.writeFileSync('src/books.json', json_books, 'utf-8');

    /* res.send('Recibido...') */
    res.redirect('/');
});
module.exports = router;


// https://www.youtube.com/watch?v=YiBDvtEP88M&t=1146s 1:00:36
