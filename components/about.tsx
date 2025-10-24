import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-20 bg-primary h-screen" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-secondary text-4xl text-center mb-20">Our Journey</h2>
        <div className="flex flex-col items-center md:flex-row justify-between md:justify-around gap-10">
          <div className="bg-white w-72 h-72 md:h-100 md:w-100 md:flex-1"></div>
          <div className="flex flex-col justify-center items-center gap-10 md:flex-1">
            <p className="px-5 text-center">
            Some backstory Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Est quisquam consequuntur ducimus sint debitis deleniti a sed
            illum odit aut doloribus maxime incidunt, voluptate harum. Deserunt
            minima odit similique. Harum.
          </p>
          <Link href={"/about"}
          className="flex justify-center items-center gap-3 bg-secondary font-bold text-primary rounded-md w-fit mx-auto px-2 py-3"
          >
          Know More <ArrowRight size={16}/>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
