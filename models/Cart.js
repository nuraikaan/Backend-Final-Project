const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, default: 1 }
});

cartSchema.index({ user: 1, product: 1 }, { unique: true });

module.exports = mongoose.model('Cart', cartSchema);