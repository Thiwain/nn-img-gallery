import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="bg-black flex flex-col gap-4 sm:flex-row sm:justify-between">
        <h1 className="text-white text-xl items-center p-4 font-bold max-w-6xl">
          <Link href="/"> Next.js Image Gallery</Link>
        </h1>
      </nav>
    </header>
  );
}
