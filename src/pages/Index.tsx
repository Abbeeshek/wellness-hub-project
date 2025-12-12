import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ProductCategories />
      <WhyChooseUs />
      <Footer />
    </main>
  );
};

export default Index;
