import Products from "@/features/products";
import ProductActionForm from "@/features/products/action-form";

export const products = {
  path: 'products',
  children: [
    { index: true, Component: Products },
    { path: 'create', Component: ProductActionForm },
    { path: ':id/edit', element: <ProductActionForm isEdit={true}/> },
  ]
}