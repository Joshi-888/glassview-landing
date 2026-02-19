import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AuthModal = ({ open, onOpenChange }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success(isLogin ? "Welcome back!" : "Account created successfully!");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-strong border-0 sm:max-w-md p-0 overflow-hidden bg-transparent">
        <div className="p-8">
          <h2 className="text-4xl font-display text-center mb-2 text-foreground">
            {isLogin ? "SIGN IN" : "SIGN UP"}
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {isLogin
              ? "Welcome back to Streamix"
              : "Start your streaming journey"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground/80">
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary h-12"
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground/80">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground/80">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary h-12"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 btn-glow text-lg font-semibold"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {isLogin
                ? "New to Streamix? "
                : "Already have an account? "}
              <span className="text-primary font-medium">
                {isLogin ? "Sign up now" : "Sign in"}
              </span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
