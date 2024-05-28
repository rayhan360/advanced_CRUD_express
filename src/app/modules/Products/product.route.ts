import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

// create a new product route
router.post('/', ProductController.createNewProduct);

export const ProductRoutes = router;
