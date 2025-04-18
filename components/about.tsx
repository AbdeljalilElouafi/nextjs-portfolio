"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users } from "lucide-react"

export default function About() {
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
    <section id="about" ref={sectionRef} className="section-container">
      <h2 className="section-heading scroll-reveal">About Me</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="scroll-reveal">
          <div className="relative w-full max-w-md mx-auto">
            <div className="image-glow">
              <div className="image-frame relative overflow-hidden rounded-2xl aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c901cb3f-9c9e-42da-84ca-4bee968e8a99.jpg-Ukg9bLycMlAppAhFPxsklDGcK2J6U6.jpeg"
                  alt="Mohammed Elouafi at GITEX"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Decorative elements */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground scroll-reveal">
            I am a passionate Full-Stack Developer with a strong foundation in software development and a focus on the
            IT and technology industry. My expertise lies in both front-end and back-end development, and I'm driven by
            a continuous desire to enhance my skills in communication and technology.
          </p>

          <p className="text-lg text-muted-foreground scroll-reveal">
            I believe that the power of effective communication is essential to building successful software solutions
            and fostering teamwork.
          </p>

          <p className="text-lg text-muted-foreground scroll-reveal">
            A significant milestone in my career was completing the ALX Data Science Training, where I gained valuable
            insights into data science and its application in real-world problem-solving. Currently, I am further
            expanding my expertise through ongoing training at YouCode, powered by Simplon, to stay ahead in the
            ever-evolving world of technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <Card className="scroll-reveal bg-secondary/50 border-none hover:bg-secondary/70 transition-colors">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-theme-blue/10 flex items-center justify-center mb-3">
                  <Code className="h-6 w-6 text-theme-blue" />
                </div>
                <h3 className="font-medium">Development</h3>
                <p className="text-sm text-muted-foreground">Full-stack expertise</p>
              </CardContent>
            </Card>

            <Card className="scroll-reveal bg-secondary/50 border-none hover:bg-secondary/70 transition-colors">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-theme-purple/10 flex items-center justify-center mb-3">
                  <Lightbulb className="h-6 w-6 text-theme-purple" />
                </div>
                <h3 className="font-medium">Innovation</h3>
                <p className="text-sm text-muted-foreground">Creative solutions</p>
              </CardContent>
            </Card>

            <Card className="scroll-reveal bg-secondary/50 border-none hover:bg-secondary/70 transition-colors">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-theme-cyan/10 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-theme-cyan" />
                </div>
                <h3 className="font-medium">Collaboration</h3>
                <p className="text-sm text-muted-foreground">Team player</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
