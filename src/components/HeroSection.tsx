import heroImage from "@/assets/hero-wellness.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium wellness products arrangement" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Decorative line */}
        <div className="w-20 h-[2px] bg-primary mx-auto mb-8 animate-fade-in" />
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 animate-fade-in-up">
          NW <span className="text-gradient-gold">Global</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl">Health & Wellness Products</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 font-light tracking-wide mb-8 animate-fade-in-delay-1">
          Healthy People. Strong Communities. A Better Tomorrow.
        </p>

        {/* Decorative line */}
        <div className="w-32 h-[1px] bg-primary/50 mx-auto animate-fade-in-delay-2" />

        {/* CTA Button */}
        <div className="mt-12 animate-fade-in-delay-3">
          <a 
            href="#about"
            className="inline-block px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium tracking-wider uppercase text-sm"
          >
            Discover Our Collection
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-shimmer" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
