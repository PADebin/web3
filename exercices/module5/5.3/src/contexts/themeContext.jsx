import React, { createContext, useState, useCallback, useMemo } from "react";

const themes = {
  light: {
    backgroundColor: "#fff",
    primaryTextColor: "#222",
    secondaryTextColor: "#666",
    linkColor: "#1976d2",
  },
  dark: {
    backgroundColor: "#181c24",
    primaryTextColor: "#f5f5f5",
    secondaryTextColor: "#b0b0b0",
    linkColor: "#90caf9",
  },
};

const ThemeContext = createContext(null);

const ProviderWrapper = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const setDarkTheme = useCallback(() => setTheme("dark"), []);
  const setLightTheme = useCallback(() => setTheme("light"), []);
  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "light" ? "dark" : "light")),
    []
  );
  const getCurrentThemeDetails = useCallback(() => themes[theme], [theme]);

  const exposed = useMemo(
    () => ({
      theme,
      setDarkTheme,
      setLightTheme,
      toggleTheme,
      getCurrentThemeDetails,
    }),
    [theme, setDarkTheme, setLightTheme, toggleTheme, getCurrentThemeDetails]
  );

  return (
    <ThemeContext.Provider value={exposed}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ProviderWrapper };
