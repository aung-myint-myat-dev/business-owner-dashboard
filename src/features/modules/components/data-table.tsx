import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Ellipsis, Eye, Pencil, Trash2 } from "lucide-react";

export default function ModuleDataTable({ modules }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-max text-center">ID</TableHead>
          <TableHead>Module Name</TableHead>
          <TableHead className="text-center">Products Count</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {modules.map((module, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-center text-muted-foreground">#{module.id}</TableCell>
            <TableCell>{module.name}</TableCell>
            <TableCell className="text-center">{module.product_ids.length}</TableCell>
            <TableCell className="flex items-center justify-center gap-1.5">
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
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}