import { ProductService } from '../Products/product.service';
import { TOrderInterface } from '../utilities/order.interface';
import { OrderManagement } from './order.model';

// create a new order and update product quantity
const createNewOrderFromDB = async (order: TOrderInterface) => {
  // find single product
  const getSingleProductFromProductDB =
    await ProductService.getSingleProductById(String(order?.productId));

  // not found order product error message
  if (!getSingleProductFromProductDB) {
    throw new Error('Product not found');
  }

  const availableProductsQuantity: number = <number>(
    getSingleProductFromProductDB?.inventory?.quantity
  );

  // not enough quantity error message and enough available products
  if (
    availableProductsQuantity < 0 ||
    order?.quantity > availableProductsQuantity
  ) {
    throw new Error('Insufficient quantity available in inventory');
  } else {
    const newAvailableProductQuantity: number =
      <number>availableProductsQuantity - order?.quantity;

    let updateProducts;
    if (newAvailableProductQuantity > 0) {
      updateProducts = {
        inventory: {
          quantity: newAvailableProductQuantity,
          inStock: true,
        },
      };
    } else {
      updateProducts = {
        inventory: {
          quantity: newAvailableProductQuantity,
          inStock: false,
        },
      };
    }
    await ProductService.updateProductById(
      String(order.productId),
      updateProducts,
    );

    const result = await OrderManagement.create(order);
    return result;
  }
};

export const ordersServices = {
  createNewOrderFromDB,
};
