import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Eye, Pencil, Trash2 } from "lucide-react"
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
                <Button variant="outline" size="sm">
                  <Pencil />
                </Button>

                <Button variant="outline" size="sm">
                  <Eye />
                </Button>

                <Button variant="destructive" size="sm">
                  <Trash2 />
                </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}