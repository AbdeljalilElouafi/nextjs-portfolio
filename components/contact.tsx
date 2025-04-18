"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        const form = e.target as HTMLFormElement
        form.reset()
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" ref={sectionRef} className="section-container bg-secondary/20">
      <h2 className="section-heading scroll-reveal">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="scroll-reveal">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="scroll-reveal border-none shadow-sm bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 flex items-center">
                <div className="p-2 rounded-full bg-theme-blue/10 mr-4">
                  <Mail className="h-5 w-5 text-theme-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">abdeljalilelouafi2@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-reveal border-none shadow-sm bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 flex items-center">
                <div className="p-2 rounded-full bg-theme-purple/10 mr-4">
                  <Phone className="h-5 w-5 text-theme-purple" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+212 767 660 769</p>
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-reveal border-none shadow-sm bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 flex items-center">
                <div className="p-2 rounded-full bg-theme-cyan/10 mr-4">
                  <MapPin className="h-5 w-5 text-theme-cyan" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Casablanca, Morocco</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="scroll-reveal border-none shadow-md bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required disabled={isSubmitting} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="What is this regarding?" required disabled={isSubmitting} />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." rows={5} required disabled={isSubmitting} />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting || isSubmitted}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
