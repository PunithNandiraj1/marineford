import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Projects() {
  return (
    <div className="bg-gray-900 h-screen text-white">
      <Head>
        <title>CUBIK Projects</title>
      </Head>
      <Navbar />
      <main className="p-5">
        <div className="bg-gray-800 p-4 rounded-lg mb-5">
          <div className="flex items-center space-x-4 mb-2">
            <span className="bg-green-500 w-3 h-3 rounded-full"></span>
            <h2 className="text-xl"> Sponsored Project </h2>
          </div>
          <p>
            Sponsored is a global, online hackathon for the Sui and wider web3
            community with the goal of expanding an...
          </p>
        </div>

        <div className="grid grid-cols-6 gap-4">
          <button className="col-span-1 bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
            All Projects
          </button>
          <button className="col-span-1 bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
            Sui
          </button>
          <button className="col-span-1 bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
            Solana
          </button>
          <button className="col-span-1 bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
            Ethereum
          </button>
          <button className="col-span-1 bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
            Consumer
          </button>
          <button className="col-span-1 bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
            Developer Tools
          </button>
        </div>

        <div className="mt-10 text-center">
          <div className="mb-4">
            <img
              src="/path/to/your/image.png"
              alt="No Project Found Image"
              className="mx-auto"
            />
          </div>
          <h2 className="text-2xl mb-2">No Project Found</h2>
          <p>
            We couldn't find any projects matching your search. Please try a
            different query or check back later.
          </p>
        </div>
      </main>
    </div>
  );
}
