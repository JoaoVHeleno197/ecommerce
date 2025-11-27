export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  type: string;
};

export type ListProducts = () => Promise<Product[]>;
