export type TProductVariants = {
  type: string;
  value: string;
};

export type TInventoryDetails = {
  quantity: number;
  inStock: boolean;
};

export type TProducts = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TProductVariants[];
  inventory: TInventoryDetails;
};
