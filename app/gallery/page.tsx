"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

const categories = ["All", "Porta Cabins", "Office Containers", "Prefab Buildings", "Site Offices", "Labor Camps"]

const galleryItems = [
  {
    id: 1,
    category: "Porta Cabins",
    title: "Modern Porta Cabin",
    image: "/modern-porta-cabin-white-exterior-with-windows-and.jpg",
  },
  {
    id: 2,
    category: "Office Containers",
    title: "Executive Office Container",
    image: "/executive-office-container-interior-with-desk-and-.jpg",
  },
  {
    id: 3,
    category: "Prefab Buildings",
    title: "Industrial Prefab Structure",
    image: "/industrial-prefabricated-building-warehouse-steel-.jpg",
  },
  {
    id: 4,
    category: "Site Offices",
    title: "Construction Site Office",
    image: "/construction-site-office-portable-cabin-on-constru.jpg",
  },
  {
    id: 5,
    category: "Labor Camps",
    title: "Worker Accommodation",
    image: "/prefab-worker-accommodation-building-labor-camp-cl.jpg",
  },
  {
    id: 6,
    category: "Porta Cabins",
    title: "Luxury Porta Cabin",
    image: "/luxury-porta-cabin-with-modern-amenities-exterior-.jpg",
  },
  {
    id: 7,
    category: "Office Containers",
    title: "Multi-Story Container Office",
    image: "/multi-story-container-office-building-stacked-cont.jpg",
  },
  {
    id: 8,
    category: "Prefab Buildings",
    title: "School Building",
    image: "/prefabricated-school-building-exterior-with-playgr.jpg",
  },
  { id: 9, category: "Site Offices", title: "Manager's Office", image: "/placeholder.svg?height=400&width=600" },
  { id: 10, category: "Labor Camps", title: "Staff Quarters", image: "/placeholder.svg?height=400&width=600" },
  { id: 11, category: "Porta Cabins", title: "Guard Room", image: "/placeholder.svg?height=400&width=600" },
  {
    id: 12,
    category: "Office Containers",
    title: "Meeting Room Container",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

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
                Our <span className="text-primary">Gallery</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore our portfolio of completed projects showcasing our expertise in porta cabin manufacturing and
                prefabricated structures.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b py-6 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-secondary text-foreground hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer overflow-hidden rounded-lg bg-background shadow-md transition-all hover:shadow-xl border-2 border-transparent hover:border-primary"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/20" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg">
                        View
                      </span>
                    </div>
                  </div>
                  <div className="p-4 border-t-2 border-primary/20 group-hover:border-primary transition-colors">
                    <span className="text-xs font-medium text-primary">{item.category}</span>
                    <h3 className="mt-1 font-semibold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-primary-foreground lg:text-3xl">Like What You See?</h2>
            <p className="mx-auto mb-6 max-w-xl text-primary-foreground/90">
              Let us build something amazing for you. Contact us today to discuss your project requirements.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-medium text-primary transition-colors hover:bg-white/90 shadow-lg"
            >
              Get Started
            </a>
          </div>
        </section>
      </main>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -right-2 -top-10 rounded-full bg-primary p-2 text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          {selectedImage && (
            <div className="overflow-hidden rounded-lg bg-background border-4 border-primary">
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                width={800}
                height={600}
                className="w-full"
              />
              <div className="p-4 border-t-2 border-primary">
                <span className="text-sm font-medium text-primary">{selectedImage.category}</span>
                <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
