import { MapPin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">MapFixIn</span>
            </div>
            <p className="text-sm opacity-80">
              Specialized digital marketing agency helping local businesses optimize their online presence and grow
              their revenue.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Business Profile Optimization</li>
              <li>Social Media & Google Ads</li>
              <li>Local Business SEO</li>
              <li>Reddit Marketing</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-accent transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-accent transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>faheem@mapfix.shop</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Worldwide Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 MapFixIn. All rights reserved. | Helping businesses grow since 2020.
          </p>
        </div>
      </div>
    </footer>
  )
}
