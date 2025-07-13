"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when the path changes
    window.scrollTo(0, 0)
  }, [pathname])

  return null // This component doesn't render anything
}
