export default function RootNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600">Oops, this page doesn’t exist.</p>
      <a href="/" className="text-blue-600 underline">
        Back to Home
      </a>
    </div>
  );
}
