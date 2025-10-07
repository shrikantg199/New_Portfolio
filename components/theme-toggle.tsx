"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the actual theme being used (including system theme)
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        // Cycle through themes: light -> dark -> system -> light
        if (currentTheme === "light") {
          setTheme("dark");
        } else if (currentTheme === "dark") {
          setTheme("system");
        } else {
          setTheme("light");
        }
      }}
    >
      {theme === "system" ? (
        <Monitor className="h-[1.2rem] w-[1.2rem]" />
      ) : currentTheme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
