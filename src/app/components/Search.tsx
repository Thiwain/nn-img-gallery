"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/results/${search}`); //used this("") insterd of this (``)
    setSearch("");
  };

  return (
    <form
      className="flex justify-center md:justify-between gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="bg-white p-2 mr-10 mt-3 mb-3 w-80 sm:w-80 text-xl rounded text-black"
      />
    </form>
  );
}
