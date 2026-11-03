import { Building2, Search } from "lucide-react"
import PageHeader from "@/components/app/page-header"
import { useBreadcrumb } from "@/hooks/use-breadcrumb"
import { useEffect, useMemo, useState } from "react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { COMPANY_ROUTES } from "@/routes/companies"
import { MODULES } from "./constants"
import ModuleCard from "./components/module-card"
import { ModuleActionFormDialog } from "./action-form-dialog"
import { ModuleDetailDialog } from "./components/module-detail-dialog"

export default function Modules() {
  const { setBreadcrumbs } = useBreadcrumb()
  const [showDetail, setShowDetail] = useState(false)
  const [selectModuleId, setSelectedModuleId] = useState(null)

  const selectedModule = useMemo(() => {
    return MODULES.find((m) => m.id === selectModuleId) ?? null
  }, [selectModuleId])

  const handleShowDetail = (moduleId) => {
    setShowDetail(true)
    setSelectedModuleId(moduleId)
  }

  const handleHideDetail = () => {
    setShowDetail(false)
    setSelectedModuleId(null)
  }

  // Breadcrumb Initializator
  useEffect(() => {
    setBreadcrumbs([
      { label: "Companies", href: COMPANY_ROUTES.INDEX },
    ]);

    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);

  return (
    <>
      <PageHeader
        title="Companies"
        description="Manage your companies here."
        icon={Building2}
      />

      {/* Action Row */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        {/* Search Input */}
        <InputGroup className="w-full md:max-w-sm bg-card">
          <InputGroupInput placeholder="Search by name ..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        {/* New Company Button */}
        <div className="self-end sm:self-">
          <ModuleActionFormDialog />
        </div>
      </div>

      {/* Card View */}
      <div className="grid grid-cols-12 gap-4">
        {MODULES.map((m) => (
          <ModuleCard onViewDetail={handleShowDetail} className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3" key={m.name} module={m} />
        ))}
      </div>

      <ModuleDetailDialog module={selectedModule} open={showDetail} onClose={handleHideDetail}/>
    </>
  )
}