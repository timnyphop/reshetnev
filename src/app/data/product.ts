import { IProduct } from '../models/product';

// pizza.interface.ts
export const fetchPizzas = async (): Promise<IProduct[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  const pizzas: IProduct[] = await response.json();
  return pizzas;
};
