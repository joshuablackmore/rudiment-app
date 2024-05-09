import { useTheme } from "../../contexts/themeContext";
import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);

  const handleThemeChange = () => {
    const newEnabled = !enabled;
    setEnabled(newEnabled);
    setTheme(newEnabled ? "dark" : "light");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark");
    document.querySelector("html")?.classList.add(theme);
  }, [enabled]);

  return (
    <div className="w-full bg-[#B5C0D0] dark:bg-slate-900 lg:w-[400px] lg:bg-white lg:dark:bg-white ">
      <div className="mr-2 mt-2 flex justify-end gap-2 dark:text-white lg:dark:text-black">
        {theme === "light" ? <h1>dark</h1> : <h1>light</h1>}
        <Switch
          checked={theme === "dark"}
          onChange={handleThemeChange}
          className={`${
            enabled ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Toggle Dark Mode</span>
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>
    </div>
  );
};

export default ThemeToggle;
