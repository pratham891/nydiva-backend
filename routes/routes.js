import { Router } from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productManagement.js';
const router = Router();

// Authentication routes - future implementation
router.post('/api/auth/signup', (req, res) => res.json({ msg: 'Signup route' })); //register new user
router.post('/api/auth/login', (req, res) => res.json({ msg: 'Login route' })); //login user & generate a jwt
router.post('/api/auth/logout', (req, res) => res.json({ msg: 'Logout route' })); //invalidate the jwt

// Product Management
router.get('/api/products', getAllProducts);
router.get('/api/products/:id', getProductById);
router.post('/api/products', createProduct);
router.put('/api/products/:id', updateProduct);
router.delete('/api/products/:id', deleteProduct);

// User management - future implementation
router.get('/api/users/profile', (req, res) => res.json({ msg: 'Get all users' }));
router.put('/api/users/profile', (req, res) => res.json({ msg: 'Update user profile' }));
router.get('/api/users/addresses', (req, res) => res.json({ msg: 'Get user addresses' }));
router.post('/api/users/addresses', (req, res) => res.json({ msg: 'add new address' }));

// Cart - future implementation
router.get('/api/cart', (req, res) => res.json({ msg: 'Get cart' }));
router.post('/api/cart', (req, res) => res.json({ msg: 'Add to cart' }));
router.put('/api/cart/:itemId', (req, res) => res.json({ msg: 'Update cart item' }));
router.delete('/api/cart/:itemId', (req, res) => res.json({ msg: 'Remove from cart' }));

// Orders - future implementation
router.get('/api/orders', (req, res) => res.json({ msg: 'Get all orders' }));
router.get('/api/orders/:id', (req, res) => res.json({ msg: 'Get order by id' }));
router.post('/api/orders', (req, res) => res.json({ msg: 'Create order' }));
router.put('/api/orders/:id', (req, res) => res.json({ msg: 'Update order' }));
router.delete('/api/orders/:id', (req, res) => res.json({ msg: 'Delete order' }));

// Payments - future implementation
router.post('/api/payments', (req, res) => res.json({ msg: 'Process payment' }));
router.get('/api/payments/:id', (req, res) => res.json({ msg: 'Get payment status' }));

export default router;