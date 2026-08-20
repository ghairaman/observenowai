import HeroSection from "@/components/comparison/Hunter/HeroSection";
import FeatureCards from "@/components/comparison/Hunter/FeatureCards";
import FeatureComparison from "@/components/comparison/Hunter/FeatureComparison";
import Why from "@/components/comparison/Hunter/Why";
import Pricing from "@/components/comparison/Hunter/Pricing";
import Faqs from "@/components/comparison/Hunter/Faqs";

const CompareHunter = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeatureCards />
      <FeatureComparison />
      <Why/>
      <Pricing/>
      <Faqs/>
    </div>
  );
};

export default CompareHunter;