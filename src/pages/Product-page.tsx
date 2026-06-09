import {
  ProductBillingSection,
  ProductCapabilitiesSection,
  ProductCreditsSection,
  ProductCtaSection,
  ProductDiscoverySection,
  ProductHeroSection,
  ProductRepositorySection,
  ProductTeamSection,
  ProductWhyChooseSection,
} from "@/components/product/ProductSections";

const Product = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProductHeroSection />
      <ProductDiscoverySection />
      <ProductRepositorySection />
      <ProductCapabilitiesSection />
      <ProductTeamSection />
      <ProductCreditsSection />
      <ProductBillingSection />
      <ProductWhyChooseSection />
      <ProductCtaSection />
    </div>
  );
};

export default Product;
