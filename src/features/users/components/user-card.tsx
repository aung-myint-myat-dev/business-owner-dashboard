import { Badge, Mail, MapPin, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <Link to="/ophir" className="block border shadow-sm active:shadow-md transition-shadow p-4 rounded-xl space-y-4 select-none">
      {/* Company Name */}
      <h2 className="text-base font-semibold tracking-tight">{user.name}</h2>

      {/* Company Info */}
      <ul className="text-sm text-muted-foreground space-y-1.5">
        <li className="flex items-center gap-2.5"><User size={14} /> {user.username}</li>
        <li className="flex items-center gap-2.5"><Mail size={14} /> {user.email}</li>
        <li className="flex items-center gap-2.5 capitalize"><Badge size={14} /> {user.status}</li>
      </ul>
    </Link>
  )
}