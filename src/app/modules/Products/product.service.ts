import { TProducts } from '../utilities/product.interface';
import { Product } from './product.model';

// create a product service
const createProductIntoDB = async (product: TProducts) => {
  const result = await Product.create(product);
  return result;
};

// get all products data from DB
const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
};
