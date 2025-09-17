"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">MapFix</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-accent transition-colors">
              Services
            </a>
            <a href="#pricing" className="text-foreground hover:text-accent transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-foreground hover:text-accent transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => {
                const element = document.getElementById('calendly-container');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-accent transition-colors">
                Home
              </a>
              <a href="#services" className="text-foreground hover:text-accent transition-colors">
                Services
              </a>
              <a href="#pricing" className="text-foreground hover:text-accent transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-foreground hover:text-accent transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </a>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                Get Free Consultation
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
