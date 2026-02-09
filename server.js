require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/product'));
app.use('/api/favorites', require('./routes/favorite'));
app.use('/api/cart', require('./routes/cart'));

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () =>
    console.log('Server running http://localhost:' + process.env.PORT)
  );
});
