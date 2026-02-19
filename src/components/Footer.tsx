const Footer = () => (
  <footer className="border-t border-border py-12 px-6 md:px-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <h2 className="text-2xl font-display text-gradient-red tracking-wider">STREAMIX</h2>
      <p className="text-sm text-muted-foreground">
        © 2026 Streamix. All rights reserved.
      </p>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        <a href="#" className="hover:text-foreground transition-colors">Help</a>
      </div>
    </div>
  </footer>
);

export default Footer;
