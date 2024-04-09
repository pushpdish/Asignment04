const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  quantities: [Number],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timestamp: Date,
});

module.exports = mongoose.model('Order', orderSchema);