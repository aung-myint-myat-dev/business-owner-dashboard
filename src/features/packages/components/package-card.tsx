import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "cn";
import {
  ArrowRightLeft,
  Ellipsis,
  Eye,
  PackageOpen,
  Pencil,
  StarCheck,
  Trash2,
} from "lucide-react";

export default function PackageCard({ pkg, className = "" }) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-4 transition-shadow shadow-xs hover:shadow-sm",
        className
      )}
    >
      {/* Card Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
            <PackageOpen size={20} className="text-muted-foreground" />
          </div>

          <h3 className="truncate text-base font-semibold tracking-tight">
            {pkg.name}
          </h3>
        </div>

        {/* Features Count */}
        <Tooltip>
          <TooltipTrigger className="flex shrink-0 items-center gap-1.5 text-muted-foreground">
            <StarCheck size={14} />
            <span className="text-sm font-medium leading-none tabular-nums">
              {pkg.features?.length ?? 0}
            </span>
          </TooltipTrigger>

          <TooltipContent>Features count</TooltipContent>
        </Tooltip>
      </div>

      {/* Card Footer */}
      <div className="mt-4 flex items-center justify-between gap-3 border-t pt-4">
        {/* Price Range */}
        <div className="flex min-w-0 flex-wrap text-muted-foreground items-center gap-2">
          <span className="text-sm font-semibold tabular-nums">
            {Number(pkg.min_price).toLocaleString("en-US")} Ks
          </span>

          <ArrowRightLeft
            size={14}
            className="shrink-0"
          />

          <span className="text-sm font-semibold tabular-nums">
            {Number(pkg.max_price).toLocaleString("en-US")} Ks
          </span>

          <span className="text-xs">/ month</span>
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
    </div>
  );
}