import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Link, useLocation } from "react-router-dom";

export default function NavMain({ links }) {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {links.map((link) => {
            const isActive = location.pathname === link.url;
            const Icon = link.icon;

            return (
              <SidebarMenuItem key={link.url}>
                <SidebarMenuButton
                  render={<Link to={link.url} />}
                  tooltip={link.label}
                  isActive={isActive}
                  className={`${isActive
                    ? "!bg-green-600 !text-white hover:!bg-green-700"
                    : "hover:!bg-green-50 hover:!text-green-700"
                    }`}
                >
                  {Icon && <Icon />}
                  <span>{link.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}