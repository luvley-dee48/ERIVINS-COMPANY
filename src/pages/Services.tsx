import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Briefcase, Gift, Truck, Star, Check } from "lucide-react";
import { useState } from "react";
import serviceCorporate from "@/assets/service-corporate.jpg";
import servicePrivate from "@/assets/service-private.jpg";
import serviceRentals from "@/assets/service-rentals.jpg";

const categories = ["All Services", "Decor & Styling", "Corporate", "Private", "Logistics & VIP"];

const services = [
  {
    category: "Decor & Styling",
    title: "Event Decor & Styling in Nairobi",
    subtitle: "Award-Winning Bespoke Event Design in Kenya",
    image: serviceCorporate,
    description: "As premier event stylists in Nairobi, we are visual storytellers. Our passion is to transform any venue into an immersive environment that captivates guests and creates an unforgettable atmosphere for weddings, corporate events, and private parties across Kenya.",
    features: [
      "Full Event & Theme Conceptualization",
      "Bespoke Floral Design & Installation in Nairobi",
      "Ambient Lighting & A/V Production",
      "Luxury Furniture & Linen Curation",
      "Custom Props & Installations",
    ],
    testimonial: {
      text: "The decor was more beautiful than I ever imagined. The wedding looked like an event you'd expect from prominent people and celebrities.",
      author: "Krystal & Eric, Naivasha Wedding",
    },
  },
  {
    category: "Corporate",
    title: "Corporate Event Planners in Kenya",
    subtitle: "Professional Business Events with Lasting Impact",
    image: serviceCorporate,
    description: "Elevate your corporate image with professionally managed events in Nairobi and beyond. We create engaging experiences for conferences, product launches, and galas that align perfectly with your brand's objectives and deliver tangible results.",
    features: [
      "Conference & Seminar Planning",
      "Product Launch Management",
      "Team Building Events in Kenya",
      "Executive Retreats",
      "Brand Activation Events",
    ],
    testimonial: {
      text: "Your contribution played a key role in making the event a success, and we truly couldn't have done it without you. The launcher was definitely the highlight of the event!",
      author: "World Resource Institute, Nairobi",
    },
  },
  {
    category: "Private",
    title: "Private Celebrations",
    subtitle: "Intimate Gatherings Tailored to Your Vision",
    image: servicePrivate,
    description: "Intimate gatherings and milestone celebrations including birthdays, anniversaries, and family reunions tailored to your vision.",
    features: [
      "Birthday Parties",
      "Traditional Events",
      "Anniversaries",
      "Family Reunions",
      "Milestone Celebrations",
    ],
    testimonial: {
      text: "Thank you for making our family reunion so special. Every detail was perfect!",
      author: "The Johnson Family",
    },
  },
  {
    category: "Logistics & VIP",
    title: "Premium Rentals & Event Logistics",
    subtitle: "Seamless Execution from Start to Finish",
    image: serviceRentals,
    description: "Comprehensive event logistics and premium rental services ensuring seamless execution of your special day.",
    features: [
      "Premium Furniture Rentals",
      "Luxury Decor Items",
      "Complete Event Logistics",
      "Professional Setup & Breakdown",
      "VIP Coordination Services",
    ],
    testimonial: {
      text: "The logistics team made everything run smoothly. We didn't have to worry about a thing!",
      author: "Corporate Client",
    },
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All Services");

  const filteredServices =
    activeCategory === "All Services"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our Premium Event Services in Nairobi
            </h1>
            <p className="text-xl text-primary-foreground/90">
              From immersive decor that tells a story to flawlessly executed corporate events, we are Nairobi's premier choice for creating unforgettable experiences. Explore our services to see how we bring visions to life across Kenya.
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

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} animate-fade-in`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-strong hover-lift">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-20"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} animate-fade-in`}>
                  <div className="inline-block px-4 py-1 bg-accent/10 text-accent font-semibold rounded-full mb-4">
                    {service.category}
                  </div>
                  <h2 className="text-4xl font-serif font-bold mb-3">{service.title}</h2>
                  <p className="text-lg text-accent font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <Card className="bg-muted/50 border-l-4 border-l-accent">
                    <CardContent className="p-6">
                      <p className="italic text-muted-foreground mb-2">"{service.testimonial.text}"</p>
                      <p className="text-sm font-semibold">- {service.testimonial.author}</p>
                    </CardContent>
                  </Card>

                  <Button size="lg" className="mt-6 hover-glow">
                    Get Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Proven Event Planning Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From consultation to celebration, we guide you through every step
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                number: "1",
                title: "Initial Consultation",
                description: "A detailed discussion about your vision, budget, and requirements for your event in Nairobi or your chosen location.",
                points: [
                  "Vision and theme discussion",
                  "Budget planning and allocation",
                  "Timeline establishment",
                  "Initial vendor recommendations",
                ],
              },
              {
                number: "2",
                title: "Planning & Design",
                description: "Our team creates a comprehensive event plan with detailed timelines, vendor selections, and bespoke design concepts.",
                points: [
                  "Detailed event timeline creation",
                  "Vendor coordination and management",
                  "Design concept development",
                  "Budget tracking and adjustments",
                ],
              },
              {
                number: "3",
                title: "Execution & Support",
                description: "On the day of your event, our team ensures flawless execution, managing all logistics and vendors so you can enjoy your celebration.",
                points: [
                  "Complete setup coordination",
                  "Real-time vendor management",
                  "On-site problem solving",
                  "Professional breakdown services",
                ],
              },
            ].map((step) => (
              <Card key={step.number} className="hover-lift border-2 border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl font-serif font-bold text-accent">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.points.map((point, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Star className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
