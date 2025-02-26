# NyDiva International Backend Server

## Overview
This backend server is designed to support the NyDiva International client and admin services. It is built using Node.js, Express, and MongoDB. The current implementation focuses on product management and user authentication, with plans to expand to order management and cart management in the future.

## Table of Contents
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
  - [Product Management](#product-management)
  - [User Authentication](#user-authentication)
  - [User Management](#user-management)
  - [Future Implementations](#future-implementations)
- [Future Plans](#future-plans)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/pratham891/nydiva-backend
   ```
2. Navigate to the project directory:
   ```sh
   cd nydiva-backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Environment Variables
Create a `.env` file in the root directory and add the following environment variables:
```
MONGO_URI=<your-mongodb-uri>
PORT=<your-port>
JWT_SECRET=<your-jwt-secret>
```

## Project Structure
```
nydiva-backend/
├── controllers/
│   ├── productManagement.js
│   ├── userAuthController.js
│   └── userManagement.js
├── database/
│   └── connection.js
├── models/
│   ├── Cart.js
│   ├── Order.js
│   ├── Product.js
│   └── User.js
├── routes/
│   └── routes.js
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## API Endpoints

### Product Management
- **Get all products**
  - `GET /api/products`
- **Get product by ID**
  - `GET /api/products/:id`
- **Create a new product**
  - `POST /api/products`
- **Update a product**
  - `PUT /api/products/:id`
- **Delete a product**
  - `DELETE /api/products/:id`

### User Authentication
- **Register new user**
  - `POST /api/auth/signup`
- **Login user & generate a JWT**
  - `POST /api/auth/login`
- **Logout user & invalidate the JWT**
  - `POST /api/auth/logout`

### User Management
- **Get user by email**
  - `GET /api/user/:email`
- **Update user address**
  - `PUT /api/user/:email/update-address`
- **Get all users** (future implementation)
  - `GET /api/users/profile`
- **Update user profile** (future implementation)
  - `PUT /api/users/profile`
- **Get user addresses** (future implementation)
  - `GET /api/users/addresses`
- **Add new address** (future implementation)
  - `POST /api/users/addresses`

### Future Implementations
- **Cart Management**
  - `GET /api/cart` - Get cart
  - `POST /api/cart` - Add to cart
  - `PUT /api/cart/:itemId` - Update cart item
  - `DELETE /api/cart/:itemId` - Remove from cart
- **Order Management**
  - `GET /api/orders` - Get all orders
  - `GET /api/orders/:id` - Get order by ID
  - `POST /api/orders` - Create order
  - `PUT /api/orders/:id` - Update order
  - `DELETE /api/orders/:id` - Delete order
- **Payments**
  - `POST /api/payments` - Process payment
  - `GET /api/payments/:id` - Get payment status

## Future Plans
1. **Order Management**: Develop endpoints for creating, updating, and managing orders.
2. **Cart Management**: Implement functionality for managing user carts.
3. **Payments**: Integrate payment processing and status tracking.

This documentation provides an overview of the current state of the backend server and outlines future development plans. For detailed information on each endpoint and model, refer to the respective files in the codebase.