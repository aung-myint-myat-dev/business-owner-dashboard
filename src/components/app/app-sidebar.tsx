import { Sidebar, SidebarContent, SidebarFooter } from "@/components/ui/sidebar";
import NavMain from "./nav-main";
import { Box, Building2, CreditCard, Grid2X2, Package, Users2 } from "lucide-react";
import NavHeader from "./nav-header";
import { NavUser } from "./nav-user";
import { NavGroup } from "./nav-group";

export default function AppSidebar() {
  const navLinks = [
    { label: "Dashboard", url: "/ophir", icon: Grid2X2 },
    { label: "Companies", url: "/ophir/companies", icon: Building2 },
    { label: "Products", url: "/ophir/products", icon: Box },
    { label: "Packages", url: "/ophir/packages", icon: Package },
    { label: "Plans", url: "/ophir/plans", icon: CreditCard },
    { label: "Users", url: "/ophir/users", icon: Users2 },
  ]

  const navGroups = [
    {
      title: "Overvies",
      children: [
        { label: "Dashboard", url: "/ophir", icon: Grid2X2 },
      ]
    },
    {
      title: "Business Management",
      children: [
        { label: "Companies", url: "/ophir/companies", icon: Building2 },
        { label: "Users", url: "/ophir/users", icon: Users2 },
        { label: "Products", url: "/ophir/products", icon: Box },
      ]
    },
    {
      title: "Subscription Management",
      children: [
        { label: "Packages", url: "/ophir/packages", icon: Package },
        { label: "Plans", url: "/ophir/plans", icon: CreditCard },
      ]
    }
  ]
  return (
    <>
      <Sidebar collapsible="icon">
        <NavHeader />
        <SidebarContent>
          {/* <NavMain links={navLinks} /> */}
          {navGroups.map((group) => (
            <NavGroup key={group.title} title={group.title} children={group.children} />
          ))}
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={{
            name: "Ophir Business",
            email: "ophir@example.com",
            avatar: "/avatars/shadcn.jpg",
          }} />
        </SidebarFooter>
      </Sidebar>
    </>
  )
}