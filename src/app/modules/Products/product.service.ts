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

// get single product from DB by ids
const getSingleProductById = async (_id: string) => {
  const result = await Product.findOne({ _id });
  return result;
};

// update product by id
const updateProductById = async (_id: string, product: TProducts) => {
  const result = await Product.findByIdAndUpdate(_id, product, { new: true });
  return result;
};

// deleted product by id
const deletedProductById = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductById,
  updateProductById,
  deletedProductById,
};
