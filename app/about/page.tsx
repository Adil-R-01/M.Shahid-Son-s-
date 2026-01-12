import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users, Building2, ThumbsUp, Clock, Shield } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We use only premium materials and maintain strict quality standards in every project.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our clients' satisfaction is our top priority. We work closely to meet all requirements.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We understand the importance of deadlines and ensure on-time project completion.",
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "Building long-term relationships through honest and transparent business practices.",
  },
]

const timeline = [
  {
    year: "2005",
    title: "Company Founded",
    description: "M. Shahid & Sons was established with a vision to provide quality porta cabin solutions.",
  },
  {
    year: "2010",
    title: "Expansion",
    description: "Expanded operations to serve clients across Pakistan with increased manufacturing capacity.",
  },
  {
    year: "2015",
    title: "1000+ Projects",
    description: "Achieved milestone of completing over 1000 successful projects nationwide.",
  },
  {
    year: "2020",
    title: "Modern Facilities",
    description: "Upgraded to state-of-the-art manufacturing facilities with advanced technology.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Recognized as one of Pakistan's leading porta cabin manufacturers.",
  },
]

export default function AboutPage() {
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
                About M. Shahid <span className="text-primary">&</span> Sons
              </h1>
              <p className="text-lg text-muted-foreground">
                Pakistan&apos;s trusted name in porta cabin manufacturing with over 18 years of excellence in delivering
                quality prefabricated structures.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <span className="inline-block w-12 h-1 bg-primary" />
                <h2 className="text-3xl font-bold lg:text-4xl">Our Story</h2>
                <div className="border-l-4 border-primary pl-6 space-y-4">
                  <p className="text-muted-foreground">
                    M. Shahid & Sons was founded in 2005 with a simple mission: to provide high-quality, affordable
                    porta cabin solutions to businesses across Pakistan. What started as a small family business has
                    grown into one of the country&apos;s most trusted names in prefabricated construction.
                  </p>
                  <p className="text-muted-foreground">
                    Over the years, we have successfully completed over 1500 projects for clients ranging from small
                    businesses to large corporations and government organizations. Our commitment to quality,
                    innovation, and customer satisfaction has been the cornerstone of our success.
                  </p>
                  <p className="text-muted-foreground">
                    Today, we continue to lead the industry with modern manufacturing facilities, skilled craftsmen, and
                    a dedication to delivering excellence in every project we undertake.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-12 h-12 border-t-4 border-l-4 border-primary" />
                  <Image
                    src="/porta-cabin-manufacturing-facility-with-workers-an.jpg"
                    alt="Our Manufacturing Facility"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/porta-cabin-office-container-exterior-professional.jpg"
                    alt="Completed Project"
                    width={240}
                    height={200}
                    className="rounded-lg shadow-lg"
                  />
                  <div className="relative">
                    <Image
                      src="/prefab-building-installation-construction-site.jpg"
                      alt="Installation Process"
                      width={240}
                      height={200}
                      className="rounded-lg shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-4 border-r-4 border-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-t-4 border-t-primary shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide innovative, high-quality prefabricated building solutions that meet the diverse needs of
                    our clients while maintaining affordability and timely delivery. We strive to be the first choice
                    for porta cabin solutions in Pakistan.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-t-4 border-t-primary shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become the leading manufacturer of prefabricated structures in South Asia, known for our
                    commitment to quality, innovation, and customer satisfaction. We aim to revolutionize the
                    construction industry with sustainable and efficient solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <span className="inline-block w-12 h-1 bg-primary mb-4" />
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Our Core Values</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                These principles guide everything we do and define who we are as a company.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card
                  key={value.title}
                  className="text-center group hover:shadow-lg transition-all border-b-4 border-b-transparent hover:border-b-primary"
                >
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-accent py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <span className="inline-block w-12 h-1 bg-primary mb-4" />
              <h2 className="mb-4 text-3xl font-bold text-accent-foreground lg:text-4xl">Our Journey</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                A timeline of our growth and achievements over the years.
              </p>
            </div>
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-primary/30" />
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative mb-8 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="rounded-lg bg-background p-4 shadow-lg border-l-4 border-primary">
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2">
                    <div className="h-5 w-5 rounded-full bg-primary ring-4 ring-primary/20" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <Building2 className="mx-auto mb-2 h-8 w-8 text-primary-foreground" />
                <p className="text-3xl font-bold text-primary-foreground">1500+</p>
                <p className="text-sm text-primary-foreground/80">Projects Completed</p>
              </div>
              <div className="text-center">
                <Users className="mx-auto mb-2 h-8 w-8 text-primary-foreground" />
                <p className="text-3xl font-bold text-primary-foreground">400+</p>
                <p className="text-sm text-primary-foreground/80">Happy Clients</p>
              </div>
              <div className="text-center">
                <ThumbsUp className="mx-auto mb-2 h-8 w-8 text-primary-foreground" />
                <p className="text-3xl font-bold text-primary-foreground">18+</p>
                <p className="text-sm text-primary-foreground/80">Years Experience</p>
              </div>
              <div className="text-center">
                <Award className="mx-auto mb-2 h-8 w-8 text-primary-foreground" />
                <p className="text-3xl font-bold text-primary-foreground">100%</p>
                <p className="text-sm text-primary-foreground/80">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
