"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Binary and tech characters
    const binaryChars = ["0", "1"]
    const techChars = [
      ...binaryChars,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "<",
      ">",
      "/",
      "\\",
      "{",
      "}",
      "[",
      "]",
      "=",
      "+",
      "-",
      "*",
      "&",
      "|",
      "^",
      "%",
      "$",
      "#",
      "@",
    ]

    // Circuit node class
    class CircuitNode {
      x: number
      y: number
      size: number
      connections: CircuitNode[]
      char: string
      color: string
      alpha: number
      fadeDirection: number

      constructor(x: number, y: number, size: number) {
        this.x = x
        this.y = y
        this.size = size
        this.connections = []
        this.char = techChars[Math.floor(Math.random() * techChars.length)]

        // Colors for tech theme - more vibrant
        const colors = [
          "rgba(99, 102, 241, 0.9)", // blue
          "rgba(139, 92, 246, 0.9)", // purple
          "rgba(6, 182, 212, 0.9)", // cyan
          "rgba(236, 72, 153, 0.9)", // pink
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.alpha = Math.random() * 0.6 + 0.3 // Increased base opacity
        this.fadeDirection = Math.random() > 0.5 ? 1 : -1
      }

      update() {
        // Randomly change character occasionally
        if (Math.random() < 0.005) {
          this.char = techChars[Math.floor(Math.random() * techChars.length)]
        }

        // Fade in and out
        this.alpha += 0.005 * this.fadeDirection
        if (this.alpha > 0.8) {
          // Increased max opacity
          this.fadeDirection = -1
        } else if (this.alpha < 0.3) {
          // Increased min opacity
          this.fadeDirection = 1
        }
      }

      draw() {
        if (!ctx) return

        // Draw character
        ctx.font = `${this.size}px monospace`
        ctx.fillStyle = this.color.replace("0.9", `${this.alpha}`)
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(this.char, this.x, this.y)
      }
    }

    // Create circuit nodes in a grid pattern
    const gridSpacing = 80
    const nodes: CircuitNode[] = []

    for (let x = gridSpacing; x < canvas.width; x += gridSpacing) {
      for (let y = gridSpacing; y < canvas.height; y += gridSpacing) {
        // Add some randomness to position
        const offsetX = (Math.random() - 0.5) * gridSpacing * 0.5
        const offsetY = (Math.random() - 0.5) * gridSpacing * 0.5

        // Only create nodes with some probability for a sparser look
        if (Math.random() < 0.7) {
          const size = Math.floor(Math.random() * 10) + 16 // Slightly larger font
          nodes.push(new CircuitNode(x + offsetX, y + offsetY, size))
        }
      }
    }

    // Create connections between nearby nodes
    nodes.forEach((node) => {
      nodes.forEach((otherNode) => {
        if (node !== otherNode) {
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < gridSpacing * 1.5 && Math.random() < 0.3) {
            node.connections.push(otherNode)
          }
        }
      })
    })

    // Binary rain effect
    class BinaryDrop {
      x: number
      y: number
      speed: number
      chars: string[]
      color: string
      size: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height - canvas.height
        this.speed = Math.random() * 2 + 1
        this.chars = Array(Math.floor(Math.random() * 10) + 3)
          .fill("0")
          .map(() => binaryChars[Math.floor(Math.random() * binaryChars.length)])
        this.color = "rgba(6, 182, 212, 0.6)" // Increased opacity
        this.size = Math.floor(Math.random() * 6) + 12 // Slightly larger font
      }

      update() {
        this.y += this.speed

        // Reset when it goes off screen
        if (this.y > canvas.height) {
          this.y = -this.chars.length * this.size
          this.x = Math.random() * canvas.width
        }

        // Randomly change characters
        if (Math.random() < 0.1) {
          const index = Math.floor(Math.random() * this.chars.length)
          this.chars[index] = binaryChars[Math.floor(Math.random() * binaryChars.length)]
        }
      }

      draw() {
        if (!ctx) return

        ctx.font = `${this.size}px monospace`

        this.chars.forEach((char, i) => {
          // Fade out as they fall - increased base opacity
          const alpha = 0.6 - (i / this.chars.length) * 0.3
          ctx.fillStyle = this.color.replace("0.6", `${alpha}`)
          ctx.fillText(char, this.x, this.y - i * this.size)
        })
      }
    }

    // Create binary drops
    const binaryDrops: BinaryDrop[] = []
    const dropCount = Math.min(Math.floor(canvas.width / 25), 60) // More drops

    for (let i = 0; i < dropCount; i++) {
      binaryDrops.push(new BinaryDrop())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw circuit connections
      nodes.forEach((node) => {
        node.connections.forEach((connectedNode) => {
          ctx.beginPath()
          ctx.strokeStyle = node.color.replace("0.9", "0.25") // Increased line opacity
          ctx.lineWidth = 1.5 // Thicker lines
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)
          ctx.stroke()

          // Draw data pulse animation along connections
          if (Math.random() < 0.02) {
            // Increased chance of pulses
            const pulsePosition = Math.random()
            const pulseX = node.x + (connectedNode.x - node.x) * pulsePosition
            const pulseY = node.y + (connectedNode.y - node.y) * pulsePosition

            ctx.beginPath()
            ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2) // Larger pulse
            ctx.fillStyle = "rgba(255, 255, 255, 0.9)" // Brighter pulse
            ctx.fill()
          }
        })
      })

      // Update and draw nodes
      nodes.forEach((node) => {
        node.update()
        node.draw()
      })

      // Update and draw binary drops
      binaryDrops.forEach((drop) => {
        drop.update()
        drop.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-50" // Increased from 0.3 to 0.5
      style={{ background: "transparent" }}
    />
  )
}
