// import { ArrowRight, CheckCircle2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// import FeatureLeftImg from "@/assets/whychooseus.png";
// import { NavLink } from "./NavLink";

// const features = [
//   "AI-driven Contact + Account Intelligence",
//   "India + APAC strong, global expansion",
//   "Data + Events Network + Client Account List Enrichment",
//   "Flexible, volume-based, competitive",
//   "Trusted Growth Partner - Events + Data + AI",
//   "Event-Driven Market Intel ObserveNow",
// ];

// const marqueeItems = [
//   "EXPERTISE",
//   "AI POWERED SALES INTELLIGENCE",
//   "CXO DATA PACKS",
//   "REVENUE-DRIVING INTELLIGENCE",
//   "LEAD-TO-REVENUE",
// ];

// const WhyChooseUsSection = () => {
//   return (
//     <section className="pt-16 pb-0 bg-[#470277]/5 overflow-hidden">
//        <div className="container mx-auto px-4">
//         {/* Badge */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex justify-center mb-8"
//         >
//           <span className="section-badge border border-[#470277]">Why Choose Us</span>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Image Box */}
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex-1 w-full"
//           >
//             <div
//               className="
//                 relative
//     w-full
//     h-[420px] md:h-[500px]
//     rounded-2xl
//     border-2 border-[#72339F]/40
//     shadow-[0_12px_40px_rgba(114,51,159,0.15)]
//     overflow-hidden
//     hover:-translate-y-2
//     transition-all duration-300
//               "
//             >
//               {/* Replace this div with your actual image */}
//               {/* <div className="w-full h-full rounded-xl bg-gray-100" /> */}
//               <img 
//   src={FeatureLeftImg}
//   alt="Why Choose Us"
//   className="absolute inset-0 w-full h-full object-cover -translate-y-0"
// />

//             </div>
//           </motion.div>

//           {/* Content */}
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex-1 w-full"
//           >
//             <h2 className="font-sora text-3xl md:text-4xl font-bold mb-2">
//               Trusted Partner in
//             </h2>
//             <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#72339F]/80 mb-6">
//               Data-Driven Growth
//             </h2>
//             <p className="font-sora text-muted-foreground mb-8">
//               With advanced data extraction, verified lead generation, and a track record of powering faster conversions, helps businesses unlock real opportunities.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//               {features.map((feature, index) => (
//                 <motion.div 
//                   key={index} 
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-start gap-2"
//                 >
//                   <CheckCircle2 className="w-5 h-5 text-[#72339F] flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-foreground">{feature}</span>
//                 </motion.div>
//               ))}
//             </div>
//           <NavLink to="/pricing">
//             <Button 
//               size="lg" 
//               className="bg-[#72339F] text-white border border-[#72339F] hover:bg-[#6a2f93] hover:border-[#6a2f93] px-8 py-6 text-base group shadow-lg hover:shadow-xl transition-all"
//             >
//               EXPLORE NOW
//               <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </NavLink>
//           </motion.div>
//         </div>
//       </div>

//       <div className="mt-16 py-4 bg-[#0B87BA]/10 overflow-hidden">
//   <motion.div
//     className="whitespace-nowrap flex items-center"
//     animate={{ x: [0, -1000] }}
//     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//   >
//     {[...marqueeItems, ...marqueeItems].map((item, index) => (
//       <div key={index} className="flex items-center">
//         <span className="mx-6 text-sm font-semibold text-foreground">
//           {item}
//         </span>

//         {/* Star BETWEEN items */}
//         <span className="text-[#72339F] mx-6 text-lg">
//           ✦
//         </span>
//       </div>
//     ))}
//   </motion.div>
// </div>
      
//     </section>
//   );
// };

// export default WhyChooseUsSection;

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import IndiaMapImg from "@/assets/india-map1.png";
import BarChartImg from "@/assets/bar-chart.png";
import MapPinImg from "@/assets/map-pin.png";

// ─── Animated CountUp Number ───────────────────────────────────────────────
const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  const formatted = display >= 1000000
    ? (display / 1000000).toFixed(0) + "M"
    : display >= 1000
    ? (display / 1000).toFixed(0) + "K"
    : display.toString();

  return <span ref={ref}>{formatted}{suffix}</span>;
};

// Animated Donut Chart 
const DonutChart = ({ percent }: { percent: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const r = 54;
  const circ = 2 * Math.PI * r;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let p = 0;
    const timer = setInterval(() => {
      p += 1;
      if (p >= percent) { setProgress(percent); clearInterval(timer); }
      else setProgress(p);
    }, 18);
    return () => clearInterval(timer);
  }, [inView, percent]);

  const dash = (progress / 100) * circ;

  return (
    <div ref={ref} className="relative flex items-center justify-center w-36 h-36">
      <svg viewBox="0 0 128 128" className="absolute inset-0 w-full h-full -rotate-90">
        <circle cx="64" cy="64" r={r} fill="none" stroke="#EDE9F6" strokeWidth="12" />
        <circle
          cx="64" cy="64" r={r} fill="none"
          stroke="url(#donutGrad)" strokeWidth="12"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray 0.05s linear" }}
        />
        <defs>
          <linearGradient id="donutGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A855C8" />
            <stop offset="100%" stopColor="#5B21B6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-center z-10">
        <p className="text-lg font-bold text-[#5B21B6] leading-none">{progress}%</p>
        <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">Accurate<br />& Reliable</p>
      </div>
    </div>
  );
};

// Animated Line Chart 
const LineChart = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const points = [
    { x: 112, y: 88 }, { x: 206, y: 72 }, { x: 300, y: 62 },
    { x: 394, y: 42 }, { x: 488, y: 30 },
  ];
  const polyline = points.map(p => `${p.x},${p.y}`).join(" ");
  const area = `${points[0].x},100 ` + polyline + ` ${points[points.length - 1].x},100`;
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start({ pathLength: 1, opacity: 1 });
  }, [inView, controls]);

  return (
    <div ref={ref} className="mt-6">
      <div className="flex items-stretch">
        <div className="flex flex-col items-end justify-between text-xs text-gray-500 pl-5 pr-3 h-56">
          {["60", "40", "20", "0"].map(l => <span key={l}>{l}</span>)}
        </div>
        <svg viewBox="0 0 608 104" preserveAspectRatio="none" className="flex-1 w-full h-56 overflow-visible">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          {[28, 52, 76, 100].map((y) => (
            <line key={y} x1="110" x2="490" y1={y} y2={y} stroke="#E5E7EB" strokeWidth="0.8" />
          ))}
          <motion.polygon
            points={area}
            fill="url(#lineGrad)"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.polyline
            points={polyline}
            fill="none"
            stroke="#5B058C"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          {points.map((p, i) => (
            <motion.circle
              key={i} cx={p.x} cy={p.y} r="3.2"
              fill="#5B058C" stroke="#5B058C" strokeWidth="1.5"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
            />
          ))}
        </svg>
      </div>
      <div className="flex justify-between text-xs text-gray-500 pl-8 mt-2">
        {["Jan", "Feb", "March", "April", "May"].map(l => <span key={l}>{l}</span>)}
      </div>
    </div>
  );
};

// Card wrapper with hover animation 
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(114,51,159,0.13)" }}
    transition={{ type: "spring", stiffness: 300, damping: 22 }}
    className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-5 ${className}`}
  >
    {children}
  </motion.div>
);

// Fade-up wrapper — no variants, no custom prop 
const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// Main Section
const WhyChooseUsSection = () => {
  const tags = [
    "Bank", "Healthcare", "FinTech", "E-Commerce",
    "Technology", "BFSI", "Education", "PSU/Government", "Cybersecurity", "Many more",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#470277]/5">
      <div className="max-w-6xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="section-badge border border-[#470277]">
            Why Choose Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-sora text-4xl md:text-5xl font-bold text-center mb-3">
          Trusted Partner in{" "}
          <span className="text-[#72339F]/80">Data-Driven Growth</span>
        </h2>

        <p className="font-sora text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          With advanced data extraction, verified lead generation, and a track record of powering faster conversions, helps businesses unlock real opportunities.
        </p>

        {/* ── Main Grid Layout ── */}
        <div className="flex flex-col sm:flex-row gap-5">

          {/* Card 1 – 800K+ B2B Organisations (60% width) */}
          <div className="flex-1 sm:flex-[1.5] min-w-0">
            <FadeUp delay={0}>
              <Card className="h-full min-h-[340px]">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="font-sora text-4xl font-bold text-gray-900">
                      <AnimatedNumber value={800000} suffix="+" />
                    </p>
                    <p className="text-sm font-semibold text-gray-700 mt-0.5">B2B Organisations</p>
                    <p className="text-xs text-gray-400 mt-0.5">Covering up Business hubs across India</p>
                  </div>
                  <div className="mt-4 space-y-2.5">
                    <div className="flex items-center gap-4 bg-[#F3E8FF] px-4 py-2 rounded-md w-full max-w-[390px]">
                      <div className="w-8 h-8 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#9B6BC0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                          <path d="M3 9h18" strokeWidth="2" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-700 leading-tight">From startups to enterprises, empowering every sector of the Indian economy.</p>
                    </div>
                    <div className="flex items-center gap-4 bg-[#F3E8FF] px-4 py-2 rounded-md w-full max-w-[390px]">
                      <div className="w-8 h-8 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#9B6BC0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeWidth="2" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-700 leading-tight">Strong presence in 500+ cities across India</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-[390px] xl:w-[440px] shrink-0 relative">
                  <img src={IndiaMapImg} alt="India Map" className="w-full max-h-[300px] object-contain" />
                  {/* Map Pins */}
                  <img src={MapPinImg} alt="Pin" className="absolute w-6 h-6 top-8 left-40" />
                  <img src={MapPinImg} alt="Pin" className="absolute w-6 h-6 top-24 right-28" />
                  <img src={MapPinImg} alt="Pin" className="absolute w-6 h-6 top-33 right-26" />
                  <img src={MapPinImg} alt="Pin" className="absolute w-6 h-6 bottom-20 left-40" />
                  <img src={MapPinImg} alt="Pin" className="absolute w-6 h-6 top-32 left-32" />
                  <img src={MapPinImg} alt="Pin" className="absolute w-5 h-5 top-50 right-50" />
                </div>
              </div>
            </Card>
          </FadeUp>
          </div>

          {/* Card 2 – 340M+ CXO Data Leader Data Points (40% width) */}
          <div className="flex-1 min-w-0">
            <FadeUp delay={0.1}>
              <Card className="h-full flex flex-col justify-between min-h-[340px]">
              <div>
                <p className="font-sora text-4xl font-bold text-gray-900">
                  <AnimatedNumber value={340000000} suffix="+" />
                </p>
                <p className="text-sm font-semibold text-gray-700 mt-0.5">CXO Data Leader Data Points</p>
              </div>
              <img src={BarChartImg} alt="Bar Chart" className="w-60 max-w-[82%] h-auto object-contain mt-6 mx-auto" />
            </Card>
          </FadeUp>
          </div>

        </div>

        {/* ── Bottom Grid: 91% + 34M+ (left) and 50K+ (right spanning both) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">

          {/* Left column container – stacks 91% and 34M+ */}
          <div className="flex flex-col gap-5 col-span-1">
            
            {/* Card 3 – 91% Data Accuracy */}
            <FadeUp delay={0.2}>
              <Card>
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="font-sora text-4xl font-bold text-gray-900">91%</p>
                  <p className="text-sm font-semibold text-gray-700 mt-0.5">Data Accuracy</p>
                  <div className="mt-4 space-y-2.5">
                    {[
                      { icon: "✓", label: "Verified & Validated", sub: "Multi-layer verification on all data" },
                      { icon: "⟳", label: "Real-Time Validation", sub: "Continuous checks to keep data accurate" },
                      { icon: "✦", label: "AI + Manual Checks", sub: "Dual verification with AI & human expertise" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#F3E8FF] flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[10px] text-[#7C3AED]">{item.icon}</span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-700">{item.label}</p>
                          <p className="text-[11px] text-gray-400">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center w-36 shrink-0">
                  <DonutChart percent={91} />
                </div>
              </div>
            </Card>
            </FadeUp>

            {/* Card 4 – 34M+ CXO Data Sets */}
            <FadeUp delay={0.3}>
              <Card className="h-full flex flex-col justify-between">
              <div>
                <p className="font-sora text-4xl font-bold text-gray-900">
                  <AnimatedNumber value={34000000} suffix="+" />
                </p>
                <p className="text-sm font-semibold text-gray-700 mt-0.5">CXO Data Sets</p>
              </div>

              <div className="mt-5">
                {/* +2M badge */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded bg-[#F3E8FF] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <ellipse cx="12" cy="7" rx="8" ry="4" strokeWidth="1.5"/>
                      <path d="M4 7v5c0 2.21 3.58 4 8 4s8-1.79 8-4V7" strokeWidth="1.5"/>
                      <path d="M4 12v5c0 2.21 3.58 4 8 4s8-1.79 8-4v-5" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-700">
                    <span className="font-bold text-[#5B21B6]">+2M new records</span> added this quarter
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-5">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #A855F7, #5B21B6)" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "72%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  />
                </div>

                {/* Industry tags */}
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.07, backgroundColor: "#EDE9FE" }}
                      className="text-[11px] text-[#5B21B6] bg-[#F5F3FF] border border-[#DDD6FE] px-2.5 py-1 rounded-full cursor-default transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Card>
            </FadeUp>

          </div>

          {/* Card 5 – 50K+ Business Leads (right side) */}
          <FadeUp delay={0.4}>
            <Card className="h-full flex flex-col justify-between min-h-[310px]">
              <div>
                <p className="font-sora text-4xl font-bold text-gray-900">
                  <AnimatedNumber value={50000} suffix="+" />
                </p>
                <p className="text-sm font-semibold text-gray-700 mt-0.5">Business Leads</p>
              </div>
              <div className="flex-1">
                <LineChart />
              </div>
              <div className="mt-4 flex items-center gap-3 bg-[#F3E8F8] rounded-xl px-4 py-3">
                <span className="text-[10px] text-[#7C3AED]">⚡</span>
                <div>
                  <p className="text-xs font-semibold text-[#5B21B6]">Fresh. Verified. High Intent.</p>
                  <p className="text-[11px] text-gray-500">Updated daily to help you close faster.</p>
                </div>
              </div>
            </Card>
          </FadeUp>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
