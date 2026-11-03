import { CalendarClock, Component, Search } from "lucide-react"
import PageHeader from "@/components/app/page-header"
import { useBreadcrumb } from "@/hooks/use-breadcrumb"
import { useEffect, useMemo, useState } from "react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { COMPANY_ROUTES } from "@/routes/companies"
import { MODULES } from "./constants"
import ModuleCard from "./components/module-card"
import { ModuleActionFormDialog } from "./action-form-dialog"
import { ModuleDetailDialog } from "./components/module-detail-dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PLANS } from "../plans/constants"
import PlanCard from "../plans/components/plan-card"
import { PlanActionFormDialog } from "../plans/action-form-dialog"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import ModuleDataTable from "../modules/components/data-table"

export default function Modules() {
  const { setBreadcrumbs } = useBreadcrumb()
  const [showDetail, setShowDetail] = useState(false)
  const [selectModuleId, setSelectedModuleId] = useState(null)
  const [view, setView] = useState('card')

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
      <Tabs defaultValue="modules" orientation="horizontal">
        <TabsList className="bg-primary/10 px-1">
          <TabsTrigger value="modules">Modules</TabsTrigger>
          <TabsTrigger value="plans">Plans</TabsTrigger>
        </TabsList>

        <TabsContent value="modules" render={
          <>
            <PageHeader
              title="Modules"
              description="Manage your modules here."
              icon={Component}
            />
            {/* Action Row */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 my-2">
              {/* Search Input */}
              <InputGroup className="w-full md:max-w-sm bg-card">
                <InputGroupInput placeholder="Search by name ..." />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
              </InputGroup>

              {/* New Company Button */}
              <div className="self-end flex gap-4">
                <NativeSelect onChange={(e) => setView(e.target.value)}>
                  <NativeSelectOption value="card">Card View</NativeSelectOption>
                  <NativeSelectOption value="table">Table View</NativeSelectOption>
                </NativeSelect>

                <ModuleActionFormDialog />
              </div>
            </div>
            {view === 'card' && (
              <div className="grid grid-cols-12 gap-4">
                {MODULES.map((m) => (
                  <>
                    <ModuleCard onViewDetail={handleShowDetail} className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3" key={m.name} module={m} />
                  </>
                ))}
              </div>
            )}

            {view === 'table' && (
              <div className="border rounded-xl bg-card shadow-xs">
                <ModuleDataTable modules={MODULES} />
              </div>
            )}
          </>
        } />

        <TabsContent value="plans" render={
          <>
            <PageHeader
              title="Plans"
              description="Manage your plans here."
              icon={CalendarClock}
            />
            {/* Action Row */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 mb-2">
              {/* Search Input */}
              <InputGroup className="w-full md:max-w-sm bg-card">
                <InputGroupInput placeholder="Search by name ..." />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
              </InputGroup>

              {/* New Company Button */}
              <div className="self-end sm:self-">
                <PlanActionFormDialog />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              {PLANS.map((p, id) => (
                <PlanCard className="col-span-12 sm:col-span-6 md:col-span-3" key={id} plan={p} />
              ))}
            </div>
          </>
        } />
      </Tabs>

      <ModuleDetailDialog module={selectedModule} open={showDetail} onClose={handleHideDetail} />
    </>
  )
}