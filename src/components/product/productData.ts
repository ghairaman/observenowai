import {
  Briefcase,
  Building2,
  LineChart,
  Megaphone,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import heroDemoVideo from "@/assets/ObserveNow.AI-Demo.mp4";
import contactsShot from "@/assets/product.jpeg";
import uploadShot from "@/assets/productimg1.png";
import projectShot from "@/assets/productimg2.png";
import structureShot from "@/assets/productimg3.png";
import analyticsShot from "@/assets/productimg4.png";
import teamShot from "@/assets/laptop-product.png";
import mobileShot from "@/assets/iphone-img.png";
import addRemoveIcon from "@/assets/add&remove.svg";
import activityMonitoringIcon from "@/assets/activity-monitoring.svg";
import accessControlIcon from "@/assets/access&control.svg";
import rolesPermissionsIcon from "@/assets/roles&permisions.svg";
import microsoftLogo from "@/assets/microsoft.png";
import googleLogo from "@/assets/google.png";
import ibmLogo from "@/assets/ibm.png";
import nttLogo from "@/assets/ntt-logo.png";
import advancedTrackingIcon from "@/assets/advanced-tracking.svg";
import inDepthMonitoringIcon from "@/assets/in-depth-monitoring.svg";
import indiaFocusedIcon from "@/assets/india-focused.svg";
import allInOneIcon from "@/assets/all-in-one.svg";
import reducedBounceIcon from "@/assets/reduced-bounce.svg";
import easyToUseIcon from "@/assets/easy-to-use.svg";
import costEffectiveIcon from "@/assets/cost-effective.svg";
import builtForScaleIcon from "@/assets/built-fo-scale.svg";

export const productLogos = [
  { src: googleLogo, alt: "Google" },
  { src: microsoftLogo, alt: "Microsoft" },
  { src: ibmLogo, alt: "IBM" },
  { src: nttLogo, alt: "NTT Data" },
  { src: googleLogo, alt: "Google Workspace" },
];

export const contactDiscoveryCards = [
  {
    icon: Search,
    title: "Search Any Contact Instantly",
    description:
      "Use LinkedIn URLs or company names to quickly find relevant contacts without manual research.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Data Enrichment",
    description:
      "Automatically enrich raw inputs with verified emails, phone numbers, and professional details.",
  },
  {
    icon: ShieldCheck,
    title: "Outreach-Ready Data",
    description:
      "Get clean, structured contact data that is instantly usable for sales, marketing, or recruitment campaigns.",
  },
];

export const platformFeatureRows = [
  {
    tag: "Bulk Enrichment",
    title: "Enrich Contacts at Scale",
    description:
      "Upload Excel files with basic contact details and let ObserveNow enrich phone numbers and LinkedIn profiles.",
    bullets: [
      "Upload Excel files with basic contact details",
      "Automatically generate emails, phone numbers & LinkedIn profiles",
      "Validate and clean your outreach data instantly",
    ],
    image: uploadShot,
    imageAlt: "Bulk enrichment workspace",
    imageLeft: true,
  },
  {
    tag: "Lead Management",
    title: "Organize Leads with Projects",
    description:
      "Segment leads based on campaigns or industries and manage follow-up workflows with better visibility.",
    bullets: [
      "Segment leads based on campaigns or industries",
      "Manage multiple outreach workflows easily",
      "Instantly access relevant lead data",
    ],
    image: projectShot,
    imageAlt: "Project management board",
    imageLeft: false,
  },
  {
    tag: "Data Structuring",
    title: "Clean & Structure Your Data",
    description:
      "Keep every enriched dataset in one place so teams can export and sync cleaner, CRM-ready records.",
    bullets: [
      "View complete enriched datasets in one place",
      "Automatically organize data based on your ICP",
      "Get CRM-ready structured contact information",
    ],
    image: structureShot,
    imageAlt: "Structured data dashboard",
    imageLeft: true,
  },
  {
    tag: "Analytics",
    title: "Track Performance & Usage",
    description:
      "Monitor platform usage and enrichment outcomes to refine strategy and improve outreach quality.",
    bullets: [
      "Monitor platform usage and activity",
      "Analyze enrichment performance",
      "Optimize outreach strategy with insights",
    ],
    image: analyticsShot,
    imageAlt: "Analytics dashboard",
    imageLeft: false,
  },
];

type TeamCard = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
};

export const teamCards: TeamCard[] = [
  {
    icon: addRemoveIcon,
    iconAlt: "Add and remove users",
    title: "Add & Remove Users",
    description:
      "Quickly onboard team members and update access when responsibilities change.",
  },
  {
    icon: activityMonitoringIcon,
    iconAlt: "Activity monitoring",
    title: "Activity Monitoring",
    description:
      "Track account actions and usage in real time to maintain transparency across your team.",
  },
  {
    icon: accessControlIcon,
    iconAlt: "Access and control",
    title: "Access & Control",
    description:
      "Set permissions and limit features by role to keep workflows secure and structured.",
  },
  {
    icon: rolesPermissionsIcon,
    iconAlt: "Roles and permissions",
    title: "Roles & Permissions",
    description:
      "Assign role-based access so every teammate sees only what they need.",
  },
];

export const creditBullets = [
  {
    title: "Allocate Credits",
    description:
      "Assign credits to team members based on their roles, responsibilities, or workload.",
  },
  {
    title: "Adjust Limits Anytime",
    description:
      "Easily scale up, increase, or remove credit limits as your team's needs evolve.",
  },
  {
    title: "Track Usage",
    description:
      "Monitor credit consumption across your team in real time for efficient utilization.",
  },
];

export const profileCards = [
  {
    icon: advancedTrackingIcon,
    iconAlt: "Advanced tracking",
    iconWrapperClassName:
      "bg-gradient-to-br from-violet-100 to-violet-200",
    title: "Plan Management",
    description:
      "Upgrade or downgrade your plan anytime based on your needs, with complete flexibility.",
  },
  {
    icon: inDepthMonitoringIcon,
    iconAlt: "In-depth monitoring",
    iconWrapperClassName:
      "bg-gradient-to-br from-blue-100 to-blue-200",
    title: "Profile & Invoices",
    description:
      "Update your profile details and access invoices easily whenever you need them.",
  },
];

type WhyChooseCard = {
  icon: string;
  title: string;
  description: string;
  iconAlt: string;
};

export const whyChooseCards: WhyChooseCard[] = [
  {
    icon: indiaFocusedIcon,
    iconAlt: "India focused",
    title: "India-Focused Data",
    description:
      "Accurate and relevant contact data tailored to the Indian market to help you target the right audience.",
  },
  {
    icon: allInOneIcon,
    iconAlt: "All in one",
    title: "All-in-One Platform",
    description:
      "Find, validate, and structure contact data from one place without juggling multiple tools.",
  },
  {
    icon: reducedBounceIcon,
    iconAlt: "Reduced bounce",
    title: "Reduced Bounce Rates",
    description:
      "Clean and verified data ensures your emails reach real inboxes and improve deliverability.",
  },
  {
    icon: easyToUseIcon,
    iconAlt: "Easy to use",
    title: "Easy-to-Use Interface",
    description:
      "A clean and intuitive UI designed for speed, simplicity, and minimal learning curve.",
  },
  {
    icon: costEffectiveIcon,
    iconAlt: "Cost effective",
    title: "Cost-Effective Pricing",
    description:
      "Flexible credit-based pricing so you only pay for what you actually use.",
  },
  {
    icon: builtForScaleIcon,
    iconAlt: "Built for scale",
    title: "Built for Scale",
    description:
      "Designed to support individuals and growing teams with added flexibility and capability.",
  },
];

export const audienceCards = [
  {
    icon: LineChart,
    title: "Sales Teams",
    description:
      "Identify high-intent prospects and connect directly using verified contact data.",
  },
  {
    icon: Users,
    title: "Recruiters",
    description:
      "Find and reach top talent faster with enriched candidate data and verified profiles.",
  },
  {
    icon: Megaphone,
    title: "Marketers",
    description:
      "Build targeted audiences and run high-converting campaigns with accurate data.",
  },
  {
    icon: Building2,
    title: "Agencies",
    description:
      "Manage lead generation for multiple clients with structured and scalable data workflows.",
  },
  {
    icon: Briefcase,
    title: "Founders",
    description:
      "Scale outreach, validate markets, and build pipelines without relying on multiple tools.",
  },
];

export const heroVideo = heroDemoVideo;
export const contactRepositoryImage = contactsShot;
export const teamImage = teamShot;
export const creditImage = mobileShot;
