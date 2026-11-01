import { Badge } from "@/components/ui/badge";
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
import { cn } from "cn";
import {
  Box,
  Ellipsis,
  Eye,
  PackageOpen,
  Pencil,
  Plus,
  StarCheckIcon,
  Trash2,
  UserIcon,
  Users2Icon,
} from "lucide-react";
import { PRODUCT_STATUS_COLOR_CLASS } from "../constants";

export default function ProductCard({ product, className = "" }) {
  const status = product.status ?? "production";

  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-xl border bg-card p-4 shadow-xs transition-shadow hover:shadow-sm",
        className
      )}
    >
      {/* Card Header */}
      <div className="flex items-center justify-between">
        <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
          <Box size={20} className="text-muted-foreground" />
        </div>

        <Badge
          variant="outline"
          className={cn(
            "px-2.5 py-1 font-medium capitalize",
            PRODUCT_STATUS_COLOR_CLASS[status]
          )}
        >
          {status}
        </Badge>
      </div>

      {/* Card Body */}
      <div className="mt-4 space-y-2">
        <h2 className="line-clamp-1 text-base font-semibold tracking-tight">
          {product.name}
        </h2>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
      </div>

      {/* Card Footer */}
      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
        {/* Statistics */}
        <div className="flex min-w-0 items-center gap-4">
          {/* Users Count */}
          <Tooltip>
            <TooltipTrigger className="flex items-center gap-1.5 text-muted-foreground">
              {product.user_count > 1 ? (
                <Users2Icon size={15} />
              ) : (
                <UserIcon size={15} />
              )}

              <span className="text-sm font-medium tabular-nums">
                {product.user_count}
              </span>
            </TooltipTrigger>

            <TooltipContent>Users count</TooltipContent>
          </Tooltip>

          {/* Features Count */}
          <Tooltip>
            <TooltipTrigger className="flex items-center gap-1.5 text-muted-foreground">
              <StarCheckIcon size={15} />

              <span className="text-sm font-medium tabular-nums">
                {product.features?.length ?? 0}
              </span>
            </TooltipTrigger>

            <TooltipContent>Features count</TooltipContent>
          </Tooltip>

          {/* Packages Count */}
          <Tooltip>
            <TooltipTrigger className="flex items-center gap-1.5 text-muted-foreground">
              <PackageOpen size={15} />

              <span className="text-sm font-medium tabular-nums">
                {product.package_count ?? 0}
              </span>
            </TooltipTrigger>

            <TooltipContent>Packages count</TooltipContent>
          </Tooltip>
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
            <DropdownMenuGroup>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>

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