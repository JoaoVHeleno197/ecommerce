export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  type: string;
};

export type ListProducts = () => Promise<Product[]>;
