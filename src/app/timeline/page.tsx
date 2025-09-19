import Image from "next/image";

type EventItem = {
  id: number;
  title: string;
  theme?: string;
  date: string;
  image: string; // put files in /public/timeline/*
};

const events: EventItem[] = [
  {
    id: 1,
    title: "Rakkoucon Fall",
    theme: "Anime Themed",
    date: "Feb 20, 2024",
    image: "/timeline/rukkucon.jpg",
  },
  {
    id: 2,
    title: "Cuties Market",
    theme: "Sanrio Themed",
    date: "Oct 1, 2024",
    image: "/timeline/cuties market.jpg",
  },
  {
    id: 3,
    title: "Holiday Pop-Up",
    theme: "Winter Crafts",
    date: "Dec 7, 2024",
    image: "/timeline/holiday.jpg",
  },
];

export default function TimelinePage() {
  return (
    <main className="w-full bg-white">
      <h1 className="text-4xl font-bold text-center text-black pt-12">Market Timeline</h1>

      {/* Timeline container */}
      <section className="relative max-w-6xl mx-auto px-6 py-16">

        {/* Center vertical line (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-[#5e88c3]" />

        {/* Left vertical line (mobile) */}
        <div className="md:hidden absolute left-6 top-0 w-[2px] h-full bg-gray-200" />

        <div className="space-y-16">
          {events.map((ev, i) => {
            const left = i % 2 === 0;
            // Add negative margin for all except the first point
            const cardMargin = i === 0 ? "" : "md:-mt-24 -mt-12";
            return (
              <div key={ev.id} className={`relative ${cardMargin}`}>
                {/* Mobile dot */}
                <span className="md:hidden absolute left-6 top-4 -translate-x-1/2 w-3 h-3 rounded-full bg-[#5e88c3]" />

                {/* Desktop dot */}
                <span className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-4 border-[#5e88c3]" />

                {/* Row */}
                <div className={`md:flex md:items-center md:gap-10 ${left ? "" : "md:flex-row-reverse"}`}>
                  {/* Card (image + text) */}
                  <div className="md:w-1/2">
                    <div className="bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden">
                      <Image
                        src={ev.image}
                        alt={ev.title}
                        width={1200}
                        height={800}
                        className="w-full h-64 md:h-72 object-cover"
                        priority={i === 0}
                      />
                      <div className="p-5 bg-[#5e88c3]">
                        <h3 className="text-xl font-semibold text-white">{ev.title}</h3>
                        {ev.theme && <p className="text-sm text-white mt-1">{ev.theme}</p>}
                        <p className="text-white font-medium mt-2">{ev.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
