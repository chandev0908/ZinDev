"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const technical = [
  "Shopify", "Liquid", "Online Store 2.0", "Sections", "Blocks",
  "JSON Templates", "Metafields", "Shopify CLI", "HTML5", "CSS3",
  "JavaScript", "TypeScript", "ReactJS", "Next.js", "Tailwind CSS",
  "Sass", "WordPress", "WooCommerce", "PHP", "Elementor",
]

const ecommerceTools = [
  "Matrixify", "SparkLayer", "Advanced Shipping Rules", "Candyrack",
  "Pumper", "Klaviyo", "Judge.me", "Google Analytics 4",
  "Google Tag Manager", "Core Web Vitals", "PageSpeed Optimization",
]

const automation = [
  "n8n", "Shopify Flow", "Webhooks", "Google Sheets Integration",
  "Slack Integration", "Pre-order tagging", "Catalog cleanup",
]

const workflow = [
  "Git", "GitHub", "Figma-to-Shopify", "Claude AI", "Codex",
  "CRO", "B2B wholesale operations", "OpenCart-to-Shopify migrations",
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const techTagsRef = useRef<HTMLDivElement>(null)
  const ecommerceTagsRef = useRef<HTMLDivElement>(null)
  const automationTagsRef = useRef<HTMLDivElement>(null)
  const workflowTagsRef = useRef<HTMLDivElement>(null)

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

      gsap.fromTo(
        ecommerceTagsRef.current?.children ?? [],
        { opacity: 0, scale: 0.7, y: 16 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ecommerceTagsRef.current,
            start: "top 80%",
          },
        }
      )

      gsap.fromTo(
        automationTagsRef.current?.children ?? [],
        { opacity: 0, scale: 0.7, y: 16 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: automationTagsRef.current,
            start: "top 80%",
          },
        }
      )

      gsap.fromTo(
        workflowTagsRef.current?.children ?? [],
        { opacity: 0, scale: 0.7, y: 16 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.07,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: workflowTagsRef.current,
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
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4">

        <div className="px-8 py-16 md:border-r border-border">
          <p className="skills-label text-lg uppercase tracking-widest text-muted-foreground mb-8 opacity-0">
            Shopify & front-end
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

        <div className="px-8 py-16 md:border-r border-border">
          <p className="skills-label text-lg uppercase tracking-widest text-muted-foreground mb-8 opacity-0">
            Ecommerce tools
          </p>
          <div ref={ecommerceTagsRef} className="flex flex-wrap gap-2">
            {ecommerceTools.map((tool) => (
              <span
                key={tool}
                className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors cursor-default opacity-0"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="px-8 py-16 md:border-r border-border">
          <p className="skills-label text-lg uppercase tracking-widest text-muted-foreground mb-8 opacity-0">
            Automation
          </p>
          <div ref={automationTagsRef} className="flex flex-wrap gap-2">
            {automation.map((tool) => (
              <span
                key={tool}
                className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors cursor-default opacity-0"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="px-8 py-16">
          <p className="skills-label text-lg uppercase tracking-widest text-muted-foreground mb-8 opacity-0">
            Workflow
          </p>
          <div ref={workflowTagsRef} className="flex flex-wrap gap-2">
            {workflow.map((skill) => (
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
