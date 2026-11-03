import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  Box,
  Component,
  Ellipsis,
  Eye,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";

export default function ModuleCard({
  module,
  onViewDetail,
  // onEdit,
  // onDelete,
  // onAddPackage,
  className,
}) {

  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-xl border bg-card p-4 shadow-xs transition-all hover:shadow-sm",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
          <Component size={20} className="text-muted-foreground" />
        </div>

        <h3 className="truncate text-base font-semibold">
          {module.name}
        </h3>
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between pt-2">
        <Tooltip>
          <TooltipTrigger
            render={
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Box size={15} />
                <span className="text-sm font-medium">
                  {module.product_ids.length}
                </span>
              </div>
            }
          />
          <TooltipContent>Products count</TooltipContent>
        </Tooltip>

        {/* Actions */}
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
            <DropdownMenuGroup>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>

              <DropdownMenuItem onClick={() => onViewDetail(Number(module.id))}>
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
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Plus size={14} />
              Add Package
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
