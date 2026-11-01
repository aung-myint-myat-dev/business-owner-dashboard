import { BreadcrumbContext, type BreadcrumbItem } from "@/contexts/breadcrumb-context";
import { useState } from "react";

type BreadcrumbProviderProps = {
  children: React.ReactNode;
};

export default function BreadcrumbProvider({
  children,
}: BreadcrumbProviderProps) {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}