const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
});

schema.index({ user: 1, product: 1 }, { unique: true });
module.exports = mongoose.model('Favorite', schema);
