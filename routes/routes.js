import { Router } from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productManagement.js';
import { signup, login } from '../controllers/userAuthController.js';
import { getUser, updateAddress } from '../controllers/userManagement.js';
import { createOrder, getAllOrders, updateOrderStatus, getOrdersByUserId } from '../controllers/OrderManagement.js';
import { verifyPayment } from '../controllers/PaymentManagement.js';
import { adminLogin } from '../controllers/admin.js';


const router = Router();

// Authentication routes - future implementation
router.post('/auth/signup', signup); //register new user
router.post('/auth/login', login); //login user & generate a jwt
router.post('/auth/logout', (req, res) => res.json({ msg: 'Logout route' })); //invalidate the jwt

// Admin authentication routes
router.post('/auth/admin/login', adminLogin);

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

// Order Managemment
router.post('/orders', createOrder);
router.get('/orders', getAllOrders);
router.get('/orders/:userId', getOrdersByUserId);
router.put('/orders/:orderId', updateOrderStatus);
router.delete('/orders/:id', (req, res) => res.json({ msg: 'Delete order' }));

// Cart - future implementation
router.get('/cart', (req, res) => res.json({ msg: 'Get cart' }));
router.post('/cart', (req, res) => res.json({ msg: 'Add to cart' }));
router.put('/cart/:itemId', (req, res) => res.json({ msg: 'Update cart item' }));
router.delete('/cart/:itemId', (req, res) => res.json({ msg: 'Remove from cart' }));

// Payments - future implementation
router.post('/payments/verify', verifyPayment);
router.post('/payments', (req, res) => res.json({ msg: 'Process payment' }));
router.get('/payments/:id', (req, res) => res.json({ msg: 'Get payment status' }));

export default router;