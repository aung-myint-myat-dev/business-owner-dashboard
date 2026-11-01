import { Button } from "@/components/ui/button"
import { Box, CreditCard, Plus, Search } from "lucide-react"
import PageHeader from "@/components/app/page-header"
import { useBreadcrumb } from "@/hooks/use-breadcrumb"
import { useEffect } from "react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { PLANS } from "./constants"
import PlanCard from "./components/plan-card"
import { PlanActionFormDialog } from "./action-form-dialog"

export default function Plans() {
  const { setBreadcrumbs } = useBreadcrumb()

  // Breadcrumb Initializator
  useEffect(() => {
    setBreadcrumbs([
      { label: "Plans", href: "/ophir/plans" },
    ]);

    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
  return (
    <>
      <PageHeader
        title="Plans"
        description="Manage your plans here."
        icon={CreditCard}
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
        <PlanActionFormDialog />
      </div>

      <div className="grid grid-cols-12 gap-4">
        {PLANS.map((p, id) => (
          <PlanCard className="col-span-6" key={id} plan={p} />
        ))}
      </div>
    </>
  )
}