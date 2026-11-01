import App from "@/App";
import Branches from "@/features/branches";
import Dashboard from "@/features/dashboard";
import Packages from "@/features/packages";
import Plans from "@/features/plans";
import Users from "@/features/users";
import AppLayout from "@/layouts/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import { companies } from "./companies";
import { products } from "./products";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      { index: true, Component: App }
    ]
  },
  {
    path: '/ophir/',
    Component: AppLayout,
    children: [
      { index: true, Component: Dashboard },
      companies,
      products,
      { path: 'packages', Component: Packages },
      { path: 'plans', Component: Plans },
      { path: 'branches', Component: Branches },
      { path: 'users', Component: Users },
    ]
  }
])