 import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Events() {
  return (
    <section className="border-b-1 border-b-primary py-20 ">
     <div className="max-w-6xl mx-auto text-center space-y-4">
       <h2 className="text-3xl px-5 font-bold">Don&apos;t want to miss us?</h2>
      <p className="px-5">
        We know you are busy and we keep moving our popup all across Toronto!!
      </p>
      <Link
        href={"/events"}
        className="flex justify-center items-center gap-3 bg-primary text-secondary rounded-md w-fit mx-auto px-2 py-3"
      >
        Let&apos;s go <ArrowRight size={16} />
      </Link>
     </div>
    </section>
  );
}
