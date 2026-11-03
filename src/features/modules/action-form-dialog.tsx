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
import { PRODUCTS } from "@/features/products/constants"
import { Component, Plus } from "lucide-react"
import ColorPicker from "./components/color-picker"
import { useMemo, useState } from "react"
import { MODULE_CARD_ICON_BG_CLASSE_NAMES, MODULE_CARD_ICON_BG_CLASSES } from "./constants"

export function ModuleActionFormDialog() {
  const [selectedColor, setSelectedColor] = useState('default')

  const previewColorClassName = useMemo(() => {
    return MODULE_CARD_ICON_BG_CLASSE_NAMES.find((c) => c.name === selectedColor)?.className ?? ''
  }, [selectedColor])

  const onColorSelect = (name) => {
    setSelectedColor(name);
  }
  return (
    <Dialog>
      <form>
        <DialogTrigger render={<Button><Plus /> New Module</Button>} />
        <DialogContent className="sm:max-w-2xl" showCloseButton={false}>
          <DialogHeader>
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${previewColorClassName}`}>
                <Component size={20} />
              </div>

              {/* Text */}
              <div className="min-w-0 space-y-1">
                <h2 className="text-base font-semibold tracking-tight">
                  Create Module
                </h2>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Fill the form here. Click save when you're done.
                </p>
              </div>
            </div>
          </DialogHeader>

          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="module-name-input-0090">
                    Module Name
                  </FieldLabel>
                  <Input
                    id="module-name-input-0090"
                    placeholder="Single HR"
                    required
                  />
                </Field>
              </FieldGroup>
            </FieldSet>

            <FieldSet>
              <FieldLegend>Choose products</FieldLegend>
              <FieldDescription>Products that include in this module.</FieldDescription>
              <FieldGroup className="grid grid-cols-12">
                {PRODUCTS.map((p) => (
                  <Field orientation="horizontal" key={p.id} className="col-span-12 sm:col-span-6">
                    <Checkbox id={`product-${p.id}`} name="product_ids" />
                    <FieldLabel htmlFor={`product-${p.id}`}>{p.name}</FieldLabel>
                  </Field>
                ))}

              </FieldGroup>
            </FieldSet>

            <FieldSet>
              <FieldLegend>Choose color</FieldLegend>
              <FieldDescription>Color that represent your module group.</FieldDescription>
              <FieldGroup>
                <ColorPicker onChange={onColorSelect} value={selectedColor}/>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
