import Image from "next/image";

const projects = [
  { id: 1, title: "Bag", image: "/bag.jpg" },
  { id: 2, title: "Bunny", image: "/bunny.jpg" },
  { id: 3, title: "Green Bunny", image: "/green bunny.jpg" },
  // Add more images here as you add them to your public/portfolio folder
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white p-8 w-full mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center text-black">Portfolio</h1>
      <p className="text-lg text-center mb-10 text-gray-700">
        Here are some of the things I have made!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="overflow-hidden rounded-lg shadow hover:shadow-lg bg-white flex flex-col items-center"
          >
            <Image
              src={proj.image}
              alt={proj.title}
              width={500}
              height={500}
              className="object-cover w-full h-auto"
            />
            <div className="p-4 w-full">
              <h2 className="text-xl font-semibold text-gray-800 text-center">{proj.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}