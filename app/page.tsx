"use client";
import Card from "./components/card";
import { rudiments } from "./data/rudiment-data";
import { AppContextProvider } from "./contexts/appContext";
import React from "react";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-center bg-white lg:flex-col lg:justify-start lg:gap-16">
      <AppContextProvider>
        <Header rudiments={rudiments} />
        <Card rudiments={rudiments} />
      </AppContextProvider>
    </main>
  );
}
