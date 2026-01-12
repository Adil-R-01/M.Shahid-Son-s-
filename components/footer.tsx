import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="h-1 bg-primary" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/image.png"
                alt="M. Shahid & Sons Logo"
                width={50}
                height={50}
                className="h-12 w-auto bg-white rounded p-1"
              />
              <div>
                <h3 className="font-bold">
                  M. SHAHID <span className="text-primary">&</span> SONS
                </h3>
                <p className="text-xs text-muted-foreground">Est. Since 2005</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Leading manufacturer of porta cabins, prefabricated structures, and modular buildings in Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold pb-2 border-b-2 border-primary inline-block">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold pb-2 border-b-2 border-primary inline-block">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Porta Cabins
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Office Containers
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Prefabricated Structures
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Site Offices
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Labor Camps
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Guard Rooms
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold pb-2 border-b-2 border-primary inline-block">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">Main Office, Industrial Area, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+923001234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +92 300 1234567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:info@mshahidsons.pk"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@mshahidsons.pk
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-foreground hover:bg-primary p-2 rounded-full transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-foreground hover:bg-primary p-2 rounded-full transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-foreground hover:bg-primary p-2 rounded-full transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20 bg-accent/50">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-4 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} M. Shahid & Sons. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full" />
            Quality Construction Since 2005
          </p>
        </div>
      </div>
    </footer>
  )
}
