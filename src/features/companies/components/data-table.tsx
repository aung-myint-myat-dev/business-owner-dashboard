import { Button } from "@/components/ui/button"
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
import { Ellipsis, Eye, Pencil, Trash2 } from "lucide-react"
export default function CompanyDataTable({ companies = [] }) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-max text-center">ID</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((com, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-center text-muted-foreground">#{com.id}</TableCell>
              <TableCell>{com.name}</TableCell>
              <TableCell>{com.email}</TableCell>
              <TableCell>{com.address}</TableCell>
              <TableCell>{com.phone}</TableCell>
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
    </>
  )
}