"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Bag",
    image: "/Bag.jpg",
    inspiration: "Inspired by classic tote designs and vibrant summer colors.",
  },
  {
    id: 2,
    title: "Bunny",
    image: "/bunny.jpg",
    inspiration: "Made for a spring market, inspired by cute plush toys.",
  },
  {
    id: 3,
    title: "Green Bunny",
    image: "/green bunny.jpg",
    inspiration: "A playful twist on the classic bunny, inspired by nature.",
  },
  // Add more images here as you add them to your public/portfolio folder
];

export default function PortfolioPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClose = () => setSelected(null);

  return (
    <main className="min-h-screen bg-white p-8 w-full mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center text-black">Portfolio</h1>
      <p className="text-lg text-center mb-10 text-gray-700">
        Here are some of the things I have made!
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {projects.map((proj, idx) => (
          <button
            key={proj.id}
            className="flex justify-center items-center focus:outline-none"
            onClick={() => setSelected(idx)}
          >
            <Image
              src={proj.image}
              alt={proj.title}
              width={320}
              height={320}
              className="object-cover w-[320px] h-[320px] transition-transform duration-200 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Modal Gallery */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold"
              onClick={handleClose}
              aria-label="Close"
            >
              &times;
            </button>
            <Image
              src={projects[selected].image}
              alt={projects[selected].title}
              width={500}
              height={500}
              className="object-cover w-full h-auto mb-6"
            />
            <h2 className="text-3xl font-bold mb-3 text-[#5e88c3]">
              {projects[selected].title}
            </h2>
            <p className="text-lg text-gray-700">{projects[selected].inspiration}</p>
          </div>
        </div>
      )}
    </main>
  );
}