"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "YouCamp – Booking Platform",
    description:
      "Booking platform for rural camping spots in Morocco. Features advanced search, Laravel backend, vanilla JS frontend, and TailwindCSS design.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0bc1b93bf623a878d304444b40559098.jpg-FYiPOyCL7nV84Zuv3PUMAyda3wjdlW.jpeg",
    tags: ["Laravel", "JavaScript", "TailwindCSS", "MySQL"],
    github: "https://github.com/AbdeljalilElouafi/YouCamp-Fil-Rouge/",
    demo: "#",
  },
  {
    title: "Eventbrite Clone – Event Management App",
    description:
      "Users can create, manage, and track events. Built collaboratively with Git, using PHP OOP, JS, and Tailwind.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f70c35453ed0bb4092fbec9bfed94cb0.jpg-52A9aCBI7iH3V2eJZQBCI3j3R5v3Yi.jpeg",
    tags: ["PHP", "OOP", "JavaScript", "TailwindCSS"],
    github: "https://github.com/mustapha-moutaki/eventHub-platforme",
    demo: "#",
  },
]

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="section-container bg-secondary/20">
      <h2 className="section-heading scroll-reveal">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="scroll-reveal overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <Button asChild size="sm" variant="secondary" className="rounded-full">
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    View Project
                  </Link>
                </Button>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-xl group-hover:text-theme-cyan transition-colors duration-300">
                {project.title}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    className="bg-gradient-to-r from-theme-blue/70 to-theme-purple/70 hover:from-theme-purple/70 hover:to-theme-blue/70 text-white border-none transition-all duration-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button asChild variant="ghost" size="sm" className="hover:text-theme-purple">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="hover:text-theme-blue">
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
