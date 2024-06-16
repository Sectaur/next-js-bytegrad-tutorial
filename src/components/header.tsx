"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Posts", href: "/posts" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="https://learning.resectaur.org">
        <Image
          src="/ResectaurLogo.svg"
          alt="Resectaur"
          width="250"
          height="100"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`${
                  pathname === link.href
                    ? "text-[#23aac9] font-bold"
                    : "text-zinc-400"
                }`}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
