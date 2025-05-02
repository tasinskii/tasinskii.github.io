
// src/App.js
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-2xl max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Site</h1>
        <p className="text-lg mb-6">
          This is a React site hosted on GitHub Pages. 🎉
        </p>
        <a
          href="https://github.com/your-username"
          className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My GitHub
        </a>
      </div>
    </div>
  );
}

export default App;

