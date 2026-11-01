import Companies from "@/features/companies";
import CompanyActionForm from "@/features/companies/action-form";

export const companies = {
  path: 'companies',
  children: [
    { index: true, Component: Companies },
    { path: 'create', Component: CompanyActionForm },
    { path: ':id/edit', element: <CompanyActionForm isEdit={true}/> },
  ]
}