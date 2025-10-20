import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EventBar() {
  return (
    <div className="bg-secondary flex gap-4 justify-center text-sm text-primary">
      <p>Wanna taste KAUPHI? </p>
      <Link
        href={"/events"}
        className="flex hover:underline items-center gap-2"
      >
        More Details <ArrowRight size={16} />
      </Link>
    </div>
  );
}
