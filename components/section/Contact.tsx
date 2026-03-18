"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const socials = [
  { name: "GitHub", handle: "@chandev0908", href: "https://github.com/chandev0908" },
  { name: "LinkedIn", handle: "Christian Dalagan", href: "https://www.linkedin.com/in/christian-dalagan-b791651b6/" },
  { name: "Email", handle: "chandev0908@gmail.com", href: "mailto:chandev0908@gmail.com" },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const socialsRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const { name, email, subject, message } = form
    window.location.href = `mailto:christiandalagan@gmail.com?subject=${encodeURIComponent(subject || "Portfolio inquiry")}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
  }

  useEffect(() => {
    const ctx = gsap.context(() => {

      // clip-path wipe left to right
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
          },
        }
      )

      // heading character split
      const heading = headingRef.current
      if (heading) {
        const words = heading.innerText.split(" ")
        heading.innerHTML = words
          .map((w) => `<span class="inline-block overflow-hidden"><span class="inline-block h-word">${w}</span></span>`)
          .join(" ")

        gsap.fromTo(
          heading.querySelectorAll(".h-word"),
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power4.out",
            scrollTrigger: { trigger: heading, start: "top 80%" },
          }
        )
      }

      // socials slide in
      gsap.fromTo(
        socialsRef.current?.children ?? [],
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: socialsRef.current, start: "top 80%" },
        }
      )

      // form fade up
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: formRef.current, start: "top 85%" },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="border-b border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2">

        <div className="px-8 py-16 md:border-r border-border">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Get in touch
          </p>
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl font-medium text-foreground mb-4 leading-tight"
          >
            Let&apos;s work together.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-10">
            Open to freelance projects, collaborations, or just a good conversation about web development.
          </p>

          <div ref={socialsRef} className="flex flex-col gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Open ↗"
                className="flex items-center justify-between px-4 py-3 border border-border rounded-lg hover:bg-secondary transition-colors group cursor-none opacity-0"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{social.name}</p>
                  <p className="text-xs text-muted-foreground">{social.handle}</p>
                </div>
                <span className="text-muted-foreground text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="px-8 py-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
            Send a message
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5 opacity-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="px-3 py-2.5 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required className="px-3 py-2.5 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} placeholder="What is this about?" className="px-3 py-2.5 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required rows={5} className="px-3 py-2.5 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none" />
            </div>
            <button
              type="submit"
              data-cursor="Send ↗"
              className="w-full py-3 text-sm font-medium bg-foreground text-background rounded-md hover:opacity-85 transition-opacity cursor-none"
            >
              Send message
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}