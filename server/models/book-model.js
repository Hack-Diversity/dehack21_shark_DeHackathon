const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      // type: Map,
      //   of: String,
      required: false,
    },
    publication_year: {
      type: String,
      required: false,
    },
    isbn: {
      type: String,
      required: false,
    },
    copies: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('books', Book);

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const Book = new Schema(
//     {
//         // Title
//         title: {
//             type: String,
//             required: true
//         },
//         author: {
//             type: String,
//             // type: Map,
//             // of: String,
//             required: false
//         },
//         publication_year: {
//             type: Date,
//             required: false
//         },
//         isbn: {
//             type: Number,
//             required: false
//         },
//         copies: {
//             type: Number,
//             required: true
//         },
//     },
//     { timestamps: true },
// );

// module.exports = mongoose.model('books', Book);
