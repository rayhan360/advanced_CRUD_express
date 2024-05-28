import { Schema, model } from 'mongoose';
import {
  TInventoryDetails,
  TProductVariants,
  TProducts,
} from '../utilities/product.interface';

// product variant schema
const productVariantSchema = new Schema<TProductVariants>({
  type: {
    type: String,
    required: [true, 'Variant Type in Required'],
  },
  value: {
    type: String,
    require: [true, 'Variant Value in Required'],
  },
});

// Inventory Details Schema
const inventoryDetailsSchema = new Schema<TInventoryDetails>({
  quantity: {
    type: Number,
    required: [true, 'Quantity in Required'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'In Stock in Required'],
  },
});

// Product Schema
const productSchema = new Schema<TProducts>({
  name: {
    type: String,
    required: [true, 'Name in Required'],
  },
  description: {
    type: String,
    required: [true, 'Description in Required'],
    minLength: [10, 'Description at least 10. But got {VALUE}'],
  },
  price: {
    type: Number,
    required: [true, 'Price in Required'],
  },
  category: {
    type: String,
    required: [true, 'Category in Required'],
  },
  tags: {
    type: [String],
    required: [true, 'Tags in Required'],
  },
  variants: {
    type: [productVariantSchema],
    required: [true, 'Variants in Required'],
  },
  inventory: {
    type: inventoryDetailsSchema,
    required: [true, 'Inventory Details in Required'],
  },
});

export const Product = model<TProducts>('Product', productSchema);
