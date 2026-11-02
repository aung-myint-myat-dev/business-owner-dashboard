import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  title?: string
  label?: string
  description?: string
  value?: number
  url?: string
  icon?: React.ElementType | null
  isFinance?: boolean
}
export default function Stat({
  title = "Stat title",
  label = "",
  description = "",
  value = 0,
  url = '',
  isFinance = false,
  icon: Icon = null,
}: Props) {

  return (
    <div className={`flex flex-col gap-3 rounded-xl bg-card border p-4 shadow-xs hover:shadow-md transition-shadow`}>
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium tracking-tight text-muted-foreground">
          {title}
        </p>

        {url && (
          <Link
            to={url}
            aria-label={`View ${title}`}
            className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
          >
            <SquareArrowOutUpRight size={18} />
          </Link>
        )}
      </div>

      {/* Value */}
      <p className="text-xl flex-1 font-semibold text-primary tracking-tight tabular-nums gap-1.5 flex items-center flex-wrap">

        {value ? value.toLocaleString() : 0} 
        {isFinance && (
          <span className="text-xs text-muted-foreground font-normal tracking-wide">MMK</span>
        )}
        {label && (
          <span className="text-xs text-muted-foreground font-medium tracking-wide">{label}</span>
        )}
      </p>

      {/* Description */}
      {description && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {Icon && <Icon size={14} className="shrink-0 text-primary" />}
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}