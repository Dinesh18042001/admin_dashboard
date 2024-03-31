// // Import Mongoose
// const mongoose = require('mongoose');


// const categorySchema = new mongoose.Schema({
//   categoryName: {
//     type: String,
//     required: true
//   },
//   brandName: {
//     type: String,
//     required: true
//   },
//   categoryImage: String,
//   categoryBannerImage: String,
//   metaTitle: String,
//   metaKeywords: [String],
//   metaDescription: String,
//   secondMetaDescription: String
// });


// const Category = mongoose.model('Category', categorySchema);


// module.exports = Category;



// Import Mongoose
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true
  },
  brandName: {
    type: String,
    required: true
  },
  categoryImage: String,
  categoryBannerImage: String,
  metaTitle: String,
  metaKeywords: [String],
  metaDescription: String,
  secondMetaDescription: String
});

// Automatically generate a unique identifier for each category
categorySchema.virtual('categoryId').get(function() {
  return this._id.toHexString();
});

categorySchema.set('toJSON', {
  virtuals: true
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

