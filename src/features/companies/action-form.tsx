import { useBreadcrumb } from "@/hooks/use-breadcrumb"
import { useEffect, useState } from "react"
import { COMPANIES, ROUTES } from "./constants"
import { useParams } from "react-router-dom"
import PageHeader from "@/components/app/page-header"
import { BuildingComplexPlus, LoaderCircle } from "lucide-react"

export default function CompanyActionForm({ isEdit = false }) {
  const { id } = useParams()
  const [company, setCompany] = useState(null)
  const { setBreadcrumbs } = useBreadcrumb()

  useEffect(() => {
    if (id && isEdit) {
      const foundCompany = COMPANIES.find(
        (c) => c.id === Number(id)
      )

      setCompany(foundCompany ?? null)
    }
  }, [id, isEdit])

  useEffect(() => {
    setBreadcrumbs([
      { label: "Companies", href: ROUTES.INDEX },
      ...(isEdit && company
        ? [
          {
            label: company.name,
            href: ROUTES.EDIT.replace(":id", id),
          },
        ]
        : []),
      {
        label: isEdit ? "Edit" : "Create",
        href: isEdit
          ? ROUTES.EDIT.replace(":id", String(id))
          : ROUTES.CREATE,
      },
    ])

    return () => setBreadcrumbs([])
  }, [isEdit, company, id, setBreadcrumbs])

  return (
    <>
      <PageHeader
        title="Create Company"
        description="Fill the form and create new company."
        icon={BuildingComplexPlus} />

      {/* Form */}
      <div className="w-full">
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <div className="grid grid-cols-2 gap-5">
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
                </div>

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
            <Field orientation="horizontal" className="justify-end">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="submit">
                <LoaderCircle className="animate-spin"/>
                Save</Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </>
  )
}


import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const months = [
  { label: "MM", value: null },
  { label: "01", value: "01" },
  { label: "02", value: "02" },
  { label: "03", value: "03" },
  { label: "04", value: "04" },
  { label: "05", value: "05" },
  { label: "06", value: "06" },
  { label: "07", value: "07" },
  { label: "08", value: "08" },
  { label: "09", value: "09" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
]

const years = [
  { label: "YYYY", value: null },
  { label: "2024", value: "2024" },
  { label: "2025", value: "2025" },
  { label: "2026", value: "2026" },
  { label: "2027", value: "2027" },
  { label: "2028", value: "2028" },
  { label: "2029", value: "2029" },
]
