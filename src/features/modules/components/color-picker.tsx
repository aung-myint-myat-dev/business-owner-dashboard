
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { MODULE_CARD_ICON_BG_CLASSE_NAMES } from "../constants";

export default function ColorPicker({
  value,
  onChange,
}) {
  return (
    <div className="grid grid-cols-12 gap-4 w-full">
      {MODULE_CARD_ICON_BG_CLASSE_NAMES.map((color) => {
        const isSelected = value === color.name;

        return (
          <button
            key={color.name}
            type="button"
            title={color.name}
            aria-label={color.name}
            aria-pressed={isSelected}
            onClick={() => onChange(color.name)}
            className={cn(
              "col-span-3 sm:col-span-1 flex size-9 items-center justify-center rounded-full",
              "transition-all hover:scale-110",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              color.previewClassName,
              isSelected && "ring-2 ring-muted-foreground ring-offset-2"
            )}
          >
            {isSelected && (
              <Check className="size-4 text-white" strokeWidth={3} />
            )}
          </button>
        );
      })}
    </div>
  );
}
