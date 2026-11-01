import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Eye, Pencil, Plus, Search, Trash2, Users2 } from "lucide-react"
import { USERS } from "./constants"
import PageHeader from "@/components/app/page-header"
import { Badge } from "@/components/ui/badge"
import { useBreadcrumb } from "@/hooks/use-breadcrumb"
import { useEffect } from "react"
import { UserActionFormDialog } from "./action-form-dialog"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

export default function Users() {

  const { setBreadcrumbs } = useBreadcrumb()

  // Breadcrumb Initializator
  useEffect(() => {
    setBreadcrumbs([
      { label: "Users", href: "/ophir/users" },
    ]);

    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
  return (
    <>
      <PageHeader
        title="Users"
        description="Manage your users and create user account here."
        icon={Users2}
      />

      {/* Action Row */}
      <div className="flex items-center justify-between">
        {/* Search Input */}
        <InputGroup className="w-full max-w-sm">
          <InputGroupInput placeholder="Search by name ..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        {/* New Package Button */}
        <UserActionFormDialog />
      </div>

      {/* Table */}
      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-max text-center">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {USERS.map((user, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-center text-muted-foreground">#{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge className="capitalize" variant={user.status === "active" ? "default" : "destructive"}>
                    {user.status}
                  </Badge>
                </TableCell>
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
      </div>
    </>
  )
}