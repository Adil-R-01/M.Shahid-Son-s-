import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Building2, Truck, Shield, Clock, Award, Factory, Home, Warehouse, Building } from "lucide-react"

const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "1500+", label: "Projects Completed" },
  { value: "400+", label: "Happy Clients" },
  { value: "10M+", label: "Sqft Area Covered" },
]

const services = [
  {
    icon: Building2,
    title: "Porta Cabins",
    description: "High-quality portable cabins for offices, housing, and commercial use.",
  },
  {
    icon: Warehouse,
    title: "Office Containers",
    description: "Modern container offices with all amenities for your business needs.",
  },
  {
    icon: Factory,
    title: "Prefab Structures",
    description: "Custom prefabricated buildings for industrial and commercial purposes.",
  },
  {
    icon: Home,
    title: "Site Offices",
    description: "Temporary and permanent site office solutions for construction projects.",
  },
  { icon: Building, title: "Labor Camps", description: "Comfortable accommodation solutions for workers and staff." },
  { icon: Shield, title: "Guard Rooms", description: "Secure and durable guard rooms for security checkpoints." },
]

const features = [
  "Premium Quality Materials",
  "Customizable Designs",
  "Fast Delivery & Installation",
  "Affordable Pricing",
  "After-Sales Support",
  "Nationwide Service",
]

const sectors = [
  "Industrial",
  "Commercial",
  "Construction",
  "Educational",
  "Healthcare",
  "Government",
  "Agricultural",
  "Infrastructure",
  "Hospitality",
  "Warehousing",
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-accent py-20 lg:py-32">
          <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="inline-block rounded-r-full border-l-4 border-primary bg-primary/10 px-4 py-2">
                  <span className="text-sm font-medium text-primary">Leading Porta Cabin Manufacturer</span>
                </div>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-accent-foreground lg:text-5xl xl:text-6xl">
                  Custom Built{" "}
                  <span className="text-primary relative">
                    Porta Cabins
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 -z-10" />
                  </span>{" "}
                  For Your Business
                </h1>
                <p className="text-pretty text-lg text-muted-foreground">
                  M. Shahid & Sons is Pakistan&apos;s trusted manufacturer of porta cabins, prefabricated structures,
                  and modular buildings. Quality construction with 18+ years of expertise.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/contact">Get Free Quote</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent hover:border-primary"
                  >
                    <Link href="/gallery">View Our Work</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-2 border-2 border-primary/20 rounded-xl -z-10" />
                <Image
                  src="/modern-porta-cabin-office-container-building-with-.jpg"
                  alt="M. Shahid & Sons Porta Cabin"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 rounded-lg bg-primary p-6 text-primary-foreground shadow-xl">
                  <p className="text-3xl font-bold">18+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center relative">
                  {index !== 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/20 hidden md:block" />
                  )}
                  <p className="text-3xl font-bold text-primary-foreground lg:text-4xl">{stat.value}</p>
                  <p className="text-sm text-primary-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <span className="inline-block w-12 h-1 bg-primary mb-4" />
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Our Products & Services</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                We offer a wide range of prefabricated solutions tailored to meet your specific requirements.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="group transition-all hover:shadow-lg border-t-4 border-t-transparent hover:border-t-primary"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-secondary py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5" />
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-primary" />
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-primary" />
                <Image
                  src="/porta-cabin-manufacturing-factory-workers-welding-.jpg"
                  alt="M. Shahid & Sons Manufacturing"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <span className="inline-block w-12 h-1 bg-primary" />
                <h2 className="text-3xl font-bold lg:text-4xl">Why Choose M. Shahid & Sons?</h2>
                <p className="text-muted-foreground">
                  With over 18 years of experience in the industry, we have built a reputation for delivering
                  exceptional quality prefabricated structures across Pakistan.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 pb-2 border-b-2 border-primary">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">On-Time Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 pb-2 border-b-2 border-primary">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">ISO Certified</span>
                  </div>
                  <div className="flex items-center gap-2 pb-2 border-b-2 border-primary">
                    <Truck className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Nationwide Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors We Serve */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <span className="inline-block w-12 h-1 bg-primary mb-4" />
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Sectors We Serve</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Our prefabricated solutions cater to diverse industries across Pakistan.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {sectors.map((sector) => (
                <div
                  key={sector}
                  className="rounded-full border-2 border-border px-6 py-3 text-sm font-medium transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
                >
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold text-accent-foreground lg:text-4xl">Ready to Start Your Project?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Contact us today for a free consultation and quote. Our team of experts is ready to help you build the
              perfect solution for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Contact Us Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent hover:border-primary"
              >
                <a href="tel:+923001234567">Call: +92 300 1234567</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
