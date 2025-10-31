export default async function DemoServerPage() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products/81", {
    cache: "no-store",
  });
  const product = await res.json();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      <h1 className="text-2xl font-bold mb-2">🧩 Server Component</h1>
      <p className="text-gray-600 mb-4">
        Data diambil dan dirender sepenuhnya di server.
      </p>

      <div className="border rounded-lg p-6 bg-white shadow-md w-full max-w-md">
        <p>
          <strong>Product:</strong> {product.title}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
      </div>
    </main>
  );
}
