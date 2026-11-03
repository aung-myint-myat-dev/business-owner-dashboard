import Products from "@/features/products";

export const products = {
  path: 'products',
  children: [
    { index: true, Component: Products },
  ]
}