import Link from "next/link"
import { Github, Linkedin, Code } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <Link href="#home" className="text-xl font-bold gradient-text">
              Elouafi.dev
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Full Stack Developer based in Casablanca, Morocco</p>
          </div>

          <div className="mt-8 md:mt-0">
            <div className="flex space-x-6">
              <Link
                href="https://github.com/AbdeljalilElouafi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/abd-eljalil-elouafi-7412771b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://leetcode.com/u/AbdeljalilElouafi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">LeetCode</span>
                <Code className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 flex flex-col items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mohammed Abd Eljalil Elouafi. All rights reserved.
          </p>
          <div className="mt-2 flex space-x-4 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
