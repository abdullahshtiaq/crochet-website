import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="flex items-center justify-center min-h-[80vh] bg-white px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Text Section with animation */}
        <div className="animate-slide-in-left">
          <h1 className="text-5xl font-bold text-[#5e88c3] mb-6">
            ArihCrochets
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Bringing handmade crochet designs to life in Calgary.  
            From cozy scarves and blankets to beautiful custom pieces,  
            each item is crafted with love and care.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full h-80 md:h-[600px]">
          <Image
            src="/main.jpg" // replace with your image
            alt="Crochet showcase"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </main>
  );
}
