import { Search, Users2 } from "lucide-react"
import { USERS } from "./constants"
import PageHeader from "@/components/app/page-header"
import { useBreadcrumb } from "@/hooks/use-breadcrumb"
import { useEffect } from "react"
import { UserActionFormDialog } from "./action-form-dialog"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import UserDataTable from "./components/data-table";
import { useIsMobile } from "@/hooks/use-mobile"
import UserCard from "./components/user-card"

export default function Users() {

  const { setBreadcrumbs } = useBreadcrumb()
  const isMobile = useIsMobile()

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
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        {/* Search Input */}
        <InputGroup className="w-full md:max-w-sm bg-card">
          <InputGroupInput placeholder="Search by name ..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        {/* New Company Button */}
        <div className="self-end">
          <UserActionFormDialog />
        </div>
      </div>

      {isMobile ? (
        <div className="space-y-4">
          {USERS.map((u) => (
            <UserCard key={u.id} user={u} />
          ))}
        </div>
      ) : (
        <div className="border bg-card shadow-xs rounded-xl overflow-hidden">
          <UserDataTable users={USERS} />
        </div>
      )}
    </>
  )
}