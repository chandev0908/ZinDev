"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { title } from "process";
import { CopyIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "FitLog",
    description:
      "A full-stack fitness tracking app to log workouts, track PRs, upload progress photos, and document your fitness journey.",
    stack: ["Next.js", "Typescript", "Supabase", "Tailwind", "Nodejs"],
    category: "Next.js",
    href: "https://fitlog-tracker.vercel.app",
    image: "/projects/Fitlog-project.png",
  },
  {
    title: "Z-Animedex 2.0",
    description:
      "An improved version of my old Z-Animedex app with a better UI",
    stack: ["Next.js", "JikanApi", "Zustand", "Tailwind"],
    category: "Next.js",
    href: "https://z-animedex-v2.vercel.app",
    image: "/projects/Z-Animedex-project.png",
  },
  {
    title: "Chanfinds",
    description:
      "Password: chanfinds\n  .A shopify custom theme I made to showcase my shopify skills. It features a clean, modern design with smooth animations and a custom cursor.",
    stack: ["Shopify", "Liquid", "CSS", "Javascript"],
    category: "Shopify",
    href: "https://chanfinds-2.myshopify.com",
    image: "/projects/Shopify-chanfinds-project.png",
    password: "chanfinds",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const filterBarRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("All");

  // derive filters dynamically — only show categories that exist in projects
  const filters = useMemo(() => {
    const categories = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...categories];
  }, []);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  function moveIndicator(btn: HTMLButtonElement) {
    const bar = filterBarRef.current;
    const indicator = indicatorRef.current;
    if (!bar || !indicator) return;
    const barRect = bar.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    gsap.to(indicator, {
      x: btnRect.left - barRect.left,
      width: btnRect.width,
      duration: 0.35,
      ease: "power3.inOut",
    });
  }

  function handleFilter(label: string, btn: HTMLButtonElement) {
    if (label === active) return;
    moveIndicator(btn);

    const cards = gridRef.current?.children;
    if (!cards) return;

    gsap.to(cards, {
      opacity: 0,
      y: 16,
      scale: 0.97,
      duration: 0.2,
      stagger: 0.03,
      ease: "power2.in",
      onComplete: () => setActive(label),
    });
  }

  // animate cards in after filter changes
  useEffect(() => {
    const cards = gridRef.current?.children;
    if (!cards) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 24, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        stagger: 0.07,
        ease: "power3.out",
      },
    );
  }, [active]);

  // set initial indicator on mount
  useEffect(() => {
    const bar = filterBarRef.current;
    const indicator = indicatorRef.current;
    if (!bar || !indicator) return;
    const firstBtn = bar.querySelector("button") as HTMLButtonElement;
    if (!firstBtn) return;
    const barRect = bar.getBoundingClientRect();
    const btnRect = firstBtn.getBoundingClientRect();
    gsap.set(indicator, {
      x: btnRect.left - barRect.left,
      width: btnRect.width,
    });
  }, []);

  // scroll reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 1 },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 0.9,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        filterBarRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: filterBarRef.current,
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="border-b border-border">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <p
          ref={titleRef}
          className="text-lg font-bold uppercase tracking-widest mb-10"
          style={{ clipPath: "inset(0 100% 0 0)" }}
        >
          Projects
        </p>

        {/* Filter bar — only renders categories with actual projects */}
        <div
          ref={filterBarRef}
          className="relative flex items-center gap-1 mb-10 opacity-0 flex-wrap"
        >
          <div
            ref={indicatorRef}
            className="absolute top-0 left-0 h-full bg-secondary border border-border rounded-full pointer-events-none"
            style={{ width: 0 }}
          />
          {filters.map((label) => (
            <button
              key={label}
              onClick={(e) => handleFilter(label, e.currentTarget)}
              className={`relative z-10 text-xs px-4 py-2 rounded-full transition-colors cursor-none ${
                active === label
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 gap-px bg-border">
          {filtered.map((project) => (
            <a
              key={project.title}
              href={project.href}
              data-cursor="View ↗"
              className="group bg-background p-8 flex flex-col gap-4 hover:bg-secondary transition-colors cursor-none"
            >
              {/* password badge — only shows if project has a password */}
              {project.password && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Password
                  </span>
                  <code className="text-[10px] px-2 py-0.5 rounded bg-muted text-foreground border border-border">
                    {project.password}
                  </code>
                </div>
              )}
              <div className="w-full aspect-video bg-muted rounded-sm overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover proj-thumb scale-110 group-hover:scale-100 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">
                    {project.title}
                  </p>
                  <span className="text-muted-foreground text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
