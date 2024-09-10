export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800 font-sans">
      <div className="text-center p-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

