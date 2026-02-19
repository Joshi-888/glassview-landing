import { Search, Home, Film, Tv, Monitor, TrendingUp, Plus, Shuffle, LogIn } from "lucide-react";

interface SidebarNavProps {
  onSignIn: () => void;
}

const SidebarNav = ({ onSignIn }: SidebarNavProps) => {
  const navItems = [
    { icon: Search, label: "Search" },
    { icon: Home, label: "Home", active: true },
    { icon: Film, label: "Movies" },
    { icon: Tv, label: "TV Shows" },
    { icon: Monitor, label: "My List" },
    { icon: TrendingUp, label: "Trending" },
    { icon: Plus, label: "New" },
    { icon: Shuffle, label: "Shuffle" },
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 z-40 w-16 md:w-20 flex flex-col items-center py-6 gap-2 glass border-r-0 border-t-0 border-b-0">
      <div className="mb-6">
        <span className="text-2xl md:text-3xl font-display text-primary font-bold">S</span>
      </div>

      <nav className="flex flex-col items-center gap-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-200 group ${
              item.active
                ? "bg-primary/20 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </nav>

      <button
        onClick={onSignIn}
        className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
        title="Sign In"
      >
        <LogIn className="w-5 h-5" />
      </button>
    </aside>
  );
};

export default SidebarNav;
