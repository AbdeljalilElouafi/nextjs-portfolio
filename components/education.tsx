"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const educationItems = [
  {
    title: "Full Stack Development",
    institution: "YouCode, Youssoufia",
    period: "Oct 2024 – Present",
    description: "Comprehensive training in full-stack web development technologies and methodologies.",
  },
  {
    title: "Data Science",
    institution: "ALX, Casablanca",
    period: "Oct 2023 – Present",
    description: "Specialized training in data science, machine learning, and data analysis techniques.",
  },
  {
    title: "Bachelor's Degree in Life & Earth Sciences",
    institution: "FP Beni Mellal",
    period: "Jul 2023",
    description: "Foundational education in scientific principles and research methodologies.",
  },
  {
    title: "High School Diploma in SVT",
    institution: "Beni Mellal",
    period: "Jun 2019",
    description: "Secondary education with focus on life and earth sciences.",
  },
]

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null)

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
    <section id="education" ref={sectionRef} className="section-container bg-secondary/20">
      <h2 className="section-heading scroll-reveal">Education</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-theme-blue via-theme-purple to-theme-cyan hidden md:block" />

        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <div key={index} className="scroll-reveal md:pl-12 relative">
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-8 h-8 rounded-full bg-card flex items-center justify-center border-2 border-theme-purple hidden md:flex">
                <GraduationCap className="h-4 w-4 text-theme-purple" />
              </div>

              <Card className="border-none shadow-md bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {item.period}
                    </div>
                  </div>
                  <p className="text-sm text-theme-cyan">{item.institution}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
