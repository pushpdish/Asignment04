const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
mongoose.set('debug', true);



// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect("mongodb+srv://pushpdishp:pushpdish@cluster0.t6u65b9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  
});

// Define models
const Product = require('./models/product');
const User = require('./models/user');
const Comment = require('./models/comment');
const Cart = require('./models/cart');
const Order = require('./models/order');

// Define routes
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comment');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');

// Initialize app
const app = express();
app.use(bodyParser.json());

// Use routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/orders', orderRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));