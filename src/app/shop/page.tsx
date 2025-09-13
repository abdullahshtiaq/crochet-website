import Image from "next/image";

const products = [
  { id: 1, name: "Crochet Hat", price: 25, image: "/products/hat1.jpg" },
  { id: 2, name: "Cozy Scarf", price: 35, image: "/products/scarf1.jpg" },
  { id: 3, name: "Tote Bag", price: 40, image: "/products/bag1.jpg" },
  { id: 4, name: "Baby Blanket", price: 60, image: "/products/blanket1.jpg" },
];

export default function ShopPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto bg-white">
      <h1 className="text-4xl font-bold mb-10 text-center">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg flex flex-col"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="rounded-md"
            />
            <h2 className="text-xl mt-4">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button className="mt-auto bg-[#5e88c3] text-white py-2 rounded-lg hover:bg-pink-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
