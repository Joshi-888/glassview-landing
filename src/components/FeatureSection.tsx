import { Monitor, Download, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Watch Everywhere",
    description: "Stream on your phone, tablet, laptop, and TV.",
  },
  {
    icon: Download,
    title: "Download & Go",
    description: "Save your favorites and watch offline anytime.",
  },
  {
    icon: Users,
    title: "Create Profiles",
    description: "Personalized experience for everyone in your home.",
  },
  {
    icon: Zap,
    title: "No Ads, Ever",
    description: "Enjoy uninterrupted streaming with zero ads.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-display text-center mb-4 text-foreground">
          WHY <span className="text-gradient-red">STREAMIX</span>?
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-md mx-auto">
          The best streaming experience, designed for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 group"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display mb-2 text-foreground tracking-wide">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
