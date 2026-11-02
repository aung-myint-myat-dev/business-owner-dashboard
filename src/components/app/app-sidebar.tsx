import { Sidebar, SidebarContent, SidebarFooter } from "@/components/ui/sidebar";
import { Box, Building2, Component, CreditCard, Grid2X2, Package, Users2 } from "lucide-react";
import NavHeader from "./nav-header";
import { NavUser } from "./nav-user";
import { NavGroup } from "./nav-group";

export default function AppSidebar() {
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
        { label: "Modules", url: "/ophir/modules", icon: Component },
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