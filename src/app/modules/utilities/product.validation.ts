import { z } from 'zod';

const productVariantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventoryDetailsValidationSchema = z.object({
  quantity: z.number().int().nonnegative('Quantity cannot be negative'),
  inStock: z.boolean(),
});

const productsValidationSchema = z.object({
  name: z.string(),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters long'),
  price: z.number().positive('Price must be a positive number'),
  category: z.string(),
  tags: z.array(z.string()).min(3, 'There must be at least three tag'),
  variants: z
    .array(productVariantValidationSchema)
    .min(1, 'There must be at least one variant'),
  inventory: inventoryDetailsValidationSchema,
});

export default productsValidationSchema;
