import { createContext } from "react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbContextType = {
  breadcrumbs: BreadcrumbItem[];
  setBreadcrumbs: (items: BreadcrumbItem[]) => void;
};

export const BreadcrumbContext = createContext<BreadcrumbContextType | null>(null);