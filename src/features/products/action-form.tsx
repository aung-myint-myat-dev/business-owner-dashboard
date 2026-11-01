import { useBreadcrumb } from "@/hooks/use-breadcrumb"
import { useEffect, useState } from "react"
import { PRODUCTS, ROUTES } from "./constants"
import { useParams } from "react-router-dom"
import PageHeader from "@/components/app/page-header"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
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
import { BuildingComplexPlus, LoaderCircle } from "lucide-react"

export default function ProductActionForm({ isEdit = false }) {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { setBreadcrumbs } = useBreadcrumb()

  useEffect(() => {
    if (id && isEdit) {
      const foundProduct = PRODUCTS.find(
        (c) => c.id === Number(id)
      )

      setProduct(foundProduct ?? null)
    }
  }, [id, isEdit])

  useEffect(() => {
    setBreadcrumbs([
      { label: "Products", href: ROUTES.INDEX },
      ...(isEdit && product
        ? [
          {
            label: product.name,
            href: ROUTES.EDIT.replace(":id", String(id)),
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
  }, [isEdit, product, id, setBreadcrumbs])

  return (
    <>
      <PageHeader
        title="Create Company"
        description="Fill the form and create new product."
        icon={BuildingComplexPlus} />

      {/* Form */}
      <div className="w-full">
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <div className="grid grid-cols-2 gap-5">
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
                    <Input
                      id="product-status-select-09989"
                      placeholder="Developing"
                      required
                    />
                  </Field>
                </div>
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
            <Field orientation="horizontal" className="justify-end">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="submit">
                {/* <LoaderCircle className="animate-spin" /> */}
                Save</Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </>
  )
}



