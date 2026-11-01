import { Link } from "react-router-dom";
import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { ZodiacOphiuchus } from "lucide-react";

export default function NavHeader() {
  return (
    <>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Tooltip>
              <TooltipTrigger
                render={
                  <SidebarMenuButton
                    size="lg"
                    render={<Link to="/" />}
                  >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg border bg-background text-primary">
                      <ZodiacOphiuchus size={4}/>
                    </div>

                    <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                      <span className="truncate font-semibold">
                        Ophir Business
                      </span>
                      <span className="truncate text-xs text-muted-foreground">
                        Dashboard
                      </span>
                    </div>
                  </SidebarMenuButton>
                }
              />

              <TooltipContent side="right" align="center">
                Ophir Business
              </TooltipContent>
            </Tooltip>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
    </>
  )
}