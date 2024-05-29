import { Request, Response } from 'express';
import { OrderValidationSchema } from '../utilities/order.validation';
import { ordersServices } from './order.service';

// create new order controller
const createNewOrderController = async (req: Request, res: Response) => {
  try {
    const orderRequestData = req.body;

    const zodParsedRequest = OrderValidationSchema.parse(orderRequestData);
    const result = await ordersServices.createNewOrderFromDB(zodParsedRequest);

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

export const orderController = {
  createNewOrderController,
};
