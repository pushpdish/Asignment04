const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  purchaseHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  shippingAddress: String,
});

module.exports = mongoose.model('User', userSchema);