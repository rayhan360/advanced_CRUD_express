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

// get all products controller
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductFromDB();

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
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

// get a single product controller
const getSingleProductByIds = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductService.getSingleProductById(productId);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
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

// update a single product controller
const updateProductController = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;
    const zodParseData = productsValidationSchema.parse(productData);
    const result = await ProductService.updateProductById(
      productId,
      zodParseData,
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
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
  getAllProducts,
  getSingleProductByIds,
  updateProductController,
};
