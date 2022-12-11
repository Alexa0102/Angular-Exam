const {getAllBooks, addBook, getOneBook, editBook} = require('../services/bookService');

const router = require('express').Router();




router.post('/', async (req, res) => {
    const data = req.body;
    try {
        const book = await addBook(data)
        res.status(201).json(book)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get('/', async (req, res) => {
    const books = await getAllBooks()
    res.status(200).json(books)
})
// router.get('/most', async (req, res) => {
//     const cars = await getTop3Cars()
//     res.status(200).json(cars)
// })

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const book = await getOneBook(id);
    res.status(200).json(book)
})
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        await editBook(id, data)
        const updateBook = await getOneBook(id)
        res.status(200).json(updateBook)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})
module.exports = router;