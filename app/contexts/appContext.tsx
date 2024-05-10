"use client";
import { createContext, useContext, useState } from "react";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type Theme = "light" | "dark";

export type RudimentProps = {
  id: number;
  name: string;
  drum_drills_rating: number;
  complexity: number;
  street_cred: number;
  image_white: string;
  image_black: string;
  info: string;
};
type AppContextProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  displayedRudiment: RudimentProps;
  setDisplayedRudiment: React.Dispatch<React.SetStateAction<RudimentProps>>;
  slider: boolean;
  setSlider: React.Dispatch<React.SetStateAction<boolean>>;
};
export const AppContext = createContext<AppContextProps | null>(null);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [slider, setSlider] = useState(false);
  const [displayedRudiment, setDisplayedRudiment] = useState<RudimentProps>({
    id: 0,
    name: "",
    drum_drills_rating: 0,
    complexity: 0,
    street_cred: 0,
    image_white: "",
    image_black: "",
    info: "",
  });

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        displayedRudiment,
        setDisplayedRudiment,
        slider,
        setSlider,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useRudimentApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}
