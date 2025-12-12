import { Sparkles, Leaf, FlaskConical, Heart, Dumbbell, Home, Award } from "lucide-react";

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const CategoryCard = ({ icon, title, description, delay = 0 }: CategoryCardProps) => (
  <div 
    className="card-luxury p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-500 group hover:glow-gold"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
      <div className="text-primary">{icon}</div>
    </div>
    <h3 className="font-serif text-xl text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

const ProductCategories = () => {
  const categories = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Daily Health Supplements",
      description: "Essential vitamins and minerals to support your daily wellness journey."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Personal Care Essentials",
      description: "Premium skincare and body care products with natural ingredients."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Wellness Drinks",
      description: "Nourishing beverages crafted for energy, immunity, and vitality."
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Fitness Products",
      description: "Performance supplements and recovery essentials for active lifestyles."
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Home Wellness Items",
      description: "Aromatherapy, diffusers, and wellness accessories for your sanctuary."
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Scientific/Certified Products",
      description: "Lab-tested formulations backed by research and quality certifications."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest text-sm uppercase">Our Collection</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Product Categories
          </h2>
          <div className="w-24 h-[2px] bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              {...category}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
