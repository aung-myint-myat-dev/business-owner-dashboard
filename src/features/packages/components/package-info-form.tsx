import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

export default function PackageInfoForm() {
  return (
    <FieldGroup>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="product-select-09989">
              Select Product
            </FieldLabel>
            <NativeSelect>
              <NativeSelectOption value="hr-software">HR Software</NativeSelectOption>
              <NativeSelectOption value="apple">Accounting</NativeSelectOption>
              <NativeSelectOption value="banana">POS</NativeSelectOption>
            </NativeSelect>
          </Field>
          <Field>
            <FieldLabel htmlFor="package-name-input-0090">
              Package Name
            </FieldLabel>
            <Input
              id="package-name-input-0090"
              placeholder="Start Up"
              required
            />
          </Field>
        </FieldGroup>
      </FieldSet>
    </FieldGroup>
  )
}