import { Schema, model } from 'mongoose';
import { TOrderInterface } from '../utilities/order.interface';

const orderManagementSchema = new Schema<TOrderInterface>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const OrderManagement = model<TOrderInterface>(
  'Order',
  orderManagementSchema,
);
