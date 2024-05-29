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

// get all orders controller
const getAllOrdersController = async (req: Request, res: Response) => {
  try {
    let result;
    const userEmail = req.query.email;

    if (userEmail) {
      result = await ordersServices.getAllOrdersByEmail(userEmail as string);
    } else {
      result = await ordersServices.getAllOrdersFromDB();
    }

    res.status(400).json({
      success: true,
      message: userEmail
        ? 'Orders fetched successfully for user email!'
        : 'Orders fetched successfully!',
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
  getAllOrdersController,
};
