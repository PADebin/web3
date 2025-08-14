import { useContext } from "react";
import { ThemeContext } from "/src/contexts/themeContext";

const Footer = () => {
  const {
    toggleTheme,
    getCurrentThemeDetails,
    theme: themeName,
  } = useContext(ThemeContext);
  const theme = getCurrentThemeDetails();
  const icon = themeName === "dark" ? "🌙" : "☀️";
  return (
    <footer
      style={{
        marginTop: 32,
        padding: 16,
        background: theme.backgroundColor,
        color: theme.secondaryTextColor,
        textAlign: "center",
        borderTop: `1px solid ${theme.secondaryTextColor}20`,
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          background: theme.linkColor,
          color: theme.backgroundColor,
          border: "none",
          borderRadius: 4,
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: 18,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {icon} Changer de thème
      </button>
    </footer>
  );
};

export default Footer;
