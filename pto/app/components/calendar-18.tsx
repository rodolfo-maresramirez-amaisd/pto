import * as React from "react"

import { Calendar } from "~/components/ui/calendar"

export default function Calendar18() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  )

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="place-self-center rounded-lg border [--cell-size:--spacing(20)] md:[--cell-size:--spacing(20)]"
      buttonVariant="ghost"
    />
  )
}
