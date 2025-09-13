import Image from "next/image";

const products = [
  { id: 1, name: "Watermelon", price: 10, image: "/watermelon.jpg" },
  { id: 2, name: "Bows", price: 5, image: "/bows.jpg" },
  { id: 3, name: "Tote Bag", price: 40, image: "/bag.jpg" },
  { id: 4, name: "Baby Blanket", price: 60, image: "/products/blanket1.jpg" },
];

export default function ShopPage() {
  return (
    <main className="flex-grow p-8 w-full mx-auto bg-white">
      <h1 className="text-4xl font-bold mb-10 text-center text-black">Shop</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-center"
          >
            {/* Product Image */}
            <div className="w-full flex justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <h2 className="text-lg font-medium text-gray-800 mt-4">
              {product.name}
            </h2>
            <p className="text-gray-800">${product.price}</p>

            {/* Button */}
            <button className="mt-3 px-6 py-2 border-2 border-[#5e88c3] text-[#5e88c3] rounded-full hover:bg-[#5e88c3] hover:text-white transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
