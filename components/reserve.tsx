
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Reserve() {
  return (
    <section 
    id="reserve"
    className=" max-w-6xl mx-auto text-center py-20 space-y-4">
      <h2 className="font-bold text-3xl px-5">Special Event coming up?</h2>
      <div className="flex flex-col justify-center gap-10 items-center">
        <h4 className="px-5">Let us know the details and we will be there</h4>
        <Link href={"/reserve"} className="flex justify-center items-center gap-3 bg-primary text-secondary rounded-md w-fit mx-auto px-2 py-3">
          Know more <ArrowRight size={16}/>
        </Link>
      </div>
    </section>
  );
}
