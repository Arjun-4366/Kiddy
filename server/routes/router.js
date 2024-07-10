const express = require('express');
const router = express.Router();
const Product = require('../model/products');

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router