import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "cn";
import { CalendarClock, Ellipsis, Eye, Pencil, Trash2 } from "lucide-react";

export default function PlanCard({ plan, className = '' }) {
  return (
    <div className={cn('border bg-card shadow-xs hover:shadow-sm transition-shadow rounded-xl p-4 flex items-center gap-5', className)}>
      {/* Icon */}
      <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
        <CalendarClock size={20} className="text-muted-foreground" />
      </div>

      {/* Title & Description */}
      <div className="flex-1">
        <h2 className="text-base font-semibold">{plan.name}</h2>
      </div>

      {/* Action Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              className="size-8 shrink-0 rounded-full"
            >
              <Ellipsis size={18} />
            </Button>
          }
        />

        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Eye size={14} />
            Detail
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Pencil size={14} />
            Edit
          </DropdownMenuItem>

          <DropdownMenuItem variant="destructive">
            <Trash2 size={14} />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}