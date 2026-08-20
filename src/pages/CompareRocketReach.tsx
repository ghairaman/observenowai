import HeroSection from "@/components/comparison/RocketReach/HeroSection";
import FeatureCards from "@/components/comparison/RocketReach/FeatureCards";
import FeatureComparison from "@/components/comparison/RocketReach/FeatureComparison";
import Why from "@/components/comparison/RocketReach/Why";
import Pricing from "@/components/comparison/RocketReach/Pricing";
import Faqs from "@/components/comparison/RocketReach/Faqs";

const CompareRocketReach = () => {
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

export default CompareRocketReach;