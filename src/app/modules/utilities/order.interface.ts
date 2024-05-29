import { Types } from 'mongoose';

export type TOrderInterface = {
  email: string;
  productId: Types.ObjectId;
  price: number;
  quantity: number;
};
