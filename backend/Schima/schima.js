// const mongoose = require('mongoose');

// const { Schema } = mongoose;

// const productSchema = new Schema({
//   productName: {
//     type: String,
//     required: true
//   },
//   shortDescription: {
//     type: String,
//     required: true
//   },
//   longDescription: {
//     type: String,
//     required: true
//   },
//   additionalInformation: {
//     type: String,
//     required: true
//   },
//   brandname: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   costPrice: {
//     type: Number,
//     required: true
//   },
//   category: {
//     type: String,
//     required: true
//   },
//   subcategory: {
//     type: String,
//     required: true
//   },
//   totalStock: {
//     type: Number,
//     required: true
//   },
//   availableStock: {
//     type: Number,
//     required: true
//   },
//   sizes: {
//     type: [String],
//     required: true
//   },
//   images: {
//     type: [String], 
//     required: true
//   },
//   variants: {
//     type: [
//       {
//         type: String,
//         value: String,
//         retailPrice: Number,
//         mrp: Number,
//         sku: String
//       }
//     ],
//     required: true
//   },
//   returnPolicy: {
//     type: String,
//     required: true
//   },
//   categoryId: {
//     type: Schema.Types.ObjectId,
//     ref: 'Category', // Reference to the Category model
//     required: true
//   }
// });

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;




// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const productSchema = new Schema({
//   productName: {
//     type: String,
//     required: true
//   },
//   shortDescription: {
//     type: String,
//     required: true
//   },
//   longDescription: {
//     type: String,
//     required: true
//   },
//   additionalInformation: {
//     type: String,
//     required: true
//   },
//   brandname: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   costPrice: {
//     type: Number,
//     required: true
//   },
//   category: {
//     type: String,
//     required: true
//   },
//   subcategory: {
//     type: String,
//     required: true
//   },
//   totalStock: {
//     type: Number,
//     required: true
//   },
//   availableStock: {
//     type: Number,
//     required: true
//   },
//   sizes: {
//     type: [String],
//     required: true
//   },
//   images: {
//     type: [String], 
//     required: true
//   },
//   variants: {
//     type: [
//       {
//         type: String,
//         value: String,
//         retailPrice: Number,
//         mrp: Number,
//         sku: String
//       }
//     ],
//     required: true
//   },
//   returnPolicy: {
//     type: String,
//     required: true
//   },
//   categoryId: {
//     type: Schema.Types.ObjectId,
//     ref: 'Category', // Reference to the Category model
//     required: true
//   }
// });

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;




const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  shortDescription: { type: String },
  longDescription: { type: String },
  additionalInformation: { type: String },
  brandname: { type: String, required: true },
  price: { type: Number, required: true },
  costPrice: { type: Number },
  category: { type: String }, // You can adjust the type according to your schema
  subcategory: { type: String }, // You can adjust the type according to your schema
  totalStock: { type: Number, required: true },
  availableStock: { type: Number, required: true },
  sizes: [{ type: String }],
  images: [{ type: String }],
  variants: [{ type: String }], // You can adjust the type according to your schema
  returnPolicy: { type: String },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true } // Reference to the Category model
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
