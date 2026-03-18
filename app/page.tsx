import Navbar from "@/components/ui/Navbar"
import Hero from "@/components/section/Hero"
import About from "@/components/section/About"
import Skills from "@/components/section/Skills"
import Projects from "@/components/section/Projects"
import Contact from "@/components/section/Contact"
 
export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <footer className="py-8 px-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Christian Dalagan. All rights reserved.
        </footer>
      </main>
    </>
  )
}
 