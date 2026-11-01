import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Plus, Trash2 } from "lucide-react"
import { useEffect, useRef } from "react"

const createLimit = () => ({
  id: crypto.randomUUID(),
  name: "",
})

export default function PackageLimitForm({ limits, setLimits }) {
  const addLimitRef = useRef(null)
  const addLimit = () => {
    setLimits((prev) => [...prev, createLimit()])
  }

  const removeLimit = (id) => {
    setLimits((prev) => prev.filter((limit) => limit.id !== id))
  }

  const updateLimit = (id, value) => {
    setLimits((prev) =>
      prev.map((limit) =>
        limit.id === id
          ? { ...limit, name: value }
          : limit
      )
    )
  }

  useEffect(() => {
    if (limits.length > 3) {
      addLimitRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      })
    }
  }, [limits.length])

  return (
    <FieldGroup>
      <FieldSet>
        <div className="space-y-3">
          {limits.map((limit, index) => (
            <div className="group flex items-center gap-2 rounded-lg border border-input p-2 transition-colors focus-within:border-ring focus-within:ring-1 focus-within:ring-ring/20">
              {/* Index */}
              <div className="flex size-8 shrink-0 items-center justify-center rounded bg-muted text-xs font-medium text-muted-foreground">
                {index + 1}
              </div>

              {/* Form Input */}
              <Field className="flex-1">
                <Input
                  placeholder="e.g. Up to 500 Users"
                  className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </Field>

              {/* Delete Button */}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-8 shrink-0 text-muted-foreground hover:text-destructive"
                onClick={() => removeLimit(limit.id)}
              >
                <Trash2 className="size-4" />
              </Button>
            </div>
          ))}
        </div>

        <Button
          ref={addLimitRef}
          type="button"
          variant="outline"
          className="w-full"
          onClick={addLimit}
        >
          <Plus /> Add Limit
        </Button>
      </FieldSet>
    </FieldGroup >
  )
}
