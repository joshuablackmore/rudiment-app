import Image from "next/image";
import Card from "./components/card";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Card />
    </main>
  );
}
