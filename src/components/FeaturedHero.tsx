import { Button } from "@/components/ui/button";
import { Play, Info, Star } from "lucide-react";
import featuredHero from "@/assets/featured-hero.jpg";

const FeaturedHero = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src={featuredHero}
          alt="Featured show"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-4 md:px-8 max-w-2xl">
        <span className="text-primary font-semibold text-sm tracking-widest mb-2">
          S SERIES
        </span>
        <h1 className="text-5xl md:text-7xl font-display leading-none mb-2 text-foreground">
          THE HEIST
        </h1>
        <p className="text-lg md:text-xl font-display text-muted-foreground tracking-wider mb-4">
          PART 4
        </p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-rating fill-rating" />
            <span className="text-sm font-semibold text-foreground">8.8/10</span>
          </div>
          <span className="text-sm text-primary font-semibold">2B+ Streams</span>
        </div>

        <div className="flex gap-3">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow h-12 px-8 gap-2 font-semibold"
          >
            <Play className="w-5 h-5 fill-current" />
            Play
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass border-foreground/20 text-foreground hover:bg-accent h-12 px-8 gap-2"
          >
            <Info className="w-5 h-5" />
            Watch Trailer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHero;
