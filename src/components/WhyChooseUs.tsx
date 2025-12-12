import { Shield, Leaf, FlaskConical, Coins, Users } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Every product meets the highest standards of excellence and purity."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Natural Ingredients",
      description: "Sourced from nature's finest, free from harmful chemicals."
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Scientific Backing",
      description: "Formulations developed with research-driven methodologies."
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Affordable Pricing",
      description: "Premium wellness accessible to everyone, every day."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Built by and for communities that prioritize health first."
    }
  ];

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest text-sm uppercase">The NW Difference</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Why Choose Us
          </h2>
          <div className="w-24 h-[2px] bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-6 group-hover:border-primary group-hover:glow-gold transition-all duration-500">
                <div className="text-primary">{reason.icon}</div>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
