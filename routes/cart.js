const express = require('express');
const Cart = require('../models/cart');

const router = express.Router();

// Get all carts
router.get('/', async (req, res) => {
  const carts = await Cart.find();
  res.json(carts);
});

// Get cart by ID
router.get('/:id', async (req, res) => {
  const cart = await Cart.findById(req.params.id);
  res.json(cart);
});

// Create cart
router.post('/', async (req, res) => {
  const cart = new Cart(req.body);
  await cart.save();
  res.json(cart);
});

// Update cart
router.put('/:id', async (req, res) => {
  const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(cart);
});

// Delete cart
router.delete('/:id', async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: 'Cart deleted' });
});

module.exports = router;