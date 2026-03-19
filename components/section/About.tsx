"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function splitLines(el: HTMLElement) {
  const text = el.innerText
  el.innerHTML = text
    .split("\n")
    .map((line) =>
      line
        .split(" ")
        .map(
          (word) =>
            `<span class="inline-block overflow-hidden"><span class="inline-block reveal-word">${word}</span></span>`
        )
        .join(" ")
    )
    .join("<br/>")
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const exp1Ref = useRef<HTMLDivElement>(null)
  const exp2Ref = useRef<HTMLDivElement>(null)
  const resumeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      )

      const aboutBody = leftRef.current?.querySelector(
        ".about-body"
      ) as HTMLElement
      if (aboutBody) {
        splitLines(aboutBody)
        gsap.fromTo(
          aboutBody.querySelectorAll(".reveal-word"),
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            stagger: 0.025,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: aboutBody,
              start: "top 80%",
            },
          }
        )
      }

      const leftLabel = leftRef.current?.querySelector(".section-label") as HTMLElement | null
      if (leftLabel) {
        gsap.fromTo(
          leftLabel,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: leftLabel, start: "top 80%" },
          }
        )
      }

      const rightLabel = rightRef.current?.querySelector(".section-label") as HTMLElement | null
      if (rightLabel) {
        gsap.fromTo(
          rightLabel,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: rightLabel, start: "top 80%" },
          }
        )
      }

      ;[exp1Ref, exp2Ref].forEach((ref, i) => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: { trigger: ref.current, start: "top 85%" },
          }
        )
      })

      gsap.fromTo(
        resumeRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: resumeRef.current, start: "top 90%" },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="border-b border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2">

        {/* About */}
        <div ref={leftRef} className="px-8 py-16 md:border-r border-border flex flex-col gap-8">
          <div>
            <p className="section-label text-lg font-bold uppercase tracking-widest mb-4 opacity-0">
              About me
            </p>
            <p className="about-body text-sm text-muted-foreground leading-relaxed">
              I&apos;m Christian Dalagan, a self-driven web developer who started
              out building WordPress sites and has since leveled up into
              full-stack development. These days I spend my time crafting web
              apps with Next.js, Node.js, Supabase, and Express — writing clean
              code and sweating the details that most people don&apos;t notice.
            </p>
          </div>

          {/* Resume buttons */}
          <div ref={resumeRef} className="flex items-center gap-3 opacity-0">
            <a
              href="/Christian-Dalagan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="View ↗"
              className="text-xs px-5 py-2.5 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition-colors cursor-none"
            >
              View resume
            </a>
            <a
              href="/Christian-Dalagan-Resume.pdf"
              download="Christian_Dalagan_Resume.pdf"
              data-cursor="Download ↓"
              className="text-xs px-5 py-2.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-none"
            >
              Download resume
            </a>
          </div>
        </div>

        {/* Experience */}
        <div ref={rightRef} className="px-8 py-16">
          <p className="section-label text-lg font-bold uppercase tracking-widest mb-8 opacity-0">
            Experience
          </p>
          <div className="flex flex-col gap-8">
            <div ref={exp1Ref} className="flex gap-4 opacity-0">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground mb-0.5">
                  Web Developer
                </p>
                <p className="text-xs text-muted-foreground mb-0.5">Freelance</p>
                <p className="text-xs text-muted-foreground">
                  June 2024 – Present
                </p>
              </div>
            </div>

            <div ref={exp2Ref} className="flex gap-4 opacity-0">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground mb-0.5">
                  Intern Web Developer
                </p>
                <p className="text-xs text-muted-foreground mb-0.5">
                  PhilTech IT and Digital Solutions
                </p>
                <p className="text-xs text-muted-foreground">
                  June 2024 – July 2026
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}