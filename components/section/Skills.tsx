"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const technical = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React",
  "Next.js", "Node.js", "Express", "Supabase", "Redux",
  "WordPress", "Elementor", "Git", "Tailwind CSS", "Shopify",
]

const soft = [
  "Problem Solving", "Teamwork", "Communication",
  "Adaptability", "Time Management", "Critical Thinking",
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const techTagsRef = useRef<HTMLDivElement>(null)
  const softTagsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // clip-path wipe
      gsap.fromTo(
        sectionRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.1,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      )

      // stagger tech tags
      gsap.fromTo(
        techTagsRef.current?.children ?? [],
        { opacity: 0, scale: 0.7, y: 16 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: techTagsRef.current,
            start: "top 80%",
          },
        }
      )

      // stagger soft tags
      gsap.fromTo(
        softTagsRef.current?.children ?? [],
        { opacity: 0, scale: 0.7, y: 16 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.07,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: softTagsRef.current,
            start: "top 80%",
          },
        }
      )

      // labels
      gsap.utils.toArray<HTMLElement>(".skills-label").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="border-b border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2">

        <div className="px-8 py-16 md:border-r border-border">
          <p className="skills-label text-lg uppercase tracking-widest text-muted-foreground mb-8 opacity-0">
            Technical skills
          </p>
          <div ref={techTagsRef} className="flex flex-wrap gap-2">
            {technical.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors cursor-default opacity-0"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="px-8 py-16">
          <p className="skills-label text-lg uppercase tracking-widest text-muted-foreground mb-8 opacity-0">
            Soft skills
          </p>
          <div ref={softTagsRef} className="flex flex-wrap gap-2">
            {soft.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors cursor-default opacity-0"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}