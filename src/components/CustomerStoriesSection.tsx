// import { motion } from "framer-motion";
// import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

// import manAvatar from "@/assets/man.png";
// import womanAvatar from "@/assets/woman.png";

// const accuracyData = [
//   { x: 0, y: 15 },
//   { x: 25, y: 30 },
//   { x: 50, y: 55 },
//   { x: 75, y: 70 },
//   { x: 85, y: 75 },
//   { x: 100, y: 91 },
// ];

// const CustomerStoriesSection = () => {
//   return (
//     <section className="pt-15 pb-10 bg-background">
//       <div className="container mx-auto px-4">
//         {/* Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex justify-center mb-8"
//         >
//           <span className="section-badge border border-[#470277]">Customer Story</span>
//         </motion.div>

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1 }}
//           className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
//         >
//           How Our Customers Use <span className="text-[#72339F]/80 font-sora">Our</span>
//           <br />
//           <span className="text-[#72339F]/80 font-sora">Product to Succeed</span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="font-sora text-center text-muted-foreground max-w-2xl mx-auto mb-8"
//         >
//           See how businesses achieve real results with ObserveNow.AI — from verified leads to faster conversions.
//         </motion.p>

//         {/* Bento Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4">

//           {/* Card 1: Large stat + chart (spans 5 cols, 2 rows) */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0 }}
//             whileHover={{ y: -5 }}
//             className="md:col-span-5 md:row-span-2 bg-card border border-border rounded-2xl p-6 shadow-md flex flex-col justify-between"
//             style={{ minHeight: "420px" }}
//           >
//             <div>
//               <div className="font-sora text-5xl font-bold text-foreground mb-1">91%</div>
//               <div className="text-muted-foreground text-base mb-6">Data Accuracy</div>
//             </div>
//             <div className="flex-1" style={{ minHeight: "220px" }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={accuracyData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
//                   <defs>
//                     <linearGradient id="accuracyGradient" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3} />
//                       <stop offset="95%" stopColor="#7C3AED" stopOpacity={0.02} />
//                     </linearGradient>
//                   </defs>
//                   <XAxis
//                     dataKey="x"
//                     tickLine={false}
//                     axisLine={false}
//                     tick={{ fill: "#9CA3AF", fontSize: 11 }}
//                     ticks={[0, 25, 50, 75, 100]}
//                   />
//                   <YAxis
//                     tickLine={false}
//                     axisLine={false}
//                     tick={{ fill: "#9CA3AF", fontSize: 11 }}
//                     ticks={[0, 30, 60, 90, 120]}
//                     domain={[0, 120]}
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="y"
//                     stroke="#7C3AED"
//                     strokeWidth={2.5}
//                     fill="url(#accuracyGradient)"
//                     dot={{ fill: "#7C3AED", r: 4, strokeWidth: 0 }}
//                     activeDot={{ r: 6 }}
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </motion.div>

//           {/* Card 2: 40% Higher Response Rate (blue, row 1 middle) */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             whileHover={{ y: -5 }}
//             className="md:col-span-3 md:row-span-1 bg-[#0B87BA]/10 border border-border rounded-2xl p-6 shadow-md flex flex-col justify-between"
//           >
//             <div>
//               <div className="font-sora text-4xl font-bold text-foreground mb-1">40%</div>
//               <div className="text-muted-foreground text-sm">Higher Response Rate</div>
//             </div>
//             <div className="text-muted-foreground text-sm font-medium">Growth Marketing Team</div>
//           </motion.div>

//           {/* Card 3: Quote – Arjun Malhotra (row 1 right) */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             whileHover={{ y: -5 }}
//             className="md:col-span-4 md:row-span-1 bg-card border border-border rounded-2xl p-6 shadow-md flex flex-col justify-between"
//           >
//             <p className="text-foreground text-sm mb-4">
//               "ObserveNow.AI delivers reliable, decision-maker-level contacts with strong accuracy. It has streamlined our outbound process significantly."
//             </p>
//             <div className="flex items-center gap-3">
//               <img src={manAvatar} alt="Arjun Malhotra" className="w-9 h-9 rounded-full object-cover" />
//               <div>
//                 <div className="font-semibold text-foreground text-sm">Arjun Malhotra</div>
//                 <div className="text-xs text-muted-foreground">Head of Sales, B2B SaaS Company</div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Card 4: Quote – Priya Nair (row 2 middle) */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             whileHover={{ y: -5 }}
//             className="md:col-span-3 md:row-span-1 bg-card border border-border rounded-2xl p-6 shadow-md flex flex-col justify-between"
//           >
//             <p className="text-foreground text-sm mb-4">
//               "High-quality contact intelligence and easy usability. It supports more targeted and effective outreach."
//             </p>
//             <div className="flex items-center gap-3">
//               <img src={womanAvatar} alt="Priya Nair" className="w-9 h-9 rounded-full object-cover" />
//               <div>
//                 <div className="font-semibold text-foreground text-sm">Priya Nair</div>
//                 <div className="text-xs text-muted-foreground">Revenue Operations Lead, Tech Enterprise</div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Card 5: 2X Pipeline Acceleration (purple, row 2 right) */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//             whileHover={{ y: -5 }}
//             className="md:col-span-4 md:row-span-1 bg-[#470277]/10 border border-border rounded-2xl p-6 shadow-md flex flex-col justify-between"
//           >
//             <div>
//               <div className="font-sora text-4xl font-bold text-foreground mb-1">2X</div>
//               <div className="text-muted-foreground text-sm">Pipeline Acceleration</div>
//             </div>
//             <div className="text-muted-foreground text-sm font-medium">B2B Services</div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerStoriesSection;

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

import manAvatar from "@/assets/man.png";
import womanAvatar from "@/assets/woman.png";

const accuracyData = [
  { month: "Mar", y: 15 },
  { month: "Apr", y: 30 },
  { month: "May", y: 55 },
  { month: "Jun", y: 70 },
  { month: "Jul", y: 91 },
];

const middleCards: StoryCard[] = [
  {
    type: "stat",
    stat: "40%",
    label: "Higher Response Rate",
    sub: "Growth Marketing Team",
    bg: "bg-[#0B87BA]/10",
  },
  {
    type: "quote",
    quote:
      "ObserveNow.AI provides precise, high-level contacts that enhance decision-making. Our outbound strategy has become much more efficient since we started using it.",
    name: "Aria Thompson",
    role: "Director of Business Development, Innovative Tech Solutions",
    avatar: womanAvatar,
    bg: "bg-card",
  },
  {
    type: "stat",
    stat: "10X",
    label: "Revenue Boost",
    sub: "Enterprise SaaS",
    bg: "bg-[#470277]/10",
  },
  {
    type: "quote",
    quote:
      "The precise, high-quality contacts from ObserveNow.AI have greatly improved our decision-making. Since we adopted it, our outbound strategy has seen a notable boost in efficiency.",
    name: "Alex Morgan",
    role: "Lead User Experience Designer, Innovative Tech Solutions",
    avatar: manAvatar,
    bg: "bg-card",
  },
];

const rightCards: StoryCard[] = [
  {
    type: "quote",
    quote:
      "ObserveNow.AI delivers reliable, decision-maker-level contacts with strong accuracy. It has streamlined our outbound process significantly.",
    name: "Arjun Malhotra",
    role: "Head of Sales, B2B SaaS Company",
    avatar: manAvatar,
    bg: "bg-card",
  },
  {
    type: "stat",
    stat: "2X",
    label: "Pipeline Acceleration",
    sub: "B2B Services",
    bg: "bg-[#470277]/10",
  },
  {
    type: "quote",
    quote:
      "ObserveNow.AI delivers accurate, top-tier contacts that significantly improve our decision-making process. Our outbound strategy has seen a remarkable boost in efficiency since we began using it.",
    name: "Jordan Lee",
    role: "Senior Marketing Strategist, Creative Insights Agency",
    avatar: womanAvatar,
    bg: "bg-card",
  },
  {
    type: "stat",
    stat: "3X",
    label: "Faster Lead Qualification",
    sub: "Enterprise SaaS",
    bg: "bg-[#0B87BA]/10",
  },
];

type StoryCard =
  | {
      type: "stat";
      stat: string;
      label: string;
      sub: string;
      bg: string;
    }
  | {
      type: "quote";
      quote: string;
      name: string;
      role: string;
      avatar: string;
      bg: string;
    };

const CARD_GAP = 28;
const SPEED = 0.4;

const CardItem = ({ card, cardHeight }: { card: StoryCard; cardHeight: number }) => {
  return (
    <div
      className={`${card.bg} border border-border rounded-2xl p-4 shadow-md flex flex-col justify-between flex-shrink-0`}
      style={{
        height: `${cardHeight}px`,
        minHeight: `${cardHeight}px`,
        maxHeight: `${cardHeight}px`,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {card.type === "stat" ? (
        <>
          <div>
            <div className="font-sora text-4xl font-bold text-foreground mb-1">{card.stat}</div>
            <div className="text-muted-foreground text-sm">{card.label}</div>
          </div>
          <div className="text-muted-foreground text-sm font-medium">{card.sub}</div>
        </>
      ) : (
        <>
          <p className="text-foreground text-[12px] leading-relaxed">
            "{card.quote}"
          </p>
          <div className="flex items-center gap-3 mt-2 flex-shrink-0">
            <img
              src={card.avatar}
              alt={card.name}
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <div className="font-semibold text-foreground text-[11px] truncate">{card.name}</div>
              <div className="text-[10px] text-muted-foreground truncate">{card.role}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const MarqueeColumn = ({
  cards,
  direction = "up",
  containerHeight = 0,
}: {
  cards: StoryCard[];
  direction?: "up" | "down";
  containerHeight?: number;
}) => {
  const [cardHeight, setCardHeight] = useState(240);
  const colRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const current = colRef.current;
      if (!current) return;
      const w = current.getBoundingClientRect().width;
      if (w <= 0) return;

      if (containerHeight > 0) {
        // Make card height such that exactly two cards are visible in the container
        const byContainer = (containerHeight - CARD_GAP) / 2; // one gap between two cards
        const capped = Math.max(100, Math.min(byContainer, w * 1.3));
        setCardHeight(capped);
        return;
      }

      // Default: make cards noticeably taller than they are wide so fewer (≈2) show by default
      const targetHeight = Math.max(100, Math.round(w * 1.25));
      setCardHeight(targetHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    if (colRef.current) {
      ro.observe(colRef.current);
    }
    return () => ro.disconnect();
  }, [cards.length, containerHeight]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (direction === "down") {
      posRef.current = -((cardHeight + CARD_GAP) * cards.length);
    } else {
      posRef.current = 0;
    }

    const animate = () => {
      const total = (cardHeight + CARD_GAP) * cards.length;
      if (direction === "up") {
        posRef.current -= SPEED;
        if (posRef.current <= -total) posRef.current = 0;
      } else {
        posRef.current += SPEED;
        if (posRef.current >= 0) posRef.current = -total;
      }
      track.style.transform = `translateY(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [direction, cards.length, cardHeight]);

  const doubled = [...cards, ...cards];
  const displayHeight = cardHeight;

  return (
    <div
      ref={colRef}
      className="mx-auto w-full max-w-[220px]"
      style={{
        height: containerHeight > 0 ? `${containerHeight}px` : `${displayHeight * 2 + CARD_GAP}px`,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        ref={trackRef}
        style={{ display: "flex", flexDirection: "column", gap: `${CARD_GAP}px` }}
      >
        {doubled.map((card, i) => (
          <CardItem key={i} card={card} cardHeight={displayHeight} />
        ))}
      </div>
    </div>
  );
};

const CustomerStoriesSection = () => {
  const leftCardRef = useRef<HTMLDivElement>(null);
  const [leftCardHeight, setLeftCardHeight] = useState(0);

  useEffect(() => {
    if (!leftCardRef.current) return;
    const update = () => {
      const rect = leftCardRef.current?.getBoundingClientRect();
      if (rect?.height) setLeftCardHeight(rect.height);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(leftCardRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="pt-12 pb-10 bg-background">
      <div className="container mx-auto px-4">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="section-badge border border-[#470277]">Customer Story</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2"
        >
          How Our Customers Use <span className="text-[#72339F]/80 font-sora">Our</span>
          <br />
          <span className="text-[#72339F]/80 font-sora">Product to Succeed</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sora text-center text-muted-foreground max-w-2xl mx-auto mb-4"
        >
          See how businesses achieve real results with ObserveNow.AI — from verified leads to faster conversions.
        </motion.p>

        {/* Bento Grid */}
        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-6 md:gap-x-8">

          {/* ── LEFT: Chart card — wider visual column ── */}
          <motion.div
            ref={leftCardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-card border border-border rounded-2xl p-3 shadow-md flex flex-col justify-between w-full md:w-[640px]"
            style={{ aspectRatio: "1 / 0.78" }}
          >
            <div>
              <div className="font-sora text-4xl font-bold text-foreground mb-1">91%</div>
              <div className="text-muted-foreground text-base mb-4">Data Accuracy</div>
            </div>
            <div className="flex-1">
              <div className="h-full rounded-3xl border border-[#E5E7EB] bg-white/80 p-3">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={accuracyData}
                    margin={{ top: 10, right: 4, left: 4, bottom: 10 }}
                  >
                    <defs>
                      <linearGradient id="accuracyGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#7C3AED" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} stroke="#E5E7EB" strokeDasharray="4 4" />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9CA3AF", fontSize: 11 }}
                      tickFormatter={(value) => value}
                      interval={0}
                      padding={{ left: 12, right: 4 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9CA3AF", fontSize: 11 }}
                      ticks={[0, 25, 50, 75, 100]}
                      domain={[0, 100]}
                      padding={{ top: 10, bottom: 5 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="y"
                      stroke="#7C3AED"
                      strokeWidth={3}
                      fill="url(#accuracyGradient)"
                      dot={{ fill: "#7C3AED", r: 5, strokeWidth: 0 }}
                      activeDot={{ r: 6 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT SIDE: middle + right columns grouped (reduced gap) ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-row items-start gap-6 md:ml-6"
          >
            <motion.div className="-ml-4">
              <MarqueeColumn cards={middleCards} direction="up" containerHeight={leftCardHeight} />
            </motion.div>
            <motion.div>
              <MarqueeColumn cards={rightCards} direction="down" containerHeight={leftCardHeight} />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CustomerStoriesSection;