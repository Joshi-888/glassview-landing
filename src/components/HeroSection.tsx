import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Cinematic streaming background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-3xl mt-20 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-display leading-none mb-4 text-foreground">
          UNLIMITED
          <br />
          <span className="text-gradient-red">ENTERTAINMENT</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
          Stream thousands of movies, TV shows, and exclusive originals.
          Watch anywhere, anytime — start your free trial today.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow h-14 px-8 text-lg gap-2"
            onClick={onGetStarted}
          >
            <Play className="w-5 h-5" />
            Start Watching
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="glass h-14 px-8 text-lg gap-2 text-foreground hover:bg-accent"
          >
            <Info className="w-5 h-5" />
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
