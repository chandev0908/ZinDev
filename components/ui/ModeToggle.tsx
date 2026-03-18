"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

interface ModeToggleProps {
  size?: number
}

export function ModeToggle({ size = 4 }: ModeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme()

  function handleToggle(e: React.MouseEvent<HTMLButtonElement>) {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark"

    window.dispatchEvent(
      new CustomEvent("theme-change", {
        detail: {
          x: e.clientX,
          y: e.clientY,
          nextTheme,
        },
      })
    )

    setTimeout(() => {
      setTheme(nextTheme)
    }, 650)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="cursor-none relative"
      style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
    >
      <Sun
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
      />
      <Moon
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}