import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Item, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item"
import { PRODUCTS } from "@/features/products/constants"
import { Box, Component, Plus } from "lucide-react"
import { getProductNames } from "../utils"

export function ModuleDetailDialog({ module, open, onClose }) {
  const productNames = getProductNames(module?.product_ids ?? []);
  if (!open) { return null }
  return (
    <Dialog open={open} onOpenChange={onClose}>
      {/* <DialogTrigger render={<Button><Plus /> New Module</Button>} /> */}
      <DialogContent className="sm:max-w-2xl" showCloseButton={false}>
        <DialogHeader>
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Component size={20} className="text-muted-foreground" />
            </div>

            {/* Text */}
            <div className="min-w-0 space-y-1">
              <h2 className="text-base font-semibold tracking-tight">
                {module?.name}'s Detail
              </h2>

              <p className="text-sm leading-relaxed text-muted-foreground">
                See your module detail informations in here.
              </p>
            </div>
          </div>
        </DialogHeader>

        <h2 className="text-xs text-muted-foreground">{productNames.length} Products include in.</h2>
        <ItemGroup className="grid grid-cols-12">
          {productNames.map((name) => (
            <Item variant="outline" size="sm" key={name} className="col-span-12 sm:col-span-6">
              <ItemMedia>
                <Box size={14} className="text-muted-foreground"/>
              </ItemMedia>
              <ItemTitle>{name}</ItemTitle>
            </Item>
          ))}
        </ItemGroup>

        <DialogFooter>
          <DialogClose render={<Button variant="outline">Close</Button>} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
