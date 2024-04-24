import Card from "./components/card";
import { rudiments } from "./data/rudiment-data";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Card rudiments={rudiments} />
    </main>
  );
}
