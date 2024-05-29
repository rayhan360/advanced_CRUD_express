import { Types } from 'mongoose';
import { z } from 'zod';

const productIdValidate = z.custom<Types.ObjectId>(
  (value) => {
    return Types.ObjectId.isValid(value);
  },
  {
    message: 'Invalid product ID',
  },
);

export const OrderValidationSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  productId: productIdValidate,
  price: z.number().positive({ message: 'Price must be a positive number' }),
  quantity: z
    .number()
    .int()
    .positive({ message: 'Quantity must be a positive integer' }),
});
