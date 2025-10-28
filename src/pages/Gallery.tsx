import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroWedding1 from "@/assets/hero-wedding-1.jpg";
import heroWedding2 from "@/assets/hero-wedding-2.jpg";
import heroWedding3 from "@/assets/hero-wedding-3.jpg";
import heroWedding4 from "@/assets/hero-wedding-4.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import servicePrivate from "@/assets/service-private.jpg";
import serviceRentals from "@/assets/service-rentals.jpg";
// Traditional Wedding Images - First set
import traditionalWedding1 from "@/assets/WhatsApp Image 2025-10-20 at 7.05.29 PM.jpeg";
import traditionalWedding2 from "@/assets/WhatsApp Image 2025-10-20 at 7.05.27 PM.jpeg";
import traditionalWedding3 from "@/assets/WhatsApp Image 2025-10-20 at 7.05.30 PM.jpeg";
// Traditional Wedding Images - Second set
import traditionalWedding4 from "@/assets/WhatsApp Image 2025-10-20 at 7.05.26 PM (1).jpeg";
import traditionalWedding5 from "@/assets/WhatsApp Image 2025-10-20 at 7.05.26 PM.jpeg";
import traditionalWedding6 from "@/assets/WhatsApp Image 2025-10-20 at 7.05.31 PM (1).jpeg";

const categories = ["All", "Weddings", "Traditional Weddings", "Corporate", "Private Events", "Decor"];

const galleryItems = [
  // Modern Weddings
  { id: 1, image: heroWedding1, category: "Weddings", title: "Garden Wedding Ceremony" },
  { id: 2, image: heroWedding2, category: "Weddings", title: "Elegant Table Setting" },
  { id: 3, image: heroWedding3, category: "Weddings", title: "Tent Reception" },
  { id: 4, image: heroWedding1, category: "Weddings", title: "Outdoor Ceremony" },
  { id: 5, image: heroWedding3, category: "Weddings", title: "Romantic Evening Reception" },
  { id: 6, image: heroWedding2, category: "Weddings", title: "Classic White Wedding" },
  
  // Traditional Weddings - All 6 images
  { id: 7, image: traditionalWedding1, category: "Traditional Weddings", title: "Traditional Ceremony Setup" },
  { id: 8, image: traditionalWedding2, category: "Traditional Weddings", title: "Cultural Wedding Decor" },
  { id: 9, image: traditionalWedding3, category: "Traditional Weddings", title: "African Traditional Wedding" },
  { id: 10, image: traditionalWedding4, category: "Traditional Weddings", title: "Traditional Centerpiece Design" },
  { id: 11, image: traditionalWedding5, category: "Traditional Weddings", title: "Heritage Wedding Celebration" },
  { id: 12, image: traditionalWedding6, category: "Traditional Weddings", title: "Cultural Fusion Wedding" },
  
  // Decor
  { id: 13, image: heroWedding4, category: "Decor", title: "Floral Arch" },
  { id: 14, image: heroWedding2, category: "Decor", title: "Centerpiece Design" },
  { id: 15, image: heroWedding4, category: "Decor", title: "Elegant Stage Backdrop" },
  { id: 16, image: heroWedding3, category: "Decor", title: "Luxury Table Arrangements" },
  
  // Corporate Events
  { id: 17, image: serviceCorporate, category: "Corporate", title: "Corporate Launch Event" },
  { id: 18, image: serviceRentals, category: "Corporate", title: "Gala Dinner" },
  { id: 19, image: serviceCorporate, category: "Corporate", title: "Conference Setup" },
  { id: 20, image: serviceRentals, category: "Corporate", title: "Product Launch" },
  
  // Private Events
  { id: 21, image: servicePrivate, category: "Private Events", title: "Birthday Celebration" },
  { id: 22, image: servicePrivate, category: "Private Events", title: "Anniversary Party" },
  { id: 23, image: heroWedding3, category: "Private Events", title: "Graduation Celebration" },
  { id: 24, image: servicePrivate, category: "Private Events", title: "Family Reunion" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Event Gallery
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Explore our portfolio of stunning events, from intimate weddings to grand corporate celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-muted/30 sticky top-20 z-40 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`hover-lift ${
                  activeCategory === category
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : ""
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-medium hover-lift animate-fade-in aspect-square"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <div className="text-sm font-semibold text-accent mb-2">{item.category}</div>
                    <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More - Placeholder */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="hover-lift">
              Load More
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Create Your Own Unforgettable Event?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's turn your vision into reality with our award-winning event planning services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold hover-glow"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;