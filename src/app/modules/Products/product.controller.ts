import { Request, Response } from 'express';
import productsValidationSchema from '../utilities/product.validation';
import { ProductService } from './product.service';

// create a new product controller
const createNewProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    // zod validation schema
    const zodParseData = productsValidationSchema.parse(data);

    const result = await ProductService.createProductIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
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

export const ProductController = {
  createNewProduct,
};
