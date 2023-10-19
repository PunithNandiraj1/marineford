import Image from 'next/image';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
// import Features from './components/Features';
import Functionality from './components/Functionality';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-black h-full">
      <Navbar />
      <MainContent />
      {/* <Features /> */}
      {/* <Functionality /> */}
      {/* <Footer /> */}
    </main>
  );
}
