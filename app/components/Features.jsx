// components/Features.js

const Features = () => (
  <div className="bg-gradient-to-r from-green-800 to-black h-screen flex flex-col justify-center items-center text-white">
    <h2 className="text-5xl mb-4">
      Built on transparency, accountability, & community driven support
    </h2>
    <p className="text-xl mb-8">
      With Cubik, you can create a project and start receiving funding in
      minutes.
    </p>

    <div className="flex space-x-4">
      <button className="bg-gray-800 p-4 border-2 border-white rounded-full">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 9l6 6L18 9"
          ></path>
        </svg>
      </button>
      <button className="bg-gray-800 p-4 border-2 border-white rounded-full">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 9l6 6L18 9"
          ></path>
        </svg>
      </button>
      <button className="bg-gray-800 p-4 border-2 border-white rounded-full">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 9l6 6L18 9"
          ></path>
        </svg>
      </button>
      {/* Repeat similar button elements for other icons */}
    </div>
  </div>
);

export default Features;
