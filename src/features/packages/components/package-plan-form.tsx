import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  FieldGroup,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import { Plus, Trash2 } from "lucide-react"

const createPlan = () => ({
  id: crypto.randomUUID(),
  duration: "",
  price: "",
})

export default function PackagePlanForm({ plans, setPlans }) {
  const addPlanRef = useRef(null)

  const addPlan = () => {
    setPlans((prev) => [...prev, createPlan()])
  }

  const removePlan = (id) => {
    setPlans((prev) => prev.filter((plan) => plan.id !== id))
  }

  const updatePlan = (id, field, value) => {
    setPlans((prev) =>
      prev.map((plan) =>
        plan.id === id
          ? { ...plan, [field]: value }
          : plan
      )
    )
  }

  useEffect(() => {
    if (plans.length > 0) {
      addPlanRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      })
    }
  }, [plans.length])

  return (
    <FieldGroup>
      <FieldSet>
        <div className="space-y-3">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className="group flex items-center gap-2 rounded-lg border border-input p-2 transition-colors focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20"
            >
              {/* Index */}
              <div className="flex size-6 shrink-0 items-center justify-center rounded bg-muted text-xs font-medium text-muted-foreground">
                {index + 1}
              </div>

              {/* Input Group */}
              <div className="flex min-w-0 flex-1 items-center gap-2 divide-x divide-border">
                <NativeSelect
                  value={plan.duration}
                  onChange={(e) =>
                    updatePlan(plan.id, "duration", e.target.value)
                  }
                  className="min-w-0 flex-1 [&_select]:!border-0 [&_select]:!outline-none [&_select]:!ring-0 [&_select]:!shadow-none [&_select]:focus:!border-0 [&_select]:focus-visible:!border-0 [&_select]:focus-visible:!ring-0"
                >
                  <NativeSelectOption value="" disabled>
                    Select plan
                  </NativeSelectOption>
                  <NativeSelectOption value="1">One Month</NativeSelectOption>
                  <NativeSelectOption value="2">Two Months</NativeSelectOption>
                  <NativeSelectOption value="3">Three Months</NativeSelectOption>
                  <NativeSelectOption value="6">Six Months</NativeSelectOption>
                  <NativeSelectOption value="12">One Year</NativeSelectOption>
                </NativeSelect>

                <Input
                  type="number"
                  min="0"
                  placeholder="Price / month"
                  value={plan.price}
                  onChange={(e) =>
                    updatePlan(plan.id, "price", e.target.value)
                  }
                  className="w-32 shrink-0 border-none shadow-none outline-none ring-0 focus:!border-0 focus:!outline-none focus:!ring-0 focus-visible:!border-0 focus-visible:!outline-none focus-visible:!ring-0"
                />
              </div>

              {/* Delete Button */}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-8 shrink-0 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                onClick={() => removePlan(plan.id)}
                aria-label={`Remove plan ${index + 1}`}
              >
                <Trash2 className="size-4" />
              </Button>
            </div>
          ))}

          <Button
            ref={addPlanRef}
            type="button"
            variant="outline"
            className="w-full"
            onClick={addPlan}
          >
            <Plus /> Add Plan
          </Button>
        </div>
      </FieldSet>
    </FieldGroup>
  )
}
