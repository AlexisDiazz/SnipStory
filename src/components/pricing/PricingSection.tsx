import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";

const PricingTier = ({
  name,
  price,
  description,
  features,
  isPopular,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => (
  <CardSpotlight className={`h-full ${isPopular ? "border-primary" : "border-white/10"} border-2`}>
    <div className="relative h-full p-6 flex flex-col">
      {isPopular && (
        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {!price.startsWith("Custom") && (
          <span className="text-gray-400">/month</span>
        )}
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="button-gradient w-full">
        Get Started
      </Button>
    </div>
  </CardSpotlight>
);

export const PricingSection = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          Choose Your{" "}
          <span className="text-gradient font-medium">Content Package</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-400"
        >
          Select the perfect clipping package with professional editing and social media optimization
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingTier
          name="Initial Boost"
          price="$399"
          description="Designed for emerging creators"
          features={[
            "Up to 2 content hours per month",
            "Up to 15 clips delivered",
            "Basic platform optimization",
            "Automatic subtitles",
            "Basic analytics dashboard (views only)",
            "API integration not included",
            "No dedicated account manager",
            "Email support (48h response time)",
            "Monthly strategy session not included",
            "Custom feature development not available"
          ]}
        />
        <PricingTier
          name="Accelerated Growth"
          price="$1,349"
          description="Ideal for established creators"
          features={[
            "Up to 8 content hours per month",
            "Up to 40 clips delivered",
            "Basic optimization with SEO",
            "Automatic & customizable subtitles",
            "Full analytics dashboard (advanced metrics, trends)",
            "API integration not included",
            "No dedicated account manager",
            "Email & chat support (12h response time)",
            "30-minute monthly strategy session",
            "Custom feature development not available"
          ]}
          isPopular
        />
        <PricingTier
          name="Tailored Solution"
          price="Custom pricing"
          description="Custom solutions for large creators and companies"
          features={[
            "Custom content volume",
            "Unlimited clips (manual curation)",
            "Optimization with SEO & SEM",
            "Advanced multilingual subtitles",
            "Custom analytics (predictive reporting)",
            "API integration with CMS, editing & marketing automation",
            "Dedicated account manager (1-on-1 support)",
            "24/7 support with SLA",
            "Fully personalized strategy sessions",
            "Custom feature development available"
          ]}
        />
      </div>
    </section>
  );
};