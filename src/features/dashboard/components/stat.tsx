import { CircleArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Stat({
  title = "Stat title",
  description = "Stat description",
  value = 0,
  url = '',
  icon: Icon,
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-card p-5 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium text-muted-foreground">
          {title}
        </p>

        {url && (
          <Link
            to={url}
            aria-label={`View ${title}`}
            className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
          >
            <CircleArrowOutUpRight size={18} />
          </Link>
        )}
      </div>

      {/* Value */}
      <p className="text-2xl font-semibold tracking-tight tabular-nums">
        {value ?? 0}
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