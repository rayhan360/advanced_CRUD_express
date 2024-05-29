import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

// create a new order
router.post('/', orderController.createNewOrderController);

export const OrderRoute = router;
