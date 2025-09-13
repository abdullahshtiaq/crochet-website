import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "ArihCrochets",
  description: "Handmade Crochet with Love in Calgary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans">
        {/* Navbar */}
        <header className="bg-[#5e88c3] text-white">
          <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
            <Link href="/" className="text-2xl font-bold tracking-wide">
              arihcrochets
            </Link>
            <div className="flex gap-6 text-lg">
              <Link href="/" className="hover:text-blue-200">
                Home
              </Link>
              <Link href="/shop" className="hover:text-blue-200">
                Shop
              </Link>
              <Link href="/portfolio" className="hover:text-blue-200">
                Portfolio
              </Link>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-blue-600 text-white py-6 mt-12">
          <div className="max-w-6xl mx-auto text-center text-sm">
            © {new Date().getFullYear()} ArihCrochets. Handmade with love in Calgary.
          </div>
        </footer>
      </body>
    </html>
  );
}
