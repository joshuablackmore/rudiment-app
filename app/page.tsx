"use client";
import Card from "./components/card";
import ThemeToggle from "./components/theme-toggle";
import { rudiments } from "./data/rudiment-data";
import { ThemeContextProvider } from "./contexts/themeContext";
import React from "react";

export default function Home() {
  return (
    <main className=" flex h-[100dvh] flex-col items-center justify-center lg:flex-row lg:gap-36">
      <ThemeContextProvider>
        <ThemeToggle />
        <Card rudiments={rudiments} />
      </ThemeContextProvider>
    </main>
  );
}
