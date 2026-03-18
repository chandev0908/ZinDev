"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current
    if (!dot || !ring || !label) return

    let mouseX = 0
    let mouseY = 0

    // hide default cursor
    document.documentElement.style.cursor = "none"

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power3.out",
      })

      gsap.to(ring, {
        x: mouseX,
        y: mouseY,
        duration: 0.45,
        ease: "power3.out",
      })

      gsap.to(label, {
        x: mouseX + 20,
        y: mouseY + 20,
        duration: 0.3,
        ease: "power3.out",
      })
    }

    // hover on links / buttons — expand ring
    const onEnterLink = (e: Event) => {
      const target = e.currentTarget as HTMLElement
      const cursorLabel = target.dataset.cursor

      gsap.to(ring, {
        scale: 2.5,
        opacity: 0.6,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(dot, { scale: 0, duration: 0.2 })

      if (cursorLabel) {
        label.textContent = cursorLabel
        gsap.to(label, { opacity: 1, scale: 1, duration: 0.2 })
      }
    }

    const onLeaveLink = () => {
      gsap.to(ring, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(dot, { scale: 1, duration: 0.2 })
      gsap.to(label, { opacity: 0, scale: 0.8, duration: 0.15 })
    }

    const attachListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, [data-cursor]"
      )
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", onEnterLink)
        el.addEventListener("mouseleave", onLeaveLink)
      })
      return interactives
    }

    let interactives = attachListeners()

    // re-attach when DOM changes
    const observer = new MutationObserver(() => {
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink)
        el.removeEventListener("mouseleave", onLeaveLink)
      })
      interactives = attachListeners()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    window.addEventListener("mousemove", onMove)

    return () => {
      window.removeEventListener("mousemove", onMove)
      observer.disconnect()
      document.documentElement.style.cursor = ""
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-foreground pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] w-8 h-8 rounded-full border border-foreground pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      {/* Label */}
      <div
        ref={labelRef}
        className="fixed top-0 left-0 z-[9997] text-[10px] uppercase tracking-widest text-foreground pointer-events-none opacity-0 scale-90 bg-background/80 px-2 py-1 rounded"
      />
    </>
  )
}