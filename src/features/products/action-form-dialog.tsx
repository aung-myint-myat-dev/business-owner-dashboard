import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Textarea } from "@/components/ui/textarea"
import { Box, Building2, Plus } from "lucide-react"

export function ProductActionFormDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger render={<Button><Plus /> New Product</Button>} />
        <DialogContent className="sm:max-w-md" showCloseButton={false}>
          <DialogHeader>
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Box size={20} className="text-muted-foreground" />
              </div>

              {/* Text */}
              <div className="min-w-0 space-y-1">
                <h2 className="text-base font-semibold tracking-tight">
                  Create Product
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
                  <FieldLabel htmlFor="product-name-input-0090">
                    Product Name
                  </FieldLabel>
                  <Input
                    id="product-name-input-0090"
                    placeholder="HR Software"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="product-status-select-09989">
                    Product Status
                  </FieldLabel>
                  <NativeSelect>
                    <NativeSelectOption value="production">Production</NativeSelectOption>
                    <NativeSelectOption value="apple">Deeveloping</NativeSelectOption>
                    <NativeSelectOption value="banana">Maintenance</NativeSelectOption>
                  </NativeSelect>
                </Field>
              </FieldGroup>
            </FieldSet>

            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="product-description-textarea-00112">
                    Product Description
                  </FieldLabel>
                  <Textarea
                    id="product-description-textarea-00112"
                    placeholder="Samll introduction of your product."
                    className="resize-none"
                  />
                </Field>
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
