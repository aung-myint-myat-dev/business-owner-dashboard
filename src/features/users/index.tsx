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
import { Ellipsis, Eye, Pencil, Search, Trash2, Users2 } from "lucide-react"
import { USER_STATUS_COLOR_CLASS, USERS } from "./constants"
import PageHeader from "@/components/app/page-header"
import { Badge } from "@/components/ui/badge"
import { useBreadcrumb } from "@/hooks/use-breadcrumb"
import { useEffect } from "react"
import { UserActionFormDialog } from "./action-form-dialog"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { getCompanyName } from "./utils"

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
      <div className="border shadow-xs rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-max text-center">ID</TableHead>
              <TableHead>Company Name</TableHead>
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
                <TableCell>{getCompanyName(user.company_id)}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge className={`capitalize ${USER_STATUS_COLOR_CLASS[user.status]}`} variant={user.status === "active" ? "default" : "destructive"}>
                    {user.status}
                  </Badge>
                </TableCell>
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
      </div>
    </>
  )
}