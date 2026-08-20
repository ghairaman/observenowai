import HeroSection from "@/components/comparison/SignalHire/HeroSection";
import FeatureCards from "@/components/comparison/SignalHire/FeatureCards";
import FeatureComparison from "@/components/comparison/SignalHire/FeatureComparison";
import Why from "@/components/comparison/SignalHire/Why";
import Pricing from "@/components/comparison/SignalHire/Pricing";
import Faqs from "@/components/comparison/SignalHire/Faqs";

const CompareSignalHire = () => {
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

export default CompareSignalHire;