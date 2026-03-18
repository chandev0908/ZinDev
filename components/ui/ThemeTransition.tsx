"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

// inject a style tag that freezes all transitions
function freezeTransitions() {
  const style = document.createElement("style")
  style.id = "__theme-freeze__"
  style.textContent = `*, *::before, *::after { transition: none !important; animation: none !important; }`
  document.head.appendChild(style)
}

function unfreezeTransitions() {
  const style = document.getElementById("__theme-freeze__")
  if (style) style.remove()
}

export default function ThemeTransition() {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return

    const handleThemeChange = (e: Event) => {
      const { x, y, nextTheme } = (e as CustomEvent).detail

      const incomingBg = nextTheme === "dark" ? "#141414" : "#FAFAF9"

      const maxDist = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )
      const diameter = maxDist * 2.2

      gsap.killTweensOf(overlay)

      // freeze all CSS transitions so nothing leaks through
      freezeTransitions()

      gsap.set(overlay, {
        background: incomingBg,
        left: x,
        top: y,
        width: 0,
        height: 0,
        x: "-50%",
        y: "-50%",
        borderRadius: "50%",
        opacity: 1,
        pointerEvents: "all",
      })

      const tl = gsap.timeline()

      // expand to cover full screen
      tl.to(overlay, {
        width: diameter,
        height: diameter,
        duration: 0.65,
        ease: "power2.inOut",
      })

      // hold for a frame so theme applies under the overlay
      tl.to({}, { duration: 0.05 })

      // fade out overlay revealing new theme
      tl.to(overlay, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onStart: () => {
          // re-enable transitions just as overlay starts fading out
          unfreezeTransitions()
        },
        onComplete: () => {
          gsap.set(overlay, { pointerEvents: "none", width: 0, height: 0 })
        },
      })
    }

    window.addEventListener("theme-change", handleThemeChange)
    return () => window.removeEventListener("theme-change", handleThemeChange)
  }, [])

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        borderRadius: "50%",
        opacity: 0,
        pointerEvents: "none",
        zIndex: 99999,
      }}
    />
  )
}