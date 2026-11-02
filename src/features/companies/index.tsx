
import { Building2, Search} from "lucide-react"
import { COMPANIES } from "./constants"
import PageHeader from "@/components/app/page-header"
import { useBreadcrumb } from "@/hooks/use-breadcrumb"
import { useEffect } from "react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { CompanyActionFormDialog } from "./action-form-dialog"
import CompanyDataTable from "./components/data-table"
import { COMPANY_ROUTES } from "@/routes/companies"

export default function Companies() {
  const { setBreadcrumbs } = useBreadcrumb()

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
      <div className="flex items-center justify-between">
        {/* Search Input */}
        <InputGroup className="w-full max-w-sm bg-card">
          <InputGroupInput placeholder="Search by name ..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        {/* New Company Button */}
        <CompanyActionFormDialog />
      </div>

      {/* Table */}
      <div className="border rounded-xl shadow-xs overflow-hidden">
        <CompanyDataTable companies={COMPANIES} />
      </div>
    </>
  )
}