import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import event6 from "@/assets/event-6.jpg";

const HeroSection = () => {
  const images = [event1, event2, event3, event4, event5, event6];

  // Phone numbers
  const phoneNumber1 = "0727937010";
  const phoneNumber2 = "0721320787";

  // Social media links
  const socialLinks = {
    instagram: "https://www.instagram.com/yourcompany",
    twitter: "https://www.twitter.com/yourcompany",
    facebook: "https://www.facebook.com/yourcompany"
  };

  // Handle Call Now button click
  const handleCallNow = () => {
    // Opens phone dialer with the first phone number
    window.location.href = `tel:+254${phoneNumber1.substring(1)}`;
  };

  // Handle Get Quote button click
  const handleGetQuote = () => {
    // Opens WhatsApp with a pre-filled message
    const whatsappMessage = encodeURIComponent("Hello! I'd like to get a quote for event planning and decor services.");
    window.open(`https://wa.me/254${phoneNumber1.substring(1)}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="home" className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Creating{" "}
              <span className="block text-foreground">Unforgettable</span>
              <span className="text-accent">Event Moments</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Award-winning events and decor company specializing in turning your aspirations into reality with elegant design and flawless execution.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href={`tel:+254${phoneNumber1.substring(1)}`}
                className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-medium">0727 937 010</span>
              </a>
              <a 
                href={`tel:+254${phoneNumber2.substring(1)}`}
                className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-medium">0721 320 787</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={handleCallNow}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={handleGetQuote}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Quote
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent text-xl">🏆</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Premium Service</div>
                  <div className="text-sm text-muted-foreground">Award Winning</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent text-xl">👥</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">500+ Happy Couples</div>
                  <div className="text-sm text-muted-foreground">Trusted by Many</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent text-xl">⭐</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">5-Star Reviews</div>
                  <div className="text-sm text-muted-foreground">Excellence Rated</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Image Gallery */}
          <div className="relative h-[600px] overflow-hidden rounded-2xl">
            <style>
              {`
                @keyframes scrollUp {
                  0% {
                    transform: translateY(0);
                  }
                  100% {
                    transform: translateY(-50%);
                  }
                }
                .scroll-animation {
                  animation: scrollUp 20s linear infinite;
                }
                .scroll-animation:hover {
                  animation-play-state: paused;
                }
              `}
            </style>
            <div className="absolute inset-0 grid grid-cols-2 gap-4 scroll-animation">
              {/* First set of images */}
              {images.map((img, idx) => (
                <div key={`img-1-${idx}`} className="relative h-72 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img}
                    alt={`Event ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {images.map((img, idx) => (
                <div key={`img-2-${idx}`} className="relative h-72 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img}
                    alt={`Event ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
            {/* Gradient overlays for smooth fade */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;