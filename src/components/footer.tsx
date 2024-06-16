import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center text-zinc-400 border-t mt-auto py-2 ">
      <Image
        src="/ResectaurLogo.svg"
        alt="Resectaur"
        width="150"
        height="80"
        className="opacity-80"
      />
      <small>&copy; 2024. All Rights Reserved</small>
    </footer>
  );
}
