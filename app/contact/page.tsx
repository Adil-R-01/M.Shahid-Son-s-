"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  { icon: Phone, title: "Phone", details: ["+92 300 1234567", "+92 42 1234567"], action: "tel:+923001234567" },
  {
    icon: Mail,
    title: "Email",
    details: ["info@mshahidsons.pk", "sales@mshahidsons.pk"],
    action: "mailto:info@mshahidsons.pk",
  },
  { icon: MapPin, title: "Address", details: ["Main Office, Industrial Area", "Lahore, Pakistan"], action: null },
  { icon: Clock, title: "Working Hours", details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"], action: null },
]

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setFormStatus("success")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })

    setTimeout(() => setFormStatus("idle"), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-accent py-16 lg:py-24 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block w-12 h-1 bg-primary mb-4" />
              <h1 className="mb-6 text-4xl font-bold text-accent-foreground lg:text-5xl">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Have a project in mind? Get in touch with us today for a free consultation and quote. Our team is ready
                to help bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => (
                <Card
                  key={info.title}
                  className="text-center transition-all hover:shadow-lg border-t-4 border-t-primary group"
                >
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-semibold">{info.title}</h3>
                    {info.details.map((detail, index) =>
                      info.action ? (
                        <a
                          key={index}
                          href={info.action}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p key={index} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ),
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-1 bg-primary" />
                  <h2 className="text-2xl font-bold lg:text-3xl">Send Us a Message</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6 border-l-4 border-primary pl-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        disabled={formStatus === "submitting"}
                        className="focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        disabled={formStatus === "submitting"}
                        className="focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        disabled={formStatus === "submitting"}
                        className="focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                        Subject <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter subject"
                        required
                        disabled={formStatus === "submitting"}
                        className="focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Your Message <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      required
                      disabled={formStatus === "submitting"}
                      className="focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 md:w-auto"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? (
                      "Sending..."
                    ) : formStatus === "success" ? (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-1 bg-primary" />
                  <h2 className="text-2xl font-bold lg:text-3xl">Our Location</h2>
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted border-4 border-primary/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217920.00780078916!2d74.21338805!3d31.4955684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="M. Shahid & Sons Location"
                  />
                </div>
                <Card className="bg-accent border-t-4 border-t-primary">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-semibold text-accent-foreground">Why Choose Us?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Free consultation and site visit
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Competitive pricing with no hidden costs
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Customized solutions for your needs
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Fast delivery across Pakistan
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-primary-foreground lg:text-3xl">Prefer to Talk Directly?</h2>
            <p className="mx-auto mb-6 max-w-xl text-primary-foreground/90">
              Call us now for immediate assistance. Our team is available Monday to Saturday, 9 AM to 6 PM.
            </p>
            <a
              href="tel:+923001234567"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-medium text-primary transition-colors hover:bg-white/90 shadow-lg"
            >
              <Phone className="h-5 w-5" />
              +92 300 1234567
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
