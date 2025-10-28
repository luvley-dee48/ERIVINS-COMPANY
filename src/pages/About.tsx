import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              About Erivins Company Events
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Award-winning event planning and decor company specializing in creating unforgettable experiences across Kenya
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <Card className="hover-lift border-2 border-border">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To orchestrate experiences that transcend expectations, where every element speaks of elegance and creativity refinement, purpose, and polished execution.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="hover-lift border-2 border-border">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the gold standard in luxury event curation—celebrated across Africa and the globe for crafting experiences that are as unforgettable as they are exquisite.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every event we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion",
                description: "We pour our heart into every celebration",
                color: "text-red-500",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Unwavering commitment to quality",
                color: "text-accent",
              },
              {
                icon: Users,
                title: "Partnership",
                description: "Building lasting relationships with clients",
                color: "text-blue-500",
              },
              {
                icon: Sparkles,
                title: "Innovation",
                description: "Creative solutions for unique experiences",
                color: "text-purple-500",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover-lift text-center border-2 border-border">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                      <Icon className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming Kenya's premier event planning company
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                year: "2015",
                title: "The Beginning",
                description: "Started with a passion for creating beautiful celebrations and a vision to transform the event industry in Nairobi.",
              },
              {
                year: "2017",
                title: "Expansion",
                description: "Expanded our services to include corporate events and built a network of premium vendors across Kenya.",
              },
              {
                year: "2019",
                title: "Award Recognition",
                description: "Recognized as the Award Winning Events and Decor Company of the Year, celebrating excellence in event planning.",
              },
              {
                year: "2024",
                title: "500+ Events",
                description: "Celebrated our 500th successful event, with happy couples and satisfied clients across East Africa.",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-8 items-start animate-fade-in">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-4xl font-serif font-bold text-accent">{milestone.year}</div>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-border -translate-x-4"></div>
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-accent -translate-x-[1.3rem]"></div>
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-serif font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center">
              Why Choose Erivins Company
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-serif font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Successful Events</div>
              </div>
              <div>
                <div className="text-5xl font-serif font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-5xl font-serif font-bold text-accent mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
