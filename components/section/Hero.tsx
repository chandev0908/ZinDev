"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Kaushan_Script } from "next/font/google"
import { ModeToggle } from "@/components/ui/ModeToggle"
import { Mouse } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const kaushan = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
})

function scrollToSection(id: string) {
  const lenis = (window as any).__lenis
  const el = document.getElementById(id)
  if (!el) return
  if (lenis) {
    lenis.scrollTo(el, { offset: -80, duration: 1.6 })
  } else {
    el.scrollIntoView({ behavior: "smooth" })
  }
}

const navLinks = [
  { label: "About me", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Contact", href: "contact" },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const pillsRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      // eyebrow
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.2
      )

      // split name into characters — use padding instead of overflow hidden
      const nameEl = nameRef.current
      if (nameEl) {
        const text = nameEl.textContent || ""
        nameEl.innerHTML = text
          .split("")
          .map((char) =>
            char === " "
              ? "&nbsp;"
              : `<span class="inline-block char" style="display:inline-block; padding-bottom:0.15em;">${char}</span>`
          )
          .join("")

        tl.fromTo(
          nameEl.querySelectorAll(".char"),
          { y: 80, opacity: 0, rotateZ: 8 },
          {
            y: 0,
            opacity: 1,
            rotateZ: 0,
            duration: 0.9,
            stagger: 0.06,
            ease: "power4.out",
          },
          0.4
        )
      }

      // tagline words — no overflow hidden wrapper
      const taglineEl = taglineRef.current
      if (taglineEl) {
        const words = taglineEl.textContent?.split(" ") || []
        taglineEl.innerHTML = words
          .map((w) => `<span class="inline-block word" style="margin-right:0.25em;">${w}</span>`)
          .join("")

        tl.fromTo(
          taglineEl.querySelectorAll(".word"),
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.07,
            ease: "power3.out",
          },
          0.9
        )
      }

      // pills
      tl.fromTo(
        pillsRef.current?.children ?? [],
        { opacity: 0, y: 20, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.4)",
        },
        1.2
      )

      // scroll indicator
      tl.fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        1.6
      )

      // pulsing scroll line
      gsap.to(".scroll-line", {
        scaleY: 1.5,
        transformOrigin: "top",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })

      // parallax on scroll
      gsap.to(sectionRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Mode toggle top right */}
      <div className="absolute top-6 right-8">
        <ModeToggle size={8}/>
      </div>

      {/* Eyebrow */}
      <p
        ref={eyebrowRef}
        className="text-sm uppercase tracking-widest text-muted-foreground mb-6 opacity-0"
      >
        Christian Dalagan
      </p>

      {/* Name — extra vertical padding so descenders aren't clipped */}
      <h1
        ref={nameRef}
        className={`${kaushan.className} text-8xl md:text-[10rem] lg:text-[12rem] text-foreground leading-none mb-4`}
        style={{ paddingBottom: "0.1em", paddingTop: "0.05em" }}
      >
        Chandev
      </h1>

      {/* Tagline */}
      <p
        ref={taglineRef}
        className="text-base md:text-lg text-muted-foreground mb-12"
      >
        Developer who cares about the details.
      </p>

      {/* Nav pills */}
      <div
        ref={pillsRef}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {navLinks.map((link, i) => (
          <button
            key={link.label}
            onClick={() => scrollToSection(link.href)}
            data-cursor="Go ↗"
            className={`text-sm px-6 py-2.5 rounded-full border border-border transition-colors bg-transparent cursor-none ${
              i === 0
                ? "text-foreground font-medium hover:bg-secondary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="flex flex-col items-center gap-2 mt-16 opacity-0"
      >
        <div className="scroll-line w-px h-10 bg-border" />
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <Mouse className="w-8 h-8 text-muted-foreground animate-bounce" />
      </div>
    </section>
  )
}