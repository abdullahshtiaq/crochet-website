"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Market Timeline", href: "/timeline" },
];

const portfolioDropdown = [
  { name: "Crochet", href: "/portfolio/crochet" },
  { name: "Nails", href: "/portfolio/nails" },
  { name: "Painting", href: "/portfolio/painting" },
  { name: "Miscellaneous", href: "/portfolio/misc" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b relative">
      <ul className="flex justify-center space-x-10 py-4">
        {navLinks.map((link) =>
          link.name === "Portfolio" ? (
            <li key={link.name} className="relative">
            <button
            className={`relative pb-1 transition-colors duration-200 hover:text-[#5e88c3] flex items-center gap-1 ${
                pathname.startsWith("/portfolio")
                ? "text-[#5e88c3] font-semibold"
                : "text-gray-700"
            }`}
            onClick={() => setDropdownOpen((open) => !open)}
            >
            {link.name}
            <ChevronDown size={18} />
            </button>
              {dropdownOpen && (
                <ul className="absolute left-0 top-full mt-2 bg-white border rounded shadow-lg min-w-[160px] z-10">
                  {portfolioDropdown.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-[#5e88c3] hover:text-white transition"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`relative pb-1 transition-colors duration-200 
                  hover:text-[#5e88c3] 
                  ${pathname === link.href ? "text-[#5e88c3] font-semibold" : "text-gray-700"}
                `}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#5e88c3]" />
                )}
              </Link>
            </li>
          )
        )}
      </ul>
      <div className="absolute right-25 top-1/2 -translate-y-1/2">
        <Link
          href="/cart"
          className="relative text-gray-700 hover:text-[#5e88c3] transition"
        >
          <ShoppingCart size={28} />
        </Link>
      </div>
    </nav>
  );
}