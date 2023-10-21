import Image from 'next/image';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

export default function Home() {
  return (
    <main className="bg-white h-full">
      <Navbar />
      <MainContent />
    </main>
  );
}
