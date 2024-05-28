import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

// create a new product route
router.post('/', ProductController.createNewProduct);

// retrieve the product route
router.get('/', ProductController.getAllProducts);

// retrieve a single product route
router.get('/:productId', ProductController.getSingleProductByIds);

// update product
router.put('/:productId', ProductController.updateProductController);

export const ProductRoutes = router;
