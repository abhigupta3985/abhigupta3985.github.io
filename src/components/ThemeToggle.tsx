import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="border-primary/40 hover:bg-primary/10 transition"
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </Button>
  );
};
