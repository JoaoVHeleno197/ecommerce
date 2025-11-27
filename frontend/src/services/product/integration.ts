import axios from "axios";
import type { ListProducts, Product } from "./types";

const BASE_URL = "http://localhost:3000";

export const getProductList: ListProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);

  return response.data.map((product: any) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
    type: product.type,
  }));
};

export const getProductById = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);

  return response.data;
};

export const createProduct = async (productData: Product) => {
  const response = await axios.post(`${BASE_URL}/products`, {
    productData: {
      name: productData.name,
      description: productData.description,
      price: productData.price,
      stock: productData.stock,
      type: productData.type,
    },
  });

  return response.data;
};

export const updateProduct = async (id: number, productData: Product) => {
  const response = await axios.put(`${BASE_URL}/products/${id}`, {
    productData: {
      name: productData.name,
      description: productData.description,
      price: productData.price,
      stock: productData.stock,
      type: productData.type,
    },
  });

  return response.data;
};

export const deleteProduct = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/products/${id}`);

  return response.data;
};
