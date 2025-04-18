"use client"

import { useEffect, useState } from "react"

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart)
      el.addEventListener("mouseleave", handleHoverEnd)
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart)
        el.removeEventListener("mouseleave", handleHoverEnd)
      })
    }
  }, [])

  // Only show on non-touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(true)

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  if (isTouchDevice || !isVisible) return null

  return (
    <div
      className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-150 ease-out ${
        isHovering ? "scale-[2.5]" : "scale-100"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "24px",
        height: "24px",
        backgroundColor: "white",
        transform: `translate(-50%, -50%) ${isHovering ? "scale(2.5)" : "scale(1)"}`,
      }}
    />
  )
}
