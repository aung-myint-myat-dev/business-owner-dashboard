import { Box, Search } from "lucide-react"
import PageHeader from "@/components/app/page-header"
import ProductCard from "./components/product-card"
import { PRODUCTS } from "./constants"
import { useBreadcrumb } from "@/hooks/use-breadcrumb"
import { useEffect } from "react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { ProductActionFormDialog } from "./action-form-dialog"

export default function Products() {
  const { setBreadcrumbs } = useBreadcrumb()

  // Breadcrumb Initializator
  useEffect(() => {
    setBreadcrumbs([
      { label: "Products", href: "/ophir/products" },
    ]);

    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
  return (
    <>
      <PageHeader
        title="Product"
        description="Manage your products here."
        icon={Box}
      />

      {/* Action Row */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        {/* Search Input */}
        <InputGroup className="bg-card w-full md:max-w-sm">
          <InputGroupInput placeholder="Search by name ..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        {/* New Package Button */}
        <div className="self-end">
          <ProductActionFormDialog />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {PRODUCTS.map((p, id) => (
          <ProductCard className="col-span-12 lg:col-span-6 xl:col-span-4" key={id} product={p} />
        ))}
      </div>
    </>
  )
}