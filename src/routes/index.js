const { Router } = require("express");

const router = Router();

const books = [];


router.get('/', (req, res) => {
    res.render('index.ejs',{
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
        title,
        author,
        image,
        description
    }


    books.push(req.body);
    res.send('Recibido...')
});
module.exports = router;
