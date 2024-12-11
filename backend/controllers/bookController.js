const Book = require('../models/Book');

exports.addBook = async (req, res) => {
    const { title, author, publishedDate, numberOfPages } = req.body;
    const newBook = new Book({ title, author, publishedDate, numberOfPages });
    await newBook.save();
    res.status(201).json(newBook);
};

exports.getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};

exports.getBookById = async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
};

exports.updateBook = async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.json(updatedBook);
};

exports.deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
};