// Import necessary modules
const express = require('express');
const router = express.Router();
const Category = require('../models/Category'); // Import your Category model

// Route to get all products
router.get('/', async (req, res) => {
  try {
    // Fetch all categories from the database
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Export the router
module.exports = router;
