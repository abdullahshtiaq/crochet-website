"use client"; // needed for usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import "./globals.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Market Timeline", href: "/timeline" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans global bg-white">
        {/* Header with name */}
        <header className="bg-[#5e88c3] text-white py-12 text-center">
          <h1 className="text-5xl font-bold tracking-wide">arihcrochets</h1>
        </header>

        {/* Navbar */}
        <nav className="bg-white shadow-sm border-b relative">
          {/* Centered nav links */}
          <ul className="flex justify-center space-x-10 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative pb-1 transition-colors duration-200 
                      hover:text-[#5e88c3] 
                      ${isActive ? "text-[#5e88c3] font-semibold" : "text-gray-700"}
                    `}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#5e88c3]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Cart icon pinned to right */}
          <div className="absolute right-25 top-1/2 -translate-y-1/2">
            <Link
              href="/cart"
              className="relative text-gray-700 hover:text-[#5e88c3] transition"
            >
              <ShoppingCart size={28} />
              {/* Optional: cart item count badge */}
              {/* 
              <span className="absolute -top-2 -right-2 bg-[#5e88c3] text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                2
              </span> 
              */}
            </Link>
          </div>
        </nav>

        {/* Main page content */}
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
