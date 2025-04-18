"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Layers, Terminal, Palette, GitBranch } from "lucide-react"

const skillCategories = [
  {
    name: "Languages",
    icon: <Code2 className="h-5 w-5" />,
    skills: ["PHP (OOP)", "Python", "JavaScript", "HTML", "CSS", "MySQL", "ReactJS"],
  },
  {
    name: "Frameworks",
    icon: <Layers className="h-5 w-5" />,
    skills: ["Laravel", "Bootstrap", "TailwindCSS", "Next.js", "Node.js"],
  },
  {
    name: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    name: "Tools",
    icon: <Terminal className="h-5 w-5" />,
    skills: ["Jira", "Git", "Docker"],
  },
  {
    name: "Data Analysis",
    icon: <Palette className="h-5 w-5" />,
    skills: ["Power BI"],
  },
  {
    name: "Modeling",
    icon: <GitBranch className="h-5 w-5" />,
    skills: ["UML"],
  },
]

export default function Skills() {
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
              }, index * 100)
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
    <section id="skills" ref={sectionRef} className="section-container">
      <h2 className="section-heading scroll-reveal">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="scroll-reveal border-none shadow-md bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <div className="mr-3 p-3 rounded-lg bg-gradient-to-br from-theme-blue/20 to-theme-purple/20">
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-badge"
                    style={{
                      animationDelay: `${skillIndex * 100}ms`,
                      animationDuration: "0.5s",
                      animationFillMode: "both",
                      animationName: "fadeIn",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
