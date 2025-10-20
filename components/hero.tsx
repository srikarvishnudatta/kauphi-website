"use client";
import { ArrowRight } from "lucide-react";
import {motion} from "motion/react";
export default function Hero() {
  return (
    <motion.section 
    animate={{opacity: 1}}
    className="grow-1 flex justify-center items-center">
      <div className="flex flex-col items-center justify-start gap-4">
        <h1 className="text-5xl">Taste the finest filter coffee</h1>
        <p className="text-sm">Make your events memorable today</p>
        <button className="bg-primary rounded-2xl text-secondary flex justify-between items-center px-2 py-3">
          <span className="text-xs">Reserve your place</span>{" "}
          <ArrowRight size={16} />
        </button>
      </div>
    </motion.section>
  );
}
