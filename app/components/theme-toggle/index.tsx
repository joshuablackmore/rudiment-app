import { useTheme } from "../../contexts/themeContext";
import React, { useEffect } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark");
    document.querySelector("html")?.classList.add(theme);
  }, [theme]);

  return (
    <div className="w-full bg-slate-600 dark:bg-slate-900">
      <label className="h-6 text-white  gap-2 flex justify-end items-center">
        {theme === "light" ? <h1>Light mode</h1> : <h1>Dark mode</h1>}
        <input
          className="right-0 size-4 mr-2"
          type="checkbox"
          onChange={handleThemeChange}
          checked={theme === "dark"}
        />
      </label>
    </div>
  );
};

export default ThemeToggle;
