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
import { Plus, User } from "lucide-react"
import { COMPANIES } from "../companies/constants"

export function UserActionFormDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger render={<Button><Plus /> New User</Button>} />
        <DialogContent className="sm:max-w-md" showCloseButton={false}>
          <DialogHeader>
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <User size={20} className="text-muted-foreground" />
              </div>

              {/* Text */}
              <div className="min-w-0 space-y-1">
                <h2 className="text-base font-semibold tracking-tight">
                  Create User
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
                  <FieldLabel>
                    Company Name
                  </FieldLabel>
                  <NativeSelect>
                    <NativeSelectOption value="" disabled>Select a company</NativeSelectOption>
                    {COMPANIES.map((c) => (
                      <NativeSelectOption key={c.id} value={c.id}>{c.name}</NativeSelectOption>
                    ))}
                  </NativeSelect>
                </Field>
                <Field>
                  <FieldLabel htmlFor="name-input-0090">
                    Name
                  </FieldLabel>
                  <Input
                    id="name-input-0090"
                    placeholder="Ko Aung Kyaw"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email-input-0090">
                    Email
                  </FieldLabel>
                  <Input
                    id="email-input-0090"
                    placeholder="aungkyaw@gmail.com"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="username-input-0090">
                    Username
                  </FieldLabel>
                  <Input
                    id="username-input-0090"
                    placeholder="aungkyaw0019"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="product-status-select-09989">
                    Status
                  </FieldLabel>
                  <NativeSelect>
                    <NativeSelectOption value="active">Active</NativeSelectOption>
                    <NativeSelectOption value="inactive">Inactive</NativeSelectOption>
                    <NativeSelectOption value="banned">Banned</NativeSelectOption>
                  </NativeSelect>
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
