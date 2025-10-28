import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Briefcase, Gift, Truck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Palette,
    title: "Event Decor & Styling",
    description: "Visual storytellers transforming spaces into immersive environments that captivate guests and create unforgettable atmospheres.",
    features: ["Theme Conceptualization", "Floral Design", "Lighting & A/V", "Furniture Curation"],
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional corporate event planning for conferences, product launches, and company celebrations with attention to brand representation.",
    features: ["Conference Planning", "Product Launches", "Team Building", "Brand Events"],
  },
  {
    icon: Gift,
    title: "Private Celebrations",
    description: "Intimate gatherings and milestone celebrations including birthdays, anniversaries, and family reunions tailored to your vision.",
    features: ["Birthday Parties", "Traditional Events", "Anniversaries", "Family Reunions"],
  },
  {
    icon: Truck,
    title: "Premium Rentals & Logistics",
    description: "Comprehensive event logistics and premium rental services ensuring seamless execution of your special day.",
    features: ["Premium Furniture", "Decor Rentals", "Event Logistics", "Setup & Breakdown"],
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Premium Event Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From immersive decor that tells a story to flawlessly executed corporate events, we are Nairobi's premier choice for creating unforgettable experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover-lift bg-card border-2 border-border hover:border-accent transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                    <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            variant="default"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-glow"
            asChild
          >
            <Link to="/services">
              Explore All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
