const Favorite = require('../models/Favorite');

exports.addFavorite = async (req, res) => {
  try {
    await Favorite.create({
      user: req.user.id,
      product: req.body.product
    });
    res.status(201).json({ message: 'Added' });
  } catch (err) {
    res.status(400).json({ message: 'Already added' });
  }
};

exports.getFavorites = async (req, res) => {
  const favs = await Favorite.find({ user: req.user.id }).populate('product');
  res.json(favs.map(f => f.product));
};

exports.removeFavorite = async (req, res) => {
  await Favorite.deleteOne({
    user: req.user.id,
    product: req.params.productId
  });
  res.json({ message: 'Removed' });
};
