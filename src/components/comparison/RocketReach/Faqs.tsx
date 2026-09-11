import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import ChevronDownIcon from "@/assets/chevron-down.svg";
import ChevronUpIcon from "@/assets/chevron-up.svg";
import { NavLink } from "../../NavLink";

const faqs = [
  {
    question: "Is ObserveNow.AI a good alternative to RocketReach?",
    answer: "Yes, especially for LinkedIn-based phone number discovery. ObserveNow.AI offers 91% accuracy at $20 for 250 credits, while RocketReach starts at $46/month.  ",
  },
  {
    question: "How much can I save by switching from RocketReach?",
    answer: "RocketReach costs $46/month billed monthly. ObserveNow.AI's pay-per-use model at $20/month means you could save more depending on your usage. No commitment, no wasted budget. ",
  },
  {
    question: "Is ObserveNow.AI better than RocketReach for Indian contacts?",
    answer: "Yes, ObserveNow.AI offers 91% accuracy for Indian contacts (vs RocketReach's ~40-50%), with 1M+ registered Indian businesses. ObserveNow.AI also has specialized features for finding C-level contacts in India. ",
  },
];

const Faqs = () => {
  return (
    <section id="faqs" className="pt-8 pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-3 mt-4"
        >
          <span className="section-badge border border-[#470277] px-3 py-1">
            FAQs
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="font-sora text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
            Frequently Asked <span className="text-[#72339F]/80">Questions</span>
          </h1>
        </motion.div>

        <p className="font-sora text-sm text-muted-foreground sm:text-base max-w-2xl mx-auto mb-6">
          Learn how ObserveNow.AI helps you find, reach, and convert the right prospects.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
        <NavLink to="/contact">
          <Button size="lg" className="btn-gradient text-primary-foreground px-8 py-6 text-base group shadow-violet">
            HAVE MORE DOUBTS? CONNECT WITH US.
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </NavLink>
        </motion.div>

        <Accordion type="single" collapsible className="w-full text-left space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="w-full rounded-2xl border-none bg-[#72339F]/10 px-6"
            >
              {/* <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline"> */}
              <AccordionTrigger className="group flex w-full items-center justify-between gap-4 px-6 py-4 text-left hover:no-underline [&>svg]:hidden">
                {/* {faq.question} */}
                {/* Question text */}
  <span className="text-base font-semibold text-foreground text-left">
    {faq.question}
  </span>

     {/* Custom Toggle */}
  <span className="ml-auto relative flex h-9 w-9 items-center justify-center rounded-full">
    {/* Down Arrow (Closed State) */}
    <img
      src={ChevronDownIcon}
      alt="open"
      className="absolute h-9 w-9 transition-all duration-200 
                 opacity-100 scale-100 
                 group-data-[state=open]:opacity-0 
                 group-data-[state=open]:scale-75"
    />

    {/* Up Arrow (Open State) */}
    <img
      src={ChevronUpIcon}
      alt="close"
      className="absolute h-9 w-9 transition-all duration-200 
                 opacity-0 scale-75 
                 group-data-[state=open]:opacity-100 
                 group-data-[state=open]:scale-100"
    />
  </span>
              </AccordionTrigger>
              <AccordionContent className="-mt-1 ml-7 pl-0 pr-12 text-sm text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
};

export default Faqs;
