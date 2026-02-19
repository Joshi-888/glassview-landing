import { useState } from "react";
import SidebarNav from "@/components/SidebarNav";
import FeaturedHero from "@/components/FeaturedHero";
import MovieRow from "@/components/MovieRow";
import AuthModal from "@/components/AuthModal";

import poster1 from "@/assets/poster-1.jpg";
import poster2 from "@/assets/poster-2.jpg";
import poster3 from "@/assets/poster-3.jpg";
import poster4 from "@/assets/poster-4.jpg";
import poster5 from "@/assets/poster-5.jpg";
import poster6 from "@/assets/poster-6.jpg";
import poster7 from "@/assets/poster-7.jpg";
import poster8 from "@/assets/poster-8.jpg";
import poster9 from "@/assets/poster-9.jpg";
import poster10 from "@/assets/poster-10.jpg";
import poster11 from "@/assets/poster-11.jpg";
import poster12 from "@/assets/poster-12.jpg";
import poster13 from "@/assets/poster-13.jpg";
import poster14 from "@/assets/poster-14.jpg";

const newThisWeek = [
  { title: "Shadow Blade", image: poster1, year: "2026" },
  { title: "Inferno", image: poster2, year: "2025" },
  { title: "Dark Thriller", image: poster3, year: "2026" },
  { title: "Cyberstrike", image: poster4, year: "2026" },
  { title: "Underworld", image: poster5, year: "2025" },
  { title: "Last Stand", image: poster6, year: "2026" },
  { title: "Silent Hit", image: poster7, year: "2025" },
];

const trendingNow = [
  { title: "The Haunting", image: poster8, year: "2026" },
  { title: "Sunset Love", image: poster9, year: "2025" },
  { title: "Gangster", image: poster10, year: "2026" },
  { title: "Arcane Blade", image: poster11, year: "2026" },
  { title: "Ring Fighter", image: poster12, year: "2025" },
  { title: "Mirror", image: poster13, year: "2026" },
  { title: "Deep Blue", image: poster14, year: "2025" },
];

const topRated = [
  { title: "Cyberstrike", image: poster4, year: "2026" },
  { title: "Dark Thriller", image: poster3, year: "2026" },
  { title: "Gangster", image: poster10, year: "2026" },
  { title: "Arcane Blade", image: poster11, year: "2026" },
  { title: "Shadow Blade", image: poster1, year: "2026" },
  { title: "Inferno", image: poster2, year: "2025" },
  { title: "The Haunting", image: poster8, year: "2026" },
];

const Index = () => {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SidebarNav onSignIn={() => setAuthOpen(true)} />

      <main className="ml-16 md:ml-20">
        <FeaturedHero />

        <div className="px-4 md:px-8 -mt-16 relative z-10">
          <MovieRow title="New this week" movies={newThisWeek} />
          <MovieRow title="Trending Now" movies={trendingNow} />
          <MovieRow title="Top Rated" movies={topRated} />
        </div>
      </main>

      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </div>
  );
};

export default Index;
