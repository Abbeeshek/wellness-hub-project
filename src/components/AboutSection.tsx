const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-primary font-medium tracking-widest text-sm uppercase">Who We Are</span>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-8">
          About NW Global
        </h2>
        <div className="w-24 h-[2px] bg-primary mx-auto mb-12" />
        
        <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
          <p>
            At <span className="text-primary font-medium">NW Global Health & Wellness Products</span>, we believe that true wellness begins with quality. Our mission is to provide safe, effective, and premium health products that empower individuals and families to live their healthiest lives.
          </p>
          <p>
            From busy professionals seeking daily nutritional support to students needing mental clarity, from elderly individuals requiring gentle care to fitness enthusiasts pushing their limits — our carefully curated collection serves every wellness need.
          </p>
          <p>
            We source only the finest natural ingredients, combining traditional wisdom with modern scientific research to create products that truly make a difference. Every item in our collection undergoes rigorous quality testing to ensure safety and efficacy.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { value: "50+", label: "Premium Products" },
            { value: "10K+", label: "Happy Customers" },
            { value: "100%", label: "Natural Ingredients" },
            { value: "24/7", label: "Customer Support" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
