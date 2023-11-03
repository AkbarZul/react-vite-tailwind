

function App() {

  return (
    <>
      <div className="max-w-sm mx-auto overflow-hidden rounded shadow-lg">
        <img
          className="w-full h-auto"
          src="https://via.placeholder.com/300"
          alt="Placeholder"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Category 1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            Category 2
          </span>
        </div>
      </div>
      <div className="w-full h-screen text-4xl text-blue-600 flex items-center justify-center">
      Hello world, Try vite and tailwind
     </div>
    </>
  );
}

export default App;
