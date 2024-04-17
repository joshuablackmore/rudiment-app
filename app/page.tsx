import Image from "next/image";
import Card from "./components/card";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center p-24">
      <Card />
    </main>
  );
}
