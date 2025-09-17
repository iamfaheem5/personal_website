"use client"

import { useEffect } from "react"

interface CalendlyWidgetProps {
  url?: string
}

export function CalendlyWidget({ url = "https://calendly.com/mapfix/30min" }: CalendlyWidgetProps) {
  useEffect(() => {
    const head = document.querySelector("head")
    const script = document.createElement("script")
    script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js")
    script.setAttribute("type", "text/javascript")
    head?.appendChild(script)

    return () => {
      // Clean up
      head?.removeChild(script)
    }
  }, [])

  return (
    <div 
      className="calendly-inline-widget" 
      data-url={url}
      style={{ minWidth: "320px", height: "630px" }} 
    />
  )
}