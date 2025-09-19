import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans global bg-white">
        <header className="bg-[#5e88c3] text-white py-12 text-center">
          <h1 className="text-5xl font-bold tracking-wide">arihcrochets</h1>
        </header>
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}