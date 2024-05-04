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
    <div className="w-full lg:w-[400px] bg-[#B5C0D0] dark:bg-slate-900 lg:bg-white lg:dark:bg-white ">
      <label className="h-6 text-Black dark:text-white lg:dark:text-black  gap-2 flex justify-end lg:justify-end  items-center">
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
