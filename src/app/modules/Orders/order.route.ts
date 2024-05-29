import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

// create a new order
router.post('/', orderController.createNewOrderController);

// get all orders from the order Database
router.get('/', orderController.getAllOrdersController);
export const OrderRoute = router;
