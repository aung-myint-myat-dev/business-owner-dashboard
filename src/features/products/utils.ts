import { PRODUCTS } from "./constants";

export function getProductName(id: number): string {
  return PRODUCTS.find((p) => p.id === id)?.name ?? '';
}