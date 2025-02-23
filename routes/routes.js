import { Router } from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productManagement.js';
import { signup, login } from '../controllers/userAuthController.js';
import { getUser, updateAddress } from '../controllers/userManagement.js';


const router = Router();

// Authentication routes - future implementation
router.post('/auth/signup', signup); //register new user
router.post('/auth/login', login); //login user & generate a jwt
router.post('/auth/logout', (req, res) => res.json({ msg: 'Logout route' })); //invalidate the jwt

// Product Management
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

// User management
router.get('/user/:email', getUser);
router.put('/user/:email/update-address', updateAddress);
router.get('/users/profile', (req, res) => res.json({ msg: 'Get all users' }));
router.put('/users/profile', (req, res) => res.json({ msg: 'Update user profile' }));
router.get('/users/addresses', (req, res) => res.json({ msg: 'Get user addresses' }));
router.post('/users/addresses', (req, res) => res.json({ msg: 'add new address' }));

// Cart - future implementation
router.get('/cart', (req, res) => res.json({ msg: 'Get cart' }));
router.post('/cart', (req, res) => res.json({ msg: 'Add to cart' }));
router.put('/cart/:itemId', (req, res) => res.json({ msg: 'Update cart item' }));
router.delete('/cart/:itemId', (req, res) => res.json({ msg: 'Remove from cart' }));

// Orders - future implementation
router.get('/orders', (req, res) => res.json({ msg: 'Get all orders' }));
router.get('/orders/:id', (req, res) => res.json({ msg: 'Get order by id' }));
router.post('/orders', (req, res) => res.json({ msg: 'Create order' }));
router.put('/orders/:id', (req, res) => res.json({ msg: 'Update order' }));
router.delete('/orders/:id', (req, res) => res.json({ msg: 'Delete order' }));

// Payments - future implementation
router.post('/payments', (req, res) => res.json({ msg: 'Process payment' }));
router.get('/payments/:id', (req, res) => res.json({ msg: 'Get payment status' }));

export default router;