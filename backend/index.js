
// const express = require('express');
// const cors = require('cors');
// const multer = require('multer');
// const fs = require('fs');
// const app = express();
// const PORT = 8000;
// const userSchema = require('../backend/Schima/schima');
// const categorySchema = require('../backend/Schima/CategoryModel')
// const subcategorySchema = require('../backend/Schima/AddSubCategoriesModel')
// require("../backend/Database/connection");

// app.use(express.json());
// app.use(cors());

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// const upload = multer({ storage: storage });

// app.get('/', function (req, res) {
//   res.send('Hello World');
// });


// app.post("/addProduct", upload.array('images', 10), async (req, res) => {
//   const { productName, shortDescription, longDescription, additionalInformation, brandname, price, costPrice, retailPrice, salePrice, category, subcategory, totalStock, availableStock, sizes, variants, returnPolicy } = req.body;
//   const images = req.files.map(file => file.filename);

//   try {
//     const newProduct = new userSchema({
//       productName,
//       shortDescription,
//       longDescription,
//       additionalInformation,
//       brandname,
//       price,
//       costPrice,
//       retailPrice,
//       salePrice,
//       category,
//       subcategory,
//       totalStock,
//       availableStock,
//       sizes,
//       images, // Assuming `images` is an array of filenames
//       variants,
//       returnPolicy
//     });

//     await newProduct.save();
//     console.log("Product data saved successfully:", newProduct);
//     res.status(200).json(newProduct);
//   } catch (error) {
//     console.error("Error saving product:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


// // addcategories API

// app.post('/addcategories', upload.fields([
//   { name: 'categoryImage', maxCount: 1 },
//   { name: 'categoryBannerImage', maxCount: 1 }
// ]), async (req, res) => {
//   const { categoryName, brandName, metaTitle, metaKeywords, metaDescription, secondMetaDescription } = req.body;
//   const categoryImage = req.files['categoryImage'][0].filename;
//   const categoryBannerImage = req.files['categoryBannerImage'][0].filename;

//   try {
//     // Assuming you have a model/schema for categories
//     const newCategory = new categorySchema({
//       categoryName,
//       brandName,
//       metaTitle,
//       metaKeywords,
//       metaDescription,
//       secondMetaDescription,
//       categoryImage,
//       categoryBannerImage
//     });

//     await newCategory.save();

//     res.status(200).json({ message: 'Category added successfully', category: newCategory });
//   } catch (error) {
//     console.error("Error adding category:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // addsubcategories API

// app.post('/addsubcategories', upload.fields([
//   { name: 'subcategoryImage', maxCount: 1 },
// ]), async (req, res) => {
//   try {
//     const { subcategoryName, parentCategory, metaTitle, metaKeywords, metaDescription } = req.body;
//     console.log("Received data:", { subcategoryName, parentCategory, metaTitle, metaKeywords, metaDescription });
    
//     console.log("Uploaded files:", req.files);

//     const subcategoryImage = req.files['subcategoryImage'][0].filename;
//     console.log("Filename:", subcategoryImage);

//     // Assuming you have a model/schema for subcategories
//     const newSubcategory = new subcategorySchema({
//       subcategoryName,
//       parentCategory,
//       metaTitle,
//       metaKeywords,
//       metaDescription,
//       subcategoryImage,
//     });

//     console.log("New Subcategory:", newSubcategory);

//     await newSubcategory.save();

//     res.status(200).json({ message: 'Subcategory added successfully', subcategory: newSubcategory });
//   } catch (error) {
//     console.error("Error adding subcategory:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));






// const express = require('express');
// const cors = require('cors');
// const multer = require('multer');
// const fs = require('fs');
// const mongoose = require('mongoose');
// const { ObjectId } = mongoose.Types;
// const app = express();
// const PORT = 8000;
// const Product = require('../backend/Schima/schima');
// const categorySchema = require('../backend/Schima/CategoryModel')
// const subcategorySchema = require('../backend/Schima/AddSubCategoriesModel')
// require("../backend/Database/connection");

// app.use(express.json());
// app.use(cors());

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// const upload = multer({ storage: storage });

// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

// app.post('/addproduct', upload.fields([
//   { name: 'images', maxCount: 5 }
// ]), async (req, res) => {
//   const {
//     productName, shortDescription, longDescription, additionalInformation,
//     brandname, price, costPrice, category, subcategory, totalStock,
//     availableStock, sizes, variants, returnPolicy, categoryId
//   } = req.body;

//   const images = req.files['images'] ? req.files['images'].map(file => file.filename) : [];

//   try {
//     // Assuming you have a model/schema for products
//     const newProduct = new Product({
//       productName,
//       shortDescription,
//       longDescription,
//       additionalInformation,
//       brandname,
//       price,
//       costPrice,
//       category,
//       subcategory,
//       totalStock,
//       availableStock,
//       sizes: sizes.map(size => size.trim()),
//       images,
//       variants,
//       returnPolicy,
//       categoryId: new ObjectId(categoryId) // Use new ObjectId()
//     });

//     await newProduct.save();

//     res.status(200).json({ message: 'Product added successfully', product: newProduct });
//   } catch (error) {
//     console.error("Error saving product:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


// // addcategories API

// app.post('/addcategories', upload.fields([
//   { name: 'categoryImage', maxCount: 1 },
//   { name: 'categoryBannerImage', maxCount: 1 }
// ]), async (req, res) => {
//   const { categoryName, brandName, metaTitle, metaKeywords, metaDescription, secondMetaDescription } = req.body;
//   const categoryImage = req.files['categoryImage'][0].filename;
//   const categoryBannerImage = req.files['categoryBannerImage'][0].filename;

//   try {
//     // Assuming you have a model/schema for categories
//     const newCategory = new categorySchema({
//       categoryName,
//       brandName,
//       metaTitle,
//       metaKeywords,
//       metaDescription,
//       secondMetaDescription,
//       categoryImage,
//       categoryBannerImage
//     });

//     await newCategory.save();

//     res.status(200).json({ message: 'Category added successfully', category: newCategory });
//   } catch (error) {
//     console.error("Error adding category:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // addsubcategories API

// app.post('/addsubcategories', upload.fields([
//   { name: 'subcategoryImage', maxCount: 1 },
// ]), async (req, res) => {
//   try {
//     const { subcategoryName, parentCategory, metaTitle, metaKeywords, metaDescription } = req.body;
//     console.log("Received data:", { subcategoryName, parentCategory, metaTitle, metaKeywords, metaDescription });
    
//     console.log("Uploaded files:", req.files);

//     const subcategoryImage = req.files['subcategoryImage'][0].filename;
//     console.log("Filename:", subcategoryImage);

//     // Assuming you have a model/schema for subcategories
//     const newSubcategory = new subcategorySchema({
//       subcategoryName,
//       parentCategory,
//       metaTitle,
//       metaKeywords,
//       metaDescription,
//       subcategoryImage,
//     });

//     console.log("New Subcategory:", newSubcategory);

//     await newSubcategory.save();

//     res.status(200).json({ message: 'Subcategory added successfully', subcategory: newSubcategory });
//   } catch (error) {
//     console.error("Error adding subcategory:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));







// Import necessary modules
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const app = express();
const PORT = 8000;
const Product = require('../backend/Schima/schima');
const Category = require('../backend/Schima/CategoryModel');
const Subcategory = require('../backend/Schima/AddSubCategoriesModel');
require("../backend/Database/connection");

// Setup middleware
app.use(express.json());
app.use(cors());

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Default route
app.get('/', function (req, res) {
  res.send('Hello World');
});

// API endpoint to add a product
app.post('/addproduct', upload.fields([
  { name: 'images', maxCount: 5 }
]), async (req, res) => {
  // Parse request body
  const {
    productName, shortDescription, longDescription, additionalInformation,
    brandname, price, costPrice, category, subcategory, totalStock,
    availableStock, sizes, variants, returnPolicy, categoryId
  } = req.body;

  const images = req.files['images'] ? req.files['images'].map(file => file.filename) : [];

  try {
    // Check if category ID exists
    const existingCategory = await Category.findOne({ categoryId });
    if (!existingCategory) {
      return res.status(400).json({ error: 'Invalid category ID' });
    }

    const newProduct = new Product({
      productName,
      shortDescription,
      longDescription,
      additionalInformation,
      brandname,
      price,
      costPrice,
      category,
      subcategory,
      totalStock,
      availableStock,
      sizes: sizes.map(size => size.trim()),
      images,
      variants,
      returnPolicy,
      categoryId: existingCategory._id // Assign the category ID from the Category database
    });

    await newProduct.save();

    res.status(200).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



// API endpoint to add a category
app.post('/addcategories', upload.fields([
  { name: 'categoryImage', maxCount: 1 },
  { name: 'categoryBannerImage', maxCount: 1 }
]), async (req, res) => {
  const { categoryId, categoryName, brandName, metaTitle, metaKeywords, metaDescription, secondMetaDescription } = req.body;
  const categoryImage = req.files['categoryImage'][0].filename;
  const categoryBannerImage = req.files['categoryBannerImage'][0].filename;

  try {
    // Create a new category instance
    const newCategory = new Category({
      categoryId, // Assuming categoryId is provided in the request body
      categoryName,
      brandName,
      metaTitle,
      metaKeywords,
      metaDescription,
      secondMetaDescription,
      categoryImage,
      categoryBannerImage
    });

    // Save the new category
    await newCategory.save();

    res.status(200).json({ message: 'Category added successfully', category: newCategory });
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API endpoint to add a subcategory
app.post('/addcategories', upload.fields([
  { name: 'categoryImage', maxCount: 1 },
  { name: 'categoryBannerImage', maxCount: 1 }
]), async (req, res) => {
  const { categoryId, categoryName, brandName, metaTitle, metaKeywords, metaDescription, secondMetaDescription } = req.body;
  const categoryImage = req.files['categoryImage'][0].filename;
  const categoryBannerImage = req.files['categoryBannerImage'][0].filename;

  try {
    // Create a new category instance
    const newCategory = new Category({
      categoryId, // Assuming categoryId is provided in the request body
      categoryName,
      brandName,
      metaTitle,
      metaKeywords,
      metaDescription,
      secondMetaDescription,
      categoryImage,
      categoryBannerImage
    });

    // Save the new category
    await newCategory.save();

    res.status(200).json({ message: 'Category added successfully', category: newCategory });
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));
