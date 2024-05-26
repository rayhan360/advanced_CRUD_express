export type ProductVariants = {
  type: string;
  value: string;
};

export type InventoryDetails = {
  quantity: number;
  inStock: boolean;
};

export type Products = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: ProductVariants[];
  inventory: InventoryDetails;
};
