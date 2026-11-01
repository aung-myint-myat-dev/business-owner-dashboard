import { TabsContent } from "@/components/ui/tabs"
import CompanyDataTable from "@/features/companies/components/data-table"
import { COMPANIES } from "@/features/companies/constants"

export default function DashboardTabsContent() {
  return (
    <>
      <TabsContent value="companies">
        <div className="border rounded-md overflow-hidden">
          <CompanyDataTable companies={COMPANIES.slice(0,7)} />
        </div>
      </TabsContent>

      <TabsContent value="users">
        Users Content
      </TabsContent>
    </>
  )
}