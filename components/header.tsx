"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-2 sm:flex-row">
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:+923001234567" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+92 300 1234567</span>
            </a>
            <a
              href="mailto:info@mshahidsons.pk"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>info@mshahidsons.pk</span>
            </a>
          </div>
          <p className="text-sm font-medium">Leading Porta Cabin Manufacturer in Pakistan</p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/image.png" alt="M. Shahid & Sons Logo" width={60} height={60} className="h-14 w-auto" />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-foreground">
              M. SHAHID <span className="text-primary">&</span> SONS
            </h1>
            <p className="text-xs text-muted-foreground">Porta Cabin Manufacturer</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-foreground transition-colors hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary border-l-2 border-transparent hover:border-primary pl-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
