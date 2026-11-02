"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A linear line chart"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

export const financeData = [
  { month: "January", expense: 200000, profit: 300000 },
  { month: "February", expense: 250000, profit: 350000 },
  { month: "March", expense: 180000, profit: 420000 },
  { month: "April", expense: 300000, profit: 380000 },
  { month: "May", expense: 220000, profit: 450000 },
  { month: "June", expense: 280000, profit: 500000 },
  { month: "July", expense: 350000, profit: 480000 },
  { month: "August", expense: 260000, profit: 550000 },
  { month: "September", expense: 320000, profit: 600000 },
  { month: "October", expense: 290000, profit: 580000 },
  { month: "November", expense: 380000, profit: 650000 },
  { month: "December", expense: 400000, profit: 720000 },
]

const chartConfig = {
  expense: {
    label: "Expense",
    color: "red",
  },
  profit: {
    label: "Profit",
    color: "green",
  },
} satisfies ChartConfig

export function FinanceChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-[14px] font-normal text-muted-foreground text-center">Finanace</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full max-h-[200px]">
          <LineChart
            accessibilityLayer
            data={financeData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="expense"
              type="linear"
              stroke="var(--color-expense)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="profit"
              type="linear"
              stroke="var(--color-profit)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
