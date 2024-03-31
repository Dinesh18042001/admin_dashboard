const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
  subcategoryName: String,
  parentCategory: String,
  metaTitle: String,
  metaKeywords: [String],
  metaDescription: String,
  subcategoryImage: String // Assuming the filename is saved as a string
});

module.exports = mongoose.model('Subcategory', subcategorySchema);

