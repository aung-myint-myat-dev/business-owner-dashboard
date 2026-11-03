import Stat from "./components/stat";
import { useBreadcrumb } from "@/hooks/use-breadcrumb";
import { useEffect } from "react";
import { MonthlyNewRegisterChart } from "./components/monthly-new-register-chart";
import { MONTHLY_NEW_REGISTER_COMPANIES_CHART, STATS, SUB_STATS } from "./constants";
import { FinanceChart } from "./components/finance-chart";
import { ModulesUsagePieChart } from "./components/modules-usage-pie-chart";
import { YearlyRegisteredCompaniesChart } from "./components/yearly-registration-area-chart";
import { PlanUsageDonutChart } from "./components/plan-usage-donut-chart";

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
      <div className="grid auto-rows-min gap-4 md:grid-cols-2 xl:grid-cols-5">
        {STATS.map((stat) => (
          <Stat
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            url={stat.url ?? ''}
          />
        ))}
      </div>

      {/* Sub Stat */}
      <div className="grid auto-rows-min gap-4 grid-cols-12">
        {SUB_STATS.map((subStat) => (
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
            <Stat
              key={subStat.title}
              title={subStat.title}
              value={subStat.value}
              isFinance={subStat.isFinance}
            />

          </div>
        ))}
      </div>

      <div className="min-h-screen flex-1 rounded-xl space-y-4 md:min-h-min">
        <div className="grid auto-rows-min grid-cols-12 gap-4">
          <div className="col-span-12 xl:col-span-6">
            <MonthlyNewRegisterChart title="Monthly New Registered Company" chartData={MONTHLY_NEW_REGISTER_COMPANIES_CHART} />
          </div>

          <div className="col-span-12 xl:col-span-6">
            <YearlyRegisteredCompaniesChart />
          </div>
        </div>

        <div className="grid auto-rows-min grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6 xl:col-span-4"><PlanUsageDonutChart /></div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-4"><ModulesUsagePieChart /></div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-4"><FinanceChart /></div>
        </div>
      </div>
    </>
  )
}