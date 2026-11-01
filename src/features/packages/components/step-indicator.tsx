import { CalendarClock, CheckCircle2, Info, Shield } from "lucide-react"

export default function StepIndicator({ steps, selectedStep }) {
  const selectedIndex = steps.indexOf(selectedStep)

  return (
    <div className="flex items-center w-full">
      {steps.map((step, index) => {
        const isCompleted = index < selectedIndex
        const isCurrent = index === selectedIndex

        const stepIcons = [
          <Info className="size-5" />,
          <Shield className="size-5" />,
          <CalendarClock className="size-5" />,
        ]

        return (
          <div key={step} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`
                  flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-medium
                  ${isCurrent || isCompleted
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted-foreground/30 text-muted-foreground"
                  }
                `}
              >
                {isCompleted ? <CheckCircle2 className="size-full" /> : stepIcons[index]}
              </div>

              <span className={`whitespace-nowrap text-sm capitalize ${isCurrent ? "font-semibold text-foreground" : "text-muted-foreground"
                }`}>
                {getStepName(step)}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`mx-3 -mt-6 h-1 flex-1 rounded-full ${isCompleted ? "bg-primary" : "bg-border"
                  }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

function getStepName(name) {
  return String(name).replaceAll('_', ' ')
}