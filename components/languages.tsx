"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

const languages = [
  {
    name: "Arabic",
    level: "Native",
    proficiency: 100,
  },
  {
    name: "French",
    level: "B1",
    proficiency: 65,
  },
  {
    name: "English",
    level: "C1",
    proficiency: 85,
  },
]

export default function Languages() {
  const sectionRef = useRef<HTMLElement>(null)
  const progressRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".scroll-reveal")
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("revealed")
              }, index * 150)
            })

            // Animate progress bars
            progressRefs.current.forEach((ref, index) => {
              if (ref) {
                setTimeout(() => {
                  ref.style.width = `${languages[index].proficiency}%`
                }, index * 200)
              }
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="languages" ref={sectionRef} className="section-container">
      <h2 className="section-heading scroll-reveal">Languages</h2>

      <div className="max-w-2xl mx-auto">
        <Card className="scroll-reveal border-none shadow-md bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6 space-y-6">
            {languages.map((language, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{language.name}</span>
                  <span className="text-muted-foreground">{language.level}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    ref={(el) => (progressRefs.current[index] = el)}
                    className="h-full rounded-full bg-gradient-to-r from-theme-blue to-theme-purple transition-all duration-1000 ease-out"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
