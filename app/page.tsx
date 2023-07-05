import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black h-screen flex justify-center items-center text-white flex-col">
      <Image
        alt="Kodemia"
        src="/kodemia.png"
        height={700}
        width={700}
        className="animate-pulse"
      />
      <h1 className="text-3xl font-semibold">Koders Mock API</h1>
    </main>
  );
}
