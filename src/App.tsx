
import { useState, useEffect } from "react"
import { Sun, Sunset, Moon } from "lucide-react"
import { Button } from "./components/ui/button"
import { Link } from "react-router-dom"

export default function App({ name = "Admin" }) {
  const [hour, setHour] = useState(new Date().getHours())

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().getHours())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
        ? "Good Afternoon"
        : "Good Evening"

  const Icon = hour < 12 ? Sun : hour < 17 ? Sunset : Moon

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-4 text-center py-6">
      <div className="flex size-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="size-11" />
      </div>

      <div className="space-y-2">
        <p className="text-lg font-medium text-muted-foreground">
          {greeting},
        </p>

        <h1 className="text-4xl flex items-center gap-3 justify-center my-4 font-bold tracking-tight sm:text-5xl">
          {name}
          <div className="animate-bounce">
            👋
          </div>
        </h1>

        <p className="mx-auto max-w-lg text-sm text-muted-foreground">
          Welcome back! Here's what's happening with your business today.
        </p>

        <Button render={
          <Link to="/ophir">Go to Dashboard</Link>
        } />
      </div>
    </div>
  )
}
