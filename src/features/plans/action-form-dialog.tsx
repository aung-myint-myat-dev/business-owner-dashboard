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
import { CalendarClock, Plus } from "lucide-react"

export function PlanActionFormDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger render={<Button><Plus /> New Plan</Button>} />
        <DialogContent className="sm:max-w-md" showCloseButton={false}>
          <DialogHeader>
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <CalendarClock size={20} className="text-muted-foreground" />
              </div>

              {/* Text */}
              <div className="min-w-0 space-y-1">
                <h2 className="text-base font-semibold tracking-tight">
                  Create Plan
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
                  <FieldLabel htmlFor="plan-name-input-0090">
                    Plan Name
                  </FieldLabel>
                  <Input
                    id="plan-name-input-0090"
                    placeholder="One Month"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="plan-description-textarea-00112">
                    Plan Description
                  </FieldLabel>
                  <Textarea
                    id="plan-description-textarea-00112"
                    placeholder="Samll introduction of your plan."
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
