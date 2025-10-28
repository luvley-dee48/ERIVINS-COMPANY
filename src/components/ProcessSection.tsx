import { Eye, Palette, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Eye,
    title: "Vision & Collaboration",
    description: "Our journey begins with you. We listen to your story, understand your style, and collaboratively define a vision that is a true reflection of you as a couple.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Curation",
    description: "We translate your vision into a bespoke design concept, curating a team of elite vendors and orchestrating every aesthetic detail from florals to lighting.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Flawless Execution",
    description: "With meticulous planning and seamless coordination, we manage every logistical complexity, allowing you to relax and be a guest at your own wedding.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Your Dream Wedding,
              <br />
              <span className="text-primary">Realized</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              From the first sketch to the final farewell, we believe in a planning process that is as joyful and memorable as the day itself. This is our promise to you.
            </p>
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 group hover-lift p-4 rounded-xl transition-all"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-4xl font-serif font-bold text-accent/30">{step.number}</span>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image - Will be added */}
          <div className="relative h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl"></div>
            <div className="absolute inset-4 bg-muted/50 rounded-2xl backdrop-blur-sm flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-serif font-bold text-primary/20 mb-4">& Erivins</div>
                <div className="text-4xl font-serif text-accent/20"> Company </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
