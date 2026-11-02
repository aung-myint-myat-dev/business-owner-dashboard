import type { LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router-dom"

type NavLink = {
  label: string
  url: string
  icon: LucideIcon
}

type NavGroupProps = {
  title: string
  children: NavLink[]
}

export function NavGroup({ title, children }: NavGroupProps) {
  const location = useLocation()
  return (
    <SidebarGroup className="border-b">
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {children.map((item) => {
          const isActive = location.pathname === item.url
          return (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                render={<Link to={item.url} />}
                tooltip={item.label}
                isActive={isActive}
                // className={`${isActive
                //   ? "!bg-primary !text-white hover:!bg-blue-500"
                //   : "hover:!bg-green-50 hover:!text-primary/50"
                //   }`}
                className={`${isActive
                    ? "!bg-primary !text-white hover:!bg-primary"
                    : "hover:!bg-accent hover:!text-accent-foreground"
                  }`}
              >
                {item.icon && <item.icon />}
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}