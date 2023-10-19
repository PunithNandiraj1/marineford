export default function Navbar() {
  return (
    <nav className="bg-black text-white p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold">Marineford</span>
          <span className="ml-2 bg-white text-black rounded px-2 py-0.5 text-xs">
            BETA
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:underline">
            Projects
          </a>
          <a href="#" className="hover:underline">
            Grants
          </a>
          <a href="#" className="hover:underline">
            Hackathons
          </a>
          <button className="bg-white text-black px-4 py-1.5 rounded">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}
