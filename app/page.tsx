import Card from "./components/card";
import { rudiments } from "./data/rudiment-data";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-around lg:flex-row lg:gap-36 ">
      <Card rudiments={rudiments} />
    </main>
  );
}
