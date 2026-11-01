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
import { Box, Package, Plus } from "lucide-react"
import { useState } from "react"
import PackageInfoForm from "./components/package-info-form"
import PackageLimitForm from "./components/package-limit-form"
import PackagePlanForm from "./components/package-plan-form"
import StepIndicator from "./components/step-indicator"

const STEPS = [
  "info",
  "limits",
  "plans",
]

export function PackageActionFormDialog() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [limits, setLimits] = useState([])
  const [plans, setPlans] = useState([])

  const currentStep = STEPS[currentStepIndex]

  const handleNextStep = () => {
    setCurrentStepIndex((prev) =>
      Math.min(prev + 1, STEPS.length - 1)
    )
  }

  const handleResetStep = (open: boolean) => {
    if (!open) {
      setCurrentStepIndex(0)
    }
  }

  const handlePrevStep = () => {
    setCurrentStepIndex((prev) =>
      Math.max(prev - 1, 0)
    )
  }

  return (
    <Dialog onOpenChange={handleResetStep}>
      <DialogTrigger render={<Button><Plus /> New Package</Button>} />

      <DialogContent className="sm:max-w-2xl max-h-sm" showCloseButton={false}>
        <DialogHeader>
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Package size={20} className="text-muted-foreground" />
            </div>

            {/* Text */}
            <div className="min-w-0 space-y-1">
              <h2 className="text-base font-semibold tracking-tight">
                Create Package
              </h2>

              <p className="text-sm leading-relaxed text-muted-foreground">
                Fill the form here.
                {currentStep === STEPS[0] && ' Click next to fill limitations.'}
                {currentStep === STEPS[1] && ' Click next to fill plans and pricings.'}
                {currentStep === STEPS[2] && ' Click save when your\'re done.'}
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="p-5 bg-muted/50 rounded-xl">
          <StepIndicator steps={STEPS} selectedStep={STEPS[currentStepIndex]} />
        </div>

        <div className="max-h-[50vh] overflow-y-auto no-scrollbar p-2">

          {currentStep === STEPS[0] && <PackageInfoForm />}

          {currentStep === STEPS[1] && <PackageLimitForm limits={limits} setLimits={setLimits} />}

          {currentStep === STEPS[2] && <PackagePlanForm plans={plans} setPlans={setPlans} />}

        </div>

        <DialogFooter>
          <DialogClose render={<Button variant="outline">Cancel</Button>} />

          {currentStepIndex > 0 && (
            <Button variant="outline" onClick={handlePrevStep}>
              Previous
            </Button>
          )}


          {currentStepIndex < STEPS.length - 1 ? (
            <Button onClick={handleNextStep}>
              Next
            </Button>
          ) : (
            <Button type="button">
              Save Package
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}