import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Events() {
  return (
    <section className="max-w-6xl mx-auto text-center py-20 space-y-4">
      <h2 className="text-3xl px-5">Don't want to miss us?</h2>
      <p className="px-5">
        We know you are busy and we keep moving our popup all across Toronto!!
      </p>
      <Link
        href={"/events"}
        className="flex justify-center items-center gap-3 bg-primary text-secondary rounded-md w-fit mx-auto px-2 py-3"
      >
        Let's go <ArrowRight size={16} />
      </Link>
    </section>
  );
}
