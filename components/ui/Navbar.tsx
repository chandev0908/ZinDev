"use client"

import { useState, useEffect } from "react"
import { Kaushan_Script } from "next/font/google"
import { ModeToggle } from "@/components/ui/ModeToggle"

const kaushan = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
})

const navLinks = [
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Contact", href: "contact" },
]

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero")
      if (!hero) return
      setVisible(hero.getBoundingClientRect().bottom <= 0)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!visible) setIsOpen(false)
  }, [visible])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border transition-all duration-500 ease-in-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <nav className="flex items-center justify-between px-8 py-3 max-w-6xl mx-auto">

        {/* Brand */}
        <button
          onClick={() => scrollToSection("hero")}
          className={`${kaushan.className} text-xl text-foreground bg-transparent border-none cursor-none p-0`}
        >
          Chandev
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-none p-0"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side — resume + mode toggle + hamburger */}
        <div className="flex items-center gap-3">
          {/* Resume button — desktop only */}
          <a
            href="/resume.pdf"
            download="Christian_Dalagan_Resume.pdf"
            data-cursor="Download ↓"
            className="hidden md:inline-flex text-xs px-4 py-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-none"
          >
            View CV/Resume
          </a>

          <ModeToggle />

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden flex-col justify-center gap-1.5 w-8 h-8 bg-transparent border-none cursor-none"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-px bg-foreground block transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-5 h-px bg-foreground block transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-px bg-foreground block transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col list-none m-0 p-0 border-t border-border">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => { scrollToSection(link.href); setIsOpen(false) }}
                className="w-full text-left px-8 py-4 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors border-b border-border bg-transparent border-x-0 border-t-0 cursor-none"
              >
                {link.label}
              </button>
            </li>
          ))}
          {/* Resume in mobile menu */}
          <li>
            <a
              href="/resume.pdf"
              download="Christian_Dalagan_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="block px-8 py-4 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors border-b border-border"
            >
              View CV/Resume ↓
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}