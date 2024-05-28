import { TProducts } from '../utilities/product.interface';
import { Product } from './product.model';

// create a product service
const createProductIntoDB = async (product: TProducts) => {
  const result = await Product.create(product);
  return result;
};

export const ProductService = {
  createProductIntoDB,
};
