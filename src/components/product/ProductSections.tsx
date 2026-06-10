import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  contactDiscoveryCards,
  contactRepositoryImage,
  creditBullets,
  creditImage,
  heroVideo,
  platformFeatureRows,
  productLogos,
  profileCards,
  teamCards,
  teamImage,
  whyChooseCards,
} from "./productData";

type SectionHeaderProps = {
  // badge: string;
  title: string;
  highlight?: string;
  description: string;
};

type ScreenshotCardProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  disableHover?: boolean;
};

const SectionHeader = ({
  // badge,
  title,
  highlight,
  description,
}: SectionHeaderProps) => (
  <div className="mx-auto max-w-3xl text-center">
    <div className="mb-5 flex justify-center">
      {/* <span className="section-badge border border-[#470277]/35 bg-white shadow-[0_8px_22px_rgba(114,51,159,0.12)]">
        {badge}
      </span> */}
      
    </div>
    <h2 className="font-sora text-3xl font-bold leading-tight text-[#151018] sm:text-4xl md:text-5xl">
      {title}{" "}
      {highlight ? <span className="violet-gradient-text">{highlight}</span> : null}
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#5f5868] sm:text-base">
      {description}
    </p>
  </div>
);

const ScreenshotCard = ({
  src,
  alt,
  className = "",
  imageClassName = "",
  disableHover = false,
}: ScreenshotCardProps) => (
  <div
    className={`group overflow-hidden rounded-[24px] border border-[#2b1d3d]/15 bg-white shadow-[0_18px_50px_rgba(38,21,63,0.14)] transition-all duration-300 ${!disableHover ? 'hover:border-[#72339F]/60 hover:shadow-[0_22px_60px_rgba(114,51,159,0.16)]' : ''} ${className}`}
  >
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${!disableHover ? 'transition-transform duration-300 group-hover:scale-[1.02]' : ''} ${imageClassName}`}
    />
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-4 text-sm text-[#2b2233] sm:text-[15px]">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#7c4ab0] text-white">
          <Check className="h-3 w-3" />
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const ProductHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fbf8ff_0%,#f4ebfb_52%,#ffffff_100%)] pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-14 h-[420px] bg-[radial-gradient(circle_at_top,rgba(114,51,159,0.16),rgba(114,51,159,0)_65%)]" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8 mt-10"
        >
          <span className="section-badge border border-[#470277]">
            Product Overview
          </span>
        </motion.div>
        <SectionHeader
          title="Turn Buyers Signals Into"
          highlight="Revenue"
          description="ObserveNow.AI helps you identify high-intent prospects, access verified contacts, and act on real-time signals so your team closes deals faster."
        />

        <div className="mt-8 flex justify-center">
          <Button
            asChild
            className="btn-gradient text-primary-foreground shadow-violet"
          >
            <a
              href="https://dashboard.observenow.ai/signup"
              className="flex items-center gap-2"
            >
              START YOUR FREE TRIAL
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-[24px] border border-[#2b1d3d]/15 bg-white shadow-[0_18px_50px_rgba(38,21,63,0.14)] pb-8">
          <video
            src={heroVideo}
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        </div>

        <div className="grid grid-cols-2 items-center gap-8 border-b border-[#e8deef] py-8 sm:grid-cols-3 lg:grid-cols-5">
          {productLogos.map((logo) => (
            <div
              key={`${logo.alt}-${logo.src}`}
              className="flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-6 w-auto object-contain opacity-90 sm:h-8"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProductDiscoverySection = () => {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
         {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4 mt-4"
        >
          <span className="section-badge border border-[#470277]">
            Data Discovery
          </span>
        </motion.div>
        <SectionHeader
          // badge="Data Discovery"
          title="Smart Contact Search &"
          highlight="Enrichment"
          description="Turn LinkedIn profiles or company names into complete, usable contact data instantly."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {contactDiscoveryCards.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-[22px] border border-[#e3d8ec] bg-white px-6 py-8 text-center shadow-[0_10px_28px_rgba(114,51,159,0.08)] hover:shadow-[0_20px_40px_rgba(114,51,159,0.15)] cursor-pointer"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9a72c4] text-white shadow-[0_12px_25px_rgba(114,51,159,0.2)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#18111f]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#625a6c]">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProductRepositorySection = () => {
  return (
    <section className="bg-[#f5edf9] py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10 mt-0"
        >
          <span className="section-badge border border-[#470277]">
            Contact Management
          </span>
        </motion.div>
      </div>

      <div className="container mx-auto grid items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">

        <ScreenshotCard
          src={contactRepositoryImage}
          alt="Contact repository dashboard"
          className="max-w-2xl"
          imageClassName="object-contain"
        />

        <div className="-mt-8">

          <h2 className="font-sora text-3xl font-bold leading-tight text-[#17111d] sm:text-4xl md:text-[48px]">
            Your Central Contact{" "}
            <span className="violet-gradient-text">Repository</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#625a6c] sm:text-base">
            Access, manage, and export all your enriched contacts from one place.
          </p>

          <div className="mt-8 space-y-5">
            {[
              {
                title: "Auto-Save Contacts",
                description:
                  "All contacts fetched via extension or dashboard are automatically stored in one centralized place.",
              },
              {
                title: "Export Anytime",
                description:
                  "Download your entire contact list in Excel format whenever you need, with just one click.",
              },
              {
                title: "CRM-Ready Integration",
                description:
                  "Easily move your structured data into CRM or outreach tools without any extra formatting.",
              },
            ].map((item, index) => (
              <div key={item.title} className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d2c0e3] bg-white text-sm font-semibold text-[#72339F]">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#17111d]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#625a6c]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProductCapabilitiesSection = () => {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
         {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4 mt-4"
        >
          <span className="section-badge border border-[#470277]">
            Platform Capabilities
          </span>
        </motion.div>
        <SectionHeader
          // badge="Platform Capabilities"
          title="Everything You Need to Power"
          highlight="Modern Outreach"
          description="From enriching raw data to organizing, structuring, and analyzing it, ObserveNow.AI gives you complete control over your data pipeline."
        />

        <div className="mt-14 space-y-20">
          {platformFeatureRows.map((row) => (
            <div
              key={row.title}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                row.imageLeft ? "" : "lg:[&>*:first-child]:order-2"
              }`}
            >
              <ScreenshotCard
                src={row.image}
                alt={row.imageAlt}
                className="min-h-[240px] lg:min-h-[280px]"
              />

              <div className="max-w-xl">
                <span className="inline-flex rounded-full bg-[#72339F] px-3 py-1 text-xs font-semibold text-white shadow-[0_8px_18px_rgba(114,51,159,0.2)]">
                  {row.tag}
                </span>
                <h3 className="mt-5 text-2xl font-bold text-[#17111d] sm:text-3xl">
                  {row.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#625a6c] sm:text-base">
                  {row.description}
                </p>
                <div className="mt-6">
                  <BulletList items={row.bullets} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProductTeamSection = () => {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
         {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4 mt-4"
        >
          <span className="section-badge border border-[#470277]">
            Team Management
          </span>
        </motion.div>
        <SectionHeader
          // badge="Team Management"
          title="Manage Your Team"
          highlight="Seamlessly"
          description="Add, organize, and control your team from a single place with complete visibility and access control."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)_220px] lg:items-center">
          <div className="grid gap-6">
            {teamCards.slice(0, 2).map(({ icon, iconAlt, title, description }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-[12px] border border-[#e4d6ef] bg-[#f4ebfb] p-6 text-center shadow-[0_10px_26px_rgba(114,51,159,0.08)] hover:shadow-[0_20px_40px_rgba(114,51,159,0.15)] cursor-pointer"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-transparent">
                  <img
                    src={icon}
                    alt={iconAlt}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#17111d]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#625a6c]">{description}</p>
              </motion.div>
            ))}
          </div>

          <div className="px-2">
            <ScreenshotCard
              src={teamImage}
              alt="Team management console"
              className="mx-auto max-w-3xl border-0 bg-transparent shadow-none"
              imageClassName="object-contain mix-blend-multiply"
              disableHover={true}
            />
          </div>

          <div className="grid gap-6">
            {teamCards.slice(2).map(({ icon, iconAlt, title, description }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-[12px] border border-[#e4d6ef] bg-[#f4ebfb] p-6 text-center shadow-[0_10px_26px_rgba(114,51,159,0.08)] hover:shadow-[0_20px_40px_rgba(114,51,159,0.15)] cursor-pointer"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-transparent">
                  <img
                    src={icon}
                    alt={iconAlt}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#17111d]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#625a6c]">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProductCreditsSection = () => {
  return (
    <section className="bg-[#f5edf9] py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center w-full mb-2 mt-2"
        >
          <span className="section-badge mx-auto border border-[#470277]/35 bg-white">
            Credits Management
          </span>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex justify-center">
            <img
              src={creditImage}
              alt="Credit management view"
              className="h-auto w-full max-w-xl object-contain"
            />
          </div>

          <div>
            <h2 className="font-sora text-3xl font-bold leading-tight text-[#17111d] sm:text-4xl md:text-[48px]">
              Your Central Credit{" "}
              <span className="violet-gradient-text">Control System</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#625a6c] sm:text-base">
              Allocate, manage, and track team credits from one place.
            </p>

            <div className="mt-8 space-y-5">
              {creditBullets.map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d2c0e3] bg-white text-sm font-semibold text-[#72339F]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#17111d]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#625a6c]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProductBillingSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
         {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4 mt-4"
        >
          <span className="section-badge border border-[#470277]">
            Profile & Billing
          </span>
        </motion.div>
        <SectionHeader
          // badge="Profile & Billing"
          title="Manage Your"
          highlight="Account & Billing Effortlessly"
          description="Update your profile, manage plans, and access billing details all in one place."
        />

        <div className="mx-auto mt-10 flex max-w-3xl flex-col justify-center gap-8 md:flex-row">
          {profileCards.map(
            ({ icon, iconAlt, iconWrapperClassName, title, description }) => {
              return (
                <div key={title} className="flex items-start gap-4">
                  <div
                    className={`mt-1 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl ${iconWrapperClassName}`}
                  >
                    <img
                      src={icon}
                      alt={iconAlt}
                      className="h-[72px] w-[72px] object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="mb-0 text-lg font-semibold text-[#17111d]">
                      {title}
                    </h3>
                    <p className="text-[13px] leading-snug text-[#625a6c]">
                      {description}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export const ProductWhyChooseSection = () => {
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6">
         {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4 mt-8"
        >
          <span className="section-badge border border-[#470277]">
            Why Choose Us
          </span>
        </motion.div>
        <SectionHeader
          // badge="Why Choose Us"
          title="Why Businesses Choose"
          highlight="ObserveNow.AI"
          description="Power your outreach with accurate, scalable, and easy-to-use data solutions built for modern teams."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseCards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-[22px] border border-[#e6ddef] bg-white p-7 text-center shadow-[0_10px_24px_rgba(114,51,159,0.06)] hover:shadow-[0_20px_40px_rgba(114,51,159,0.15)] cursor-pointer"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9a72c4] text-white shadow-[0_12px_25px_rgba(114,51,159,0.2)]">
                <img
                  src={card.icon}
                  alt={card.iconAlt}
                  className="h-full w-full rounded-2xl object-cover brightness-200 saturate-0 mix-blend-lighten"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#17111d]">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#625a6c]">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProductCtaSection = () => {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="relative max-w-5xl mx-auto rounded-[28px] bg-[#7C4DA6] text-white px-10 py-12 overflow-hidden">
        <motion.div
          className="absolute -top-4 left-48 w-[110px] h-[110px] bg-white/10 rounded-full"
          animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-2 -right-12 w-[110px] h-[110px] bg-white/10 rounded-full"
          animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -bottom-12 right-1 w-[110px] h-[110px] bg-white/10 rounded-full"
          animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -bottom-12 -left-9 w-[110px] h-[110px] bg-white/10 rounded-full"
          animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <h3 className="font-sora text-2xl text-center md:text-3xl font-semibold mb-2">
          Start Building Better Data Pipelines
        </h3>

        <p className="text-white/80 max-w-2xl text-center mx-auto text-sm mb-6">
          Stop relying on incomplete or outdated data. Power your outreach with verified, structured, and ready-to-use contact intelligence using ObserveNow.AI.
        </p>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-base font-semibold group shadow-lg"
          >
            <a href="https://dashboard.observenow.ai/login" className="flex items-center gap-2">
              GET STARTED
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
