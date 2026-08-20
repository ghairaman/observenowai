import HeroSection from "@/components/comparison/Kaspr/HeroSection";
import FeatureCards from "@/components/comparison/Kaspr/FeatureCards";
import FeatureComparison from "@/components/comparison/Kaspr/FeatureComparison";
import Why from "@/components/comparison/Kaspr/Why";
import Pricing from "@/components/comparison/Kaspr/Pricing";
import Faqs from "@/components/comparison/Kaspr/Faqs";

const CompareKaspr = () => {
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

export default CompareKaspr;