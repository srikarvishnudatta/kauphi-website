import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Events from "@/components/events";
import Footer from "@/components/footer";
import Reserve from "@/components/reserve";
export default function Home() {
  return (
    <>
      <main className="h-screen flex flex-col">
        <Navbar />
        <Hero />
      </main>
      <About />
      <Events />
      <Reserve />
      <Footer />
    </>
  );
}
