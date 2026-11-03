export const MONTHLY_NEW_REGISTER_COMPANIES_CHART = [
  { month: "Jan", companies: 12 },
  { month: "Feb", companies: 18 },
  { month: "Mar", companies: 15 },
  { month: "Apr", companies: 22 },
  { month: "May", companies: 28 },
  { month: "Jun", companies: 20 },
  { month: "Jul", companies: 32 },
  { month: "Aug", companies: 25 },
  { month: "Sep", companies: 35 },
  { month: "Oct", companies: 30 },
  { month: "Nov", companies: 38 },
  { month: "Dec", companies: 45 },
];

export const YEARLY_NEW_REGISTER_COMPANIES_CHART = [
  { year: "2021", companies: 45 },
  { year: "2022", companies: 78 },
  { year: "2023", companies: 112 },
  { year: "2024", companies: 156 },
  { year: "2025", companies: 210 },
  { year: "2026", companies: 285 },
];

import { COMPANY_ROUTES } from "@/routes/companies";
import { SUBSCRIPTION_ROUTES } from "@/routes/subscriptions";
import { Building2, Calendar, Package, Users2, TrendingUp } from "lucide-react"
import { MODULES } from "../modules/constants";
import { PLANS } from "../plans/constants";
import { PRODUCTS } from "../products/constants";

export const STATS = [
  {
    title: "Total Companies",
    value: 245,
    icon: Package,
    url: COMPANY_ROUTES.INDEX,
  },
  {
    title: "Total Products",
    value: PRODUCTS.length,
    url: "/ophir/products",
    isFinance: false,
  },
  {
    title: "Total Modules",
    value: MODULES.length,
    url: "/ophir/products",
    isFinance: false,
  },
  {
    title: "Expiring Subscriptions",
    value: 12,
    icon: Users2,
    url: SUBSCRIPTION_ROUTES.EXPIRING_SOON_SUBSCRIPTIONS,
  },
  {
    title: "Expired Subscriptions",
    value: 18,
    icon: TrendingUp,
    url: SUBSCRIPTION_ROUTES.EXPIRED_SUBSCRIPTIONS,
  },
]

export const SUB_STATS = [
    {
    title: "Total Plans",
    value: PLANS.length,
    url: "/ophir/plans",
    isFinance: false,
  },
  {
    title: "Avenue",
    value: 18999900,
    isFinance: true,
  },
  {
    title: "Total Expense",
    value: 190000000,
    isFinance: true,
  },
  {
    title: "Profit",
    value: 230000000000,
    isFinance: true,
  },
]