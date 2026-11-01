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
import { Textarea } from "@/components/ui/textarea"
import { Building2, Plus } from "lucide-react"

export function CompanyActionFormDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger render={<Button><Plus /> New Company</Button>} />
        <DialogContent className="sm:max-w-md" showCloseButton={false}>
          <DialogHeader>
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Building2 size={20} className="text-muted-foreground" />
              </div>

              {/* Text */}
              <div className="min-w-0 space-y-1">
                <h2 className="text-base font-semibold tracking-tight">
                  Create Company
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
                  <FieldLabel htmlFor="company-name-input-0090">
                    Company Name
                  </FieldLabel>
                  <Input
                    id="company-name-input-0090"
                    placeholder="Myan San Company Ltd."
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="company-email-input-0091">
                    Company Email
                  </FieldLabel>
                  <Input
                    id="company-email-input-0091"
                    placeholder="myansan@gmail.com"
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="company-phone-input-0091">
                    Company Phone Number
                  </FieldLabel>
                  <Input
                    id="company-phone-input-0091"
                    placeholder="09988878876"
                    required
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="company-address-textarea-00112">
                    Company Address
                  </FieldLabel>
                  <Textarea
                    id="company-address-textarea-00112"
                    placeholder="Mya Kan Thar Street/ 122, Yangon."
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
