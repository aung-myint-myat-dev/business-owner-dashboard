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
    <SidebarGroup>
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
                className={`${isActive
                  ? "!bg-green-600 !text-white hover:!bg-green-700"
                  : "hover:!bg-green-50 hover:!text-green-700"
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