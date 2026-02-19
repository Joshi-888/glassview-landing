import { useState } from "react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onSignIn: () => void;
}

const Navbar = ({ onSignIn }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 50));
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <h1 className="text-3xl md:text-4xl font-display text-gradient-red tracking-wider">
        STREAMIX
      </h1>
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          className="text-foreground hover:text-primary"
          onClick={onSignIn}
        >
          Sign In
        </Button>
        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow"
          onClick={onSignIn}
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
