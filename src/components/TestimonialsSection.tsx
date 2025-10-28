import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James",
    event: "Garden Wedding",
    date: "June 2024",
    rating: 5,
    text: "I just wanted to say thank you for the help you gave us... You went above and beyond, and your team was amazing. We truly appreciate it. Thank you again.",
  },
  {
    name: "Michael Chen",
    event: "Corporate Launch",
    date: "May 2024",
    rating: 5,
    text: "Your contribution played a key role in making the event a success, and we truly couldn't have done it without you. The launcher was definitely the highlight of the event!",
  },
  {
    name: "Amara Johnson",
    event: "Birthday Celebration",
    date: "April 2024",
    rating: 5,
    text: "The decor was more beautiful than I ever imagined. The wedding looked like an event you'd expect from prominent people and celebrities. Absolutely stunning!",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy clients have to say about their experience with & Erivins Company.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-border shadow-strong">
            <CardContent className="p-12">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-center font-serif italic text-foreground mb-8 leading-relaxed">
                "{current.text}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="font-semibold text-lg mb-1">{current.name}</div>
                <div className="text-muted-foreground text-sm">
                  {current.event} • {current.date}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="hover-lift rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-accent" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="hover-lift rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
