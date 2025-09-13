import Image from "next/image";

const projects = [
  { id: 1, title: "Rainbow Blanket", image: "/portfolio/blanket.jpg" },
  { id: 2, title: "Amigurumi Doll", image: "/portfolio/doll.jpg" },
  { id: 3, title: "Crochet Sweater", image: "/portfolio/sweater.jpg" },
];

export default function PortfolioPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="overflow-hidden rounded-lg shadow hover:shadow-lg"
          >
            <Image
              src={proj.image}
              alt={proj.title}
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{proj.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
