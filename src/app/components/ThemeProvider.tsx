"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  attribute?: string;
  enableSystem?: boolean;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  attribute = "class",
  enableSystem = true,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Once mounted, we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove the old attribute
    const classList = root.classList;
    if (classList.contains("light")) classList.remove("light");
    if (classList.contains("dark")) classList.remove("dark");

    // Add the current theme attribute
    if (theme === "system" && enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme, attribute, enableSystem]);

  // Listen for system theme changes
  useEffect(() => {
    if (!enableSystem) return;
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      if (theme === "system") {
        const root = window.document.documentElement;
        const systemTheme = mediaQuery.matches ? "dark" : "light";
        
        // Remove both themes first
        if (root.classList.contains("light")) root.classList.remove("light");
        if (root.classList.contains("dark")) root.classList.remove("dark");
        
        // Add the correct theme
        root.classList.add(systemTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [attribute, enableSystem, theme]);

  // Handle the theme toggle directly in this hook
  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    
    // Also, manually update class here for immediate feedback
    const root = window.document.documentElement;
    if (root.classList.contains("light")) root.classList.remove("light");
    if (root.classList.contains("dark")) root.classList.remove("dark");
    
    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    }
  };

  const value = {
    theme,
    setTheme: handleSetTheme,
  };

  // Prevent theme flash by waiting until mounted
  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {mounted ? children : 
        <div style={{ visibility: "hidden" }}>{children}</div>
      }
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};