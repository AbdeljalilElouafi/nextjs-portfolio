"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Code, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-theme-purple/10 via-transparent to-transparent" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-theme-purple/20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-3 animate-on-scroll opacity-0">
            Welcome to <span className="text-theme-purple">Abd Eljalil's</span> Portfolio
          </p>

          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-theme-purple/10 border border-theme-purple/20 animate-on-scroll opacity-0 shadow-sm">
            <p className="text-theme-cyan font-medium text-lg">Full Stack Developer</p>
          </div>

          <h1 className="animate-on-scroll text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-delay-100">
            Mohammed Abd Eljalil <span className="gradient-text">Elouafi</span>
          </h1>

          <p className="animate-on-scroll text-xl text-muted-foreground mb-8 opacity-0 animate-delay-200">
            Building innovative web solutions from Casablanca, Morocco
          </p>

          <div className="animate-on-scroll flex flex-col sm:flex-row justify-center gap-4 mb-12 opacity-0 animate-delay-300">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-theme-blue to-theme-purple hover:from-theme-purple hover:to-theme-blue transition-all duration-500"
            >
              <Link href="#contact">
                <span className="relative z-10">Get in touch</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-theme-purple/30 hover:border-theme-purple/60"
            >
              <Link href="/api/download-cv" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download CV
              </Link>
            </Button>
          </div>

          <div className="animate-on-scroll flex justify-center space-x-4 opacity-0 animate-delay-400">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-theme-blue/10 hover:text-theme-blue"
            >
              <Link
                href="https://www.linkedin.com/in/abd-eljalil-elouafi-7412771b7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-theme-purple/10 hover:text-theme-purple"
            >
              <Link
                href="https://github.com/AbdeljalilElouafi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-theme-cyan/10 hover:text-theme-cyan"
            >
              <Link
                href="https://leetcode.com/u/AbdeljalilElouafi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <Code className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Simple down arrow scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  )
}
