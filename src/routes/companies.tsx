import ComingSoon from "@/components/coming-soon";
import Companies from "@/features/companies";
import CurrentMonthCompanies from "@/features/companies/current-month-companies";

export const companies = {
  path: 'companies',
  children: [
    { index: true, Component: Companies },
    { path: 'current-month-registered-companies', Component: CurrentMonthCompanies },
    { path: 'current-year-registered-companies', Component: ComingSoon },
  ]
}

export const COMPANY_ROUTES = {
  INDEX: "/ophir/companies",
  CURRENT_MONTH_COMPANIES: "/ophir/companies/current-month-registered-companies",
  CURRENT_YEAR_COMPANIES: "/ophir/companies/current-year-registered-companies",
  CREATE: "/ophir/companies/create",
  EDIT: "/ophir/companies/:id/edit",
};