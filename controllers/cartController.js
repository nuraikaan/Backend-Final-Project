const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
  const item = await Cart.findOneAndUpdate(
    { user: req.user.id, product: req.body.product },
    { $inc: { quantity: 1 } },
    { upsert: true, new: true }
  );
  res.status(201).json(item);
};

exports.getCart = async (req, res) => {
  const items = await Cart
    .find({ user: req.user.id })
    .populate('product');
  res.json(items);
};

exports.removeFromCart = async (req, res) => {
  await Cart.deleteOne({
    user: req.user.id,
    product: req.params.productId
  });
  res.json({ message: 'Removed' });
};