// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import CountUp from "@/components/CountUp";

// import IconUsers from "@/assets/user.svg";

// // Tab illustrations — place these in your assets folder
// import FoundationImg from "@/assets/FoundationData.png";
// import RecognitionImg from "@/assets/RecognitionData.png";
// import CommunityImg from "@/assets/CommunityData.png";
// import ReputationImg from "@/assets/ReputationData.png";
// import LeadImg from "@/assets/LeadData.png";

// import AnalyticsSection from "./AnalyticsSection";

// const tabs = [
//   {
//     id: "foundation",
//     title: "Foundation",
//     image: FoundationImg,
//     badge: "Start with clean data",
//     heading: "Data Infrastructure",
//     desc: "Establish a strong foundation with verified, structured, and continuously updated data. This ensures accuracy across systems, reduces noise, and enables precise targeting, giving your teams the confidence to act on reliable insights.",
//   },
//   {
//     id: "recognition",
//     title: "Recognition",
//     image: RecognitionImg,
//     badge: "Know who matters",
//     heading: "AI Contact Intelligence",
//     desc: "Use AI-driven intelligence to enrich contact and account data with meaningful context. Identify key decision-makers, understand their roles and behaviors, and prioritize outreach based on signals that truly matter.",
//   },
//   {
//     id: "community",
//     title: "Community",
//     image: CommunityImg,
//     badge: "Build real connections",
//     heading: "Data + Events Ecosystem",
//     desc: "Integrate data with event-led engagement to create a connected ecosystem. Foster relationships through meaningful interactions, strengthen your network, and drive consistent engagement across multiple touchpoints.",
//   },
//   {
//     id: "reputation",
//     title: "Reputation",
//     image: ReputationImg,
//     badge: "Grow where it counts",
//     heading: "India → Global Scale",
//     desc: "Leverage strong positioning in India and the broader APAC region to build credibility and momentum. Create a scalable framework that supports expansion into global markets while maintaining local relevance.",
//   },
//   {
//     id: "lead",
//     title: "Lead Intelligence",
//     image: LeadImg,
//     badge: "Convert with clarity",
//     heading: "Market Intelligence",
//     desc: "Transform raw data into actionable intelligence that drives smarter decisions. Identify high-intent opportunities, refine your strategy, and accelerate conversions with insights designed for measurable growth.",
//   },
// ];

// const stats = [
//   { icon: IconUsers, value: "50K+", label: "Business Leads" },
//   { icon: IconUsers, value: "300M+", label: "Decision Makers" },
//   { icon: IconUsers, value: "3B+", label: "CXO Leaders Data Points" },
//   { icon: IconUsers, value: "800K+", label: "B2B Organisations" },
// ];

// const DataToRevenueSection = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <section className="py-20 px-4 sm:px-6 bg-background">
//       <div className="max-w-5xl mx-auto">

//         {/* Badge */}
//         <div className="flex justify-center mb-6">
//           <span className="section-badge border border-[#470277]">
//             Data-driven Strategy
//           </span>
//         </div>

//         {/* Heading */}
//         <h2 className="font-sora text-4xl md:text-5xl font-bold text-center mb-3">
//           From Data to <span className="text-[#72339F]/80">Revenue</span>
//         </h2>

//         <p className="font-sora text-center text-muted-foreground max-w-2xl mx-auto mb-12">
//           A structured 5-stage approach that transforms raw lead data into targeted outreach, smarter decisions, and sales growth.
//         </p>

//         {/* ── TAB NAV ── */}
//         <div className="relative mb-10 overflow-x-auto">
//           <div className="flex min-w-max sm:min-w-0 border-b border-gray-200">
//             {tabs.map((tab, index) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(index)}
//                 className={`
//                   relative flex-1 text-center py-3 px-3 sm:px-6 text-sm sm:text-base font-medium transition-colors duration-200 whitespace-nowrap
//                   ${activeTab === index
//                     ? "text-foreground"
//                     : "text-muted-foreground hover:text-foreground/70"
//                   }
//                 `}
//               >
//                 {tab.title}

//                 {/* Animated underline */}
//                 {activeTab === index && (
//                   <motion.div
//                     layoutId="tab-underline"
//                     className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#72339F]"
//                     transition={{ type: "spring", stiffness: 400, damping: 35 }}
//                   />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* ── TAB CONTENT ── */}
//         <div className="relative min-h-[420px] sm:min-h-[380px]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.3 }}
//               className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center"
//             >
//               {/* Left – Illustration */}
//               <div className="flex items-center justify-center mt-8">
//                 <img
//                   src={tabs[activeTab].image}
//                   alt={tabs[activeTab].heading}
//                   className="w-full max-w-[360px] sm:max-w-[420px] h-auto object-contain drop-shadow-xl"
//                 />
//               </div>

//               {/* Right – Text */}
//               <div className="flex flex-col gap-4 mt-8">
//                 {/* Badge pill */}
//                 <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full bg-[#72339F] text-white text-xs font-semibold tracking-wide">
//                   {tabs[activeTab].badge}
//                 </span>

//                 <h3 className="font-sora text-3xl sm:text-4xl font-bold text-foreground leading-tight">
//                   {tabs[activeTab].heading}
//                 </h3>

//                 <p className="text-muted-foreground text-base leading-relaxed max-w-md">
//                   {tabs[activeTab].desc}
//                 </p>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <AnalyticsSection />

//         {/* Stats Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="font-sora bg-card rounded-2xl p-6 border-2 border-[#72339F] text-center shadow-[0_8px_24px_rgba(114,51,159,0.15)]"
//             >
//               <div className="w-10 h-10 bg-[#72339F] rounded-xl mx-auto mb-4 flex items-center justify-center">
//                 <img src={stat.icon} className="w-12 h-12 object-contain" />
//               </div>

//               <div className="font-sora text-3xl font-bold text-foreground mb-1">
//                 <CountUp value={stat.value} />
//               </div>

//               <div className="font-sora text-sm text-muted-foreground">
//                 {stat.label}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default DataToRevenueSection;

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FoundationImg from "@/assets/FoundationData.png";
import RecognitionImg from "@/assets/RecognitionData.png";
import CommunityImg from "@/assets/CommunityData.png";
import ReputationImg from "@/assets/ReputationData.png";
import LeadImg from "@/assets/LeadData.png";

import AnalyticsSection from "./AnalyticsSection";

const tabs = [
  {
    id: "foundation",
    title: "Foundation",
    image: FoundationImg,
    badge: "Start with clean data",
    heading: "Data Infrastructure",
    desc: "Establish a strong foundation with verified, structured, and continuously updated data. This ensures accuracy across systems, reduces noise, and enables precise targeting, giving your teams the confidence to act on reliable insights.",
  },
  {
    id: "recognition",
    title: "Recognition",
    image: RecognitionImg,
    badge: "Know who matters",
    heading: "AI Contact Intelligence",
    desc: "Use AI-driven intelligence to enrich contact and account data with meaningful context. Identify key decision-makers, understand their roles and behaviors, and prioritize outreach based on signals that truly matter.",
  },
  {
    id: "community",
    title: "Community",
    image: CommunityImg,
    badge: "Build real connections",
    heading: "Data + Events Ecosystem",
    desc: "Integrate data with event-led engagement to create a connected ecosystem. Foster relationships through meaningful interactions, strengthen your network, and drive consistent engagement across multiple touchpoints.",
  },
  {
    id: "reputation",
    title: "Reputation",
    image: ReputationImg,
    badge: "Grow where it counts",
    heading: "India → Global Scale",
    desc: "Leverage strong positioning in India and the broader APAC region to build credibility and momentum. Create a scalable framework that supports expansion into global markets while maintaining local relevance.",
  },
  {
    id: "lead",
    title: "Lead Intelligence",
    image: LeadImg,
    badge: "Convert with clarity",
    heading: "Market Intelligence",
    desc: "Transform raw data into actionable intelligence that drives smarter decisions. Identify high-intent opportunities, refine your strategy, and accelerate conversions with insights designed for measurable growth.",
  },
];

// const stats = [
//   { icon: IconUsers, value: "50K+", label: "Business Leads" },
//   { icon: IconUsers, value: "300M+", label: "Decision Makers" },
//   { icon: IconUsers, value: "3B+", label: "CXO Leaders Data Points" },
//   { icon: IconUsers, value: "800K+", label: "B2B Organisations" },
// ];

const SCROLL_PER_TAB = 700;
const AFTER_LAST_TAB_BUFFER = 500;
const LAST_TAB_THRESHOLD = 0.95;

const DataToRevenueSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const TOTAL_EXTRA = SCROLL_PER_TAB * tabs.length + AFTER_LAST_TAB_BUFFER;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const scrolled = window.scrollY - sectionTop;

      if (scrolled < 0 || scrolled > TOTAL_EXTRA) return;

      const rawIndex = scrolled / SCROLL_PER_TAB;
      const tabIndex = Math.min(
        tabs.length - 1,
        Math.max(0, Math.floor(rawIndex))
      );

      if (tabIndex === tabs.length - 1 && rawIndex < tabs.length - 1 + LAST_TAB_THRESHOLD) {
        setActiveTab(tabIndex);
        return;
      }

      if (tabIndex < tabs.length - 1) {
        setActiveTab(tabIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{ height: `calc(100vh + ${SCROLL_PER_TAB * tabs.length}px)` }}
    >
      <section
        className="py-20 px-4 sm:px-6 bg-background"
        style={{ position: "sticky", top: 0, minHeight: "100vh", overflow: "hidden" }}
      >
        <div className="max-w-5xl mx-auto">

          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="section-badge border border-[#470277]">
              Data-driven Strategy
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sora text-4xl md:text-5xl font-bold text-center mb-3">
            From Data to <span className="text-[#72339F]/80">Revenue</span>
          </h2>

          <p className="font-sora text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            A structured 5-stage approach that transforms raw lead data into targeted outreach, smarter decisions, and sales growth.
          </p>

          {/* ── TAB NAV ── */}
          <div className="relative mb-10 overflow-x-auto">
            <div className="flex min-w-max sm:min-w-0 border-b border-gray-200">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`
                    relative flex-1 text-center py-3 px-3 sm:px-6 text-sm sm:text-base font-medium transition-colors duration-200 whitespace-nowrap
                    ${activeTab === index
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground/70"
                    }
                  `}
                >
                  {tab.title}

                  {activeTab === index && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#72339F]"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ── TAB CONTENT ── */}
          <div className="relative min-h-[420px] sm:min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center"
              >
                {/* Left – Illustration */}
                <div className="flex items-center justify-center mt-8">
                  <img
                    src={tabs[activeTab].image}
                    alt={tabs[activeTab].heading}
                    className="w-full max-w-[360px] sm:max-w-[420px] h-auto object-contain drop-shadow-xl"
                  />
                </div>

                {/* Right – Text */}
                <div className="flex flex-col gap-4 mt-8">
                  <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full bg-[#72339F] text-white text-xs font-semibold tracking-wide">
                    {tabs[activeTab].badge}
                  </span>

                  <h3 className="font-sora text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                    {tabs[activeTab].heading}
                  </h3>

                  <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                    {tabs[activeTab].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <AnalyticsSection />

          {/* Stats Grid */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"> */}
            {/* {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="font-sora bg-card rounded-2xl p-6 border-2 border-[#72339F] text-center shadow-[0_8px_24px_rgba(114,51,159,0.15)]"
              >
                <div className="w-10 h-10 bg-[#72339F] rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <img src={stat.icon} className="w-12 h-12 object-contain" />
                </div>

                <div className="font-sora text-3xl font-bold text-foreground mb-1">
                  <CountUp value={stat.value} />
                </div>

                <div className="font-sora text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))} */}
          {/* </div> */}

        </div>
      </section>
    </div>
  );
};

export default DataToRevenueSection;