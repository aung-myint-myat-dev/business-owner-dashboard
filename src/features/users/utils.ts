import { COMPANIES } from "../companies/constants";

export function getCompanyName(id: number) {
  return COMPANIES.find((c) => c.id === id)?.name ?? 'Unknown'
}