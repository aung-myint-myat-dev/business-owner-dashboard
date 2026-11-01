import { Button } from "@/components/ui/button"
import { Box, Plus, Search } from "lucide-react"
import PageHeader from "@/components/app/page-header"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { PACKAGES } from "./constants"
import PackageCard from "./components/package-card"
import { PRODUCTS } from "../products/constants"
import PackageGroup from "./components/package-group"
import { useBreadcrumb } from "@/hooks/use-breadcrumb"
import { useEffect } from "react"
import { PackageActionFormDialog } from "./action-form-dialog"

export default function Packages() {
  const { setBreadcrumbs } = useBreadcrumb()

  // Breadcrumb Initializator
  useEffect(() => {
    setBreadcrumbs([
      { label: "Packages", href: "/ophir/packages" },
    ]);

    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);

  return (
    <>
      <PageHeader
        title="Packages"
        description="Manage your products' packages here."
        icon={Box}
      />

      {/* Search & Action Bar */}
      <div className="flex items-center justify-between">
        {/* Search Input */}
        <InputGroup className="w-full max-w-sm">
          <InputGroupInput placeholder="Search by product name ..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        {/* New Package Button */}
        <PackageActionFormDialog/>
      </div>

      <div className="space-y-4">
        {PRODUCTS.map((pkg) => (
          <PackageGroup product_id={pkg.id} />
        ))}
      </div>
    </>
  )
}