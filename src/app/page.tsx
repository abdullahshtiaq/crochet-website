import Image from "next/image";
import { Instagram } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <section className="flex items-center justify-center min-h-[80vh] bg-white px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Text Section with animation */}
          <div className="bg-[#5e88c3] text-white p-8 rounded-2xl shadow-lg animate-slide-in-left" style={{ flex: "1" }}>
            <h1 className="text-5xl font-bold mb-6">
              arihcrochets
            </h1>
            <p className="text-lg leading-relaxed">
              Bringing handmade crochet designs to life in Calgary.  
              From cozy scarves and blankets to beautiful custom pieces,  
              each item is crafted with love and care.
            </p>
          </div>
          {/* Right Image Section */}
          <div className="relative w-full h-80 md:h-[700px]">
            <Image
              src="/main.jpg"
              alt="Crochet showcase"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>
      {/* Instagram Bar */}
      <div className="bg-[#5e88c3] py-6 flex justify-center">
        <a
          href="https://instagram.com/arihcrochets"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-gray-200 transition"
        >
          <Instagram size={28} />
          <span className="text-lg font-medium">Follow on Instagram</span>
        </a>
      </div>
    </>
  );
}