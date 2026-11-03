import { Building2, Search } from "lucide-react"
import { COMPANIES } from "./constants"
import PageHeader from "@/components/app/page-header"
import { useBreadcrumb } from "@/hooks/use-breadcrumb"
import { useEffect } from "react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { CompanyActionFormDialog } from "./action-form-dialog"
import CompanyDataTable from "./components/data-table"
import { COMPANY_ROUTES } from "@/routes/companies"
import { useIsMobile } from "@/hooks/use-mobile"
import CompanyCard from "./components/company-card"

export default function Companies() {
  const { setBreadcrumbs } = useBreadcrumb()
  const isMobile = useIsMobile()

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
          <CompanyActionFormDialog />
        </div>
      </div>

      {/* Card View */}
      {isMobile ? (
        <div className="space-y-4">
          {COMPANIES.map((c) => (
            <CompanyCard key={c.id} company={c} />
          ))}
        </div>
      ) : (
        <div className="border shadow-xs rounded-xl bg-card overflow-hidden">
          <CompanyDataTable companies={COMPANIES} />
        </div>
      )}
    </>
  )
}