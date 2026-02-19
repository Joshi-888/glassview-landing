import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$8.99",
    features: ["720p Quality", "1 Device", "Limited Library", "Mobile Only"],
    popular: false,
  },
  {
    name: "Standard",
    price: "$13.99",
    features: ["1080p Quality", "2 Devices", "Full Library", "Download & Watch"],
    popular: true,
  },
  {
    name: "Premium",
    price: "$17.99",
    features: ["4K + HDR", "4 Devices", "Full Library", "All Features"],
    popular: false,
  },
];

interface PricingSectionProps {
  onSelect: () => void;
}

const PricingSection = ({ onSelect }: PricingSectionProps) => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-display text-center mb-4 text-foreground">
          CHOOSE YOUR <span className="text-gradient-red">PLAN</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-md mx-auto">
          Pick the plan that works for you. Cancel anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 flex flex-col ${
                plan.popular
                  ? "glass-strong ring-1 ring-primary/50 scale-105"
                  : "glass"
              }`}
            >
              {plan.popular && (
                <span className="text-xs font-semibold text-primary bg-primary/20 self-start px-3 py-1 rounded-full mb-4">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-2xl font-display text-foreground tracking-wide">
                {plan.name}
              </h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full h-12 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 btn-glow"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
                onClick={onSelect}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
