import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartConfig = {

  companies: {
    label: "Companies",
    color: "var(--chart-6)",
  }
} satisfies ChartConfig

export function MonthlyNewRegisterChart({ title, chartData, dataKey = "month" }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center font-normal text-[14px] text-muted-foreground">{title ?? "Chart Table"}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}  className="h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={dataKey}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="companies" fill="var(--color-companies)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
