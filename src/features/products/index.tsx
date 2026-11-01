import { Button } from "@/components/ui/button"
import { Box, Plus, Search } from "lucide-react"
import PageHeader from "@/components/app/page-header"
import ProductCard from "./components/product-card"
import { PRODUCTS, ROUTES } from "./constants"
import { useBreadcrumb } from "@/hooks/use-breadcrumb"
import { useEffect } from "react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Link } from "react-router-dom"
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
      <div className="flex items-center justify-between">
        {/* Search Input */}
        <InputGroup className="w-full max-w-sm">
          <InputGroupInput placeholder="Search by name ..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        {/* New Package Button */}
        <ProductActionFormDialog />
      </div>

      <div className="grid grid-cols-12 gap-4">
        {PRODUCTS.map((p, id) => (
          <ProductCard className="col-span-4" key={id} product={p} />
        ))}
      </div>
    </>
  )
}