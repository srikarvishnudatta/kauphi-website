import Button from "@/components/ui/button";

export default function Events() {
  return <section className="max-w-6xl h-screen mt-20">
    <div className="max-w-6xl mx-auto flex flex-col gap-5 items-center">
      <h1 className="font-comodo text-5xl text-primary">Toronto!</h1>
      <h2 className="text-3xl font-bold">Your</h2>
      <h2 className="text-4xl font-comodo text-primary">KAUPHI</h2>
      <h3 className="text-3xl font-bold"> will be waiting for you</h3>
      <h4 className="font-bold">@ 255 Bremney Blvd, Toronto</h4>
      <h4 className="font-bold text-2xl text-primary">On Oct 26, 12pm - 6 pm</h4>
      <Button className="bg-primary font-bold text-secondary px-4 py-6 rounded-md hover:bg-primary/80 transition-colors duration-150 ease-in cursor-pointer">
        See the Menu
      </Button>
      <EventMap />
    </div>
  </section>;
}

function EventMap(){
  return <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3605141972052!2d-79.38828602395066!3d43.6406671711027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d609c5ff9f%3A0x1fc0a7c387627fe0!2s255%20Bremner%20Blvd%2C%20Toronto%2C%20ON%20M5V%203M9!5e0!3m2!1sen!2sca!4v1761250762048!5m2!1sen!2sca" width="400" height="250" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
  </div>
}