import { TProducts } from '../utilities/product.interface';
import { Product } from './product.model';

// create a product service
const createProductIntoDB = async (product: TProducts) => {
  const result = await Product.create(product);
  return result;
};

// get all products data from DB
const getAllProductFromDB = async (searchTerm?: string) => {
  let query = {};
  if (searchTerm) {
    query = {
      $or: [
        { name: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
        { tags: { $regex: searchTerm, $options: 'i' } },
      ],
    };
  }

  const result = await Product.find(query);
  return result;
};

// get single product from DB by ids
const getSingleProductById = async (_id: string) => {
  const result = await Product.findOne({ _id });
  return result;
};

// update product by id
const updateProductById = async (_id: string, product: Partial<TProducts>) => {
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
