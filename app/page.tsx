import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import EventBar from "@/components/event-bar";
import Events from "@/components/events";
import Footer from "@/components/footer";
import Reserve from "@/components/reserve";
export default function Home() {
  return (
    <>
      <EventBar />
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
