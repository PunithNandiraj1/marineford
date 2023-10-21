import Connect from './Connect';

export default function MainContent() {
  return (
    <>
      {/* MainContent Component */}
      <div className="text-black flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold mb-3">
          Empowering Ideas with Decentralized Crowdfunding
        </h1>
        <h2 className="text-2xl mb-8">
          Raise funds for your projects in a secure, transparent, and
          community-driven platform on Sui
        </h2>
        <div className="flex space-x-4">
          {/* <button className="bg-white text-black px-6 py-2.5 rounded">
            Connect Wallet
          </button> */}
          <Connect />
          <button className="border-2 border-white text-black px-6 py-2.5 rounded">
            Explore Projects
          </button>
        </div>
      </div>
      {/* Features Component */}
      {/* <div className="bg-gradient-to-r from-green-800 to-black h-screen flex flex-col justify-center items-center text-white">
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
         
        </div>
      </div> */}

      {/* Functionality Component */}
      {/* <div className="bg-green-900 text-white text-center p-10">
        <div className="flex  items-center justify-center">
          <div>
            <h2 className="text-4xl mb-4">How does the magic happen?</h2>
            <p className="text-xl">
              Quadratic funding is a method of funding public goods that
              involves matching small individual contributions with larger
              matching funds.
            </p>
          </div>
        </div>

        <div className="mt-10 justify-center items-center text-center space-y-6">
          <div className="flex items-center space-x-4">
            <span className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
              01
            </span>
            <p>
              Quadratic funding matches small individual contributions with
              larger funds from donors.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
              02
            </span>
            <p>
              Matching funds are allocated fairly, giving more weight to small
              donations through a mathematical formula for greater impact from
              smaller donors.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
              03
            </span>
            <p>
              Quadratic funding encourages broad support from many small donors
              for public goods and projects.
            </p>
          </div>
        </div>
      </div> */}

      {/* Footer Component */}
      {/* <div className="bg-gradient-to-r from-green-800 to-black text-white text-center p-20">
        <h2 className="text-4xl mb-8">
          Join us in revolutionizing the grants landscape today!
        </h2>
        <button className="px-10 py-3 text-green-900 bg-white rounded-full font-medium transition-transform transform hover:scale-105">
          Get Started
        </button>
      </div> */}
    </>
  );
}
