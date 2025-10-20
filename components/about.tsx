export default function About() {
  return (
    <section className="py-20 bg-primary ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-secondary text-4xl text-center mb-20">About us</h2>

        <div className="flex flex-col items-center md:flex-row justify-center md:justify-around gap-10">
          <div className="bg-white h-100 w-100"></div>
          <p className="px-5 text-center md:max-w-1/3">
            Some backstory Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Est quisquam consequuntur ducimus sint debitis deleniti a sed
            illum odit aut doloribus maxime incidunt, voluptate harum. Deserunt
            minima odit similique. Harum.
          </p>
        </div>
      </div>
    </section>
  );
}
