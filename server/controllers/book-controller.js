/* eslint-disable no-undef, arrow-body-style */
const Book = require('../models/book-model');

getBooks = async (req, res) => {
    await Book.find({}, (err, books) => {
        if (err) {
            console.error(`[Hack.Diversity React Template] - 400 in 'getBooks': ${err}`);
            return res
                .status(400)
                .json({
                    success: false,
                    error: err,
                });
        }
        if (!books.length) {
            console.error(`[Hack.Diversity React Template] - 404 in 'getBooks': Books not found`);
            return res
                .status(404)
                .json({
                    success: false,
                    error: 'Books not found',
                });
        }
        console.log(`[Hack.Diversity React Template] - 200 in 'getBooks': Books fetched!`);
        return res
            .status(200)
            .json({
                success: true,
                books: books,
            });
    }).catch(err => {
        console.error(`[Hack.Diversity React Template] - caught error in 'getBooks': ${err}`);
        console.error(err);
        return res
            .status(404)
            .json({
                success: false,
                error: err
            });
    });
};

getBookById = async (req, res) => {
    await Book.find({ _id: req.params.id }, (err, books) => {
        if (err) {
            console.error(`[Hack.Diversity React Template] - 400 in 'getBookById': ${err}`);
            throw res
                .status(400)
                .json({
                    success: false,
                    error: err,
                });
        }
        if (!books.length) {
            console.error(`[Hack.Diversity React Template] - 404 in 'getBookById': Book not found`);
            return res
                .status(404)
                .json({
                    success: false,
                    error: 'Book not found',
                });
        }
        console.log(`[Hack.Diversity React Template] - 200 in 'getBookById': Book fetched!`);
        return res
            .status(200)
            .json({
                success: true,
                book: books[0],
            });
    }).catch(err => {
        console.error(`[Hack.Diversity React Template] - caught error in 'getBookById': ${err}`);
        console.error(err);
        return err;
    });
};


const createBook = async (req, res, next) => {
    const { title, author, publication_year, isbn, copies } = req.body;
    const createdBook = new Book({
        title,
        author,
        publication_year,
        isbn,
        copies 
    });
  
    try {
      await createdBook.save();
    } catch (err) {
      return new error;
    }
  
    // res.json({ book: createdBook.toObject() });
    res.json({ book: createdBook });
  };


// createBook = (req, res) => {
//     const body = req.body;
//     // console.log('----------------------- createBook: req -----------------------')
//     // console.log(req);
//     // console.log('----------------------- createBook: body -----------------------')
//     // console.log(body);

//     if (!body) {
//         return res
//             .status(400)
//             .json({
//                 success: false,
//                 error: 'You must provide an book.',
//             });
//     }

//     const book = new Book(body);

//     if (!book) {
//         console.error(`[Hack.Diversity React Template] - 400 in 'createBook': 'book' is malformed.`);
//         return res
//             .status(400)
//             .json({
//                 success: false,
//                 message: "'book' is malformed"
//             });
//     }

//     // console.log('----------------------- createBook: book -----------------------')
//     // console.log(book);

//     return book
//         .save()
//         .then(() => {
//             console.error(`[Hack.Diversity React Template] - 201 in 'createBook': Book created!`);
//             return res
//                 .status(201)
//                 .json({
//                     success: true,
//                     id: book._id,
//                     message: 'Book created!',
//                 });
//         })
//         .catch(err => {
//             console.error(`[Hack.Diversity React Template] - caught error in 'createBook': ${err.errors.name}`);
//             Object.keys(err.errors).forEach(errorKey => {
//                 console.error(`ERROR for: ${errorKey}`);
//                 console.error(`=> ${((err.errors[errorKey] || {}).properties || {}).message}`);
//             })
//             return res
//                 .status(400)
//                 .json({
//                     success: false,
//                     error: err.errors,
//                     message: err.errors.name,
//                 });
//         });
// };








updateBook = (req, res) => {
    const body = req.body;
    // console.log('----------------------- updateBook: req -----------------------');
    // console.log(req);
    // console.log('----------------------- updateBook: body -----------------------');
    // console.log(body);
    if (!body) {
        console.error(`[Hack.Diversity React Template] - 400 in 'updateBook': You must provide an book to update.`);
        return res
            .status(400)
            .json({
                success: false,
                error: 'You must provide an book to update.',
            });
    }

    const bookForUpdate = {
        _id: req.params.id,
        Title: body.Title,
        Authors: body.Authors,
        Year_Of_Publication: body.Year_Of_Publication,
        ISBN: body.ISBN,
        Number_Of_Copies: body.Number_Of_Copies,
    };

    // console.log('----------------------- updateBook: res -----------------------');
    // console.log(res);

    return Book.updateOne({ _id: req.params.id }, bookForUpdate, (err, writeOpRes) => {
        if (err) {
            console.error(`[Hack.Diversity React Template] - 404 in 'updateBook': Book not found!`);
            console.error(err);
            return res
                .status(404)
                .json({
                    success: false,
                    error: err,
                    message: 'Book not found!',
                });
        }
        // TODO: make this neater
        // console.log('----------------------- updateBook: book -----------------------');
        // console.log(book);
        return writeOpRes;
    })
    .then(res => {
        // console.log('----------------------- updateBook - findOne: res -----------------------');
        // console.log(res);
        console.log(`[Hack.Diversity React Template] - 200 in 'updateBook': Book updated!`);
        return res
            .status(200)
            .json({
                success: true,
                id: req.params.id,
                message: 'Book updated!',
                writeOpResult: res
            });
    }).catch(err => {
        console.error(`[Hack.Diversity React Template] - caught error in 'updateBook': ${err}`);
        console.error(err);
        return err;
    });
};

deleteBook = async (req, res) => {
    await Book.findOneAndDelete({ _id: req.params.id }, (err, book) => {
        if (err) {
            console.error(`[Hack.Diversity React Template] - 400 in 'deleteBook': ${err}`);
            return res
                .status(400)
                .json({
                    succes: false,
                    error: err,
                });
        }

        if (!book) {
            console.error(`[Hack.Diversity React Template] - 400 in 'deleteBook': Book not found!`);
            return res
                .status(400)
                .json({
                    success: false,
                    error: 'Book not found!',
                });
        }

        return res
            .status(200)
            .json({
                success: true,
                book: book,
            });
    }).catch(err => {
        console.error(`[Hack.Diversity React Template] - caught error in 'deleteBook': ${err}`);
        console.error(err);
        return err;
    });
};

module.exports = {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};
