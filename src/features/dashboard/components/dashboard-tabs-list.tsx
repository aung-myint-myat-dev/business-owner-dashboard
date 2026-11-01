import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Box, Building2, CalendarClock, Package, RotateCwClock, Users2 } from "lucide-react"

export default function DashboardTabsList() {
  return (
    <TabsList>
      <TabsTrigger value="companies">
        <Building2 />
        Companies</TabsTrigger>
      <TabsTrigger value="users"><Users2 /> Users</TabsTrigger>
    </TabsList>
  )
}