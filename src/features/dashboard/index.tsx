import { Box, Building2, Package, RotateCwClock, Search, Users2 } from "lucide-react";
import { COMPANIES } from "../companies/constants";
import Stat from "./components/stat";
import { PRODUCTS } from "../products/constants";
import { PACKAGES } from "../packages/constants";
import { USERS } from "../users/constants";
import { useBreadcrumb } from "@/hooks/use-breadcrumb";
import { useEffect } from "react";
import { ROUTES as companyRoute } from "../companies/constants";
import { ROUTES as productRoute } from "../products/constants";
import { Tabs } from "@/components/ui/tabs";
import DashboardTabsList from "./components/dashboard-tabs-list";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import DashboardTabsContent from "./components/dashboard-tabs-content";

export default function Dashboard() {
  const { setBreadcrumbs } = useBreadcrumb()

  useEffect(() => {
    setBreadcrumbs([
      { label: "Dashboard", href: "/ophir" },
    ]);

    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        <Stat
          title="Total Companies"
          description="Companies that join us."
          value={COMPANIES.length}
          url={companyRoute.INDEX}
          icon={Building2}
        />

        <Stat
          title="Total Products"
          description="Products that we make."
          value={PRODUCTS.length}
          url={productRoute.INDEX}
          icon={Box}
        />

        <Stat
          title="Total Packages"
          description="Packages that we support."
          value={PACKAGES.length}
          icon={Package}
        />

        <Stat
          title="Total Users"
          description="User that using our products."
          value={USERS.length}
          icon={Users2}
        />
      </div>

      <div className="min-h-screen flex-1 rounded-xl border bg-card p-5 shadow-xs md:min-h-min">

        {/* Section Header */}
        <div className="mb-4 flex items-center gap-2.5">
          <RotateCwClock size={18} className="text-muted-foreground" />
          <h2 className="text-base font-semibold tracking-tight">
            Recently Registered
          </h2>
        </div>

        <Tabs defaultValue="companies" className="w-full">

          {/* Tab and Search */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <DashboardTabsList />

            {/* <InputGroup className="w-full sm:w-64">
              <InputGroupInput placeholder="Search by name..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup> */}
          </div>

          {/* Content */}
          <div className="mt-2.5">
            <DashboardTabsContent />
          </div>

        </Tabs>
      </div>
    </>
  )
}