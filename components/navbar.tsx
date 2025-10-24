"use client";
import useMobile from "@/hooks/useMobile";
import { Info, Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMobile();
  const toggleDrawer = () => setOpenDrawer(prev => !prev);
  return (
    <header
      className="relative top-0 left-0 right-0 bg-primary px-4 text-secondary"
    >
      <nav className="w-full max-w-6xl mx-auto flex justify-between items-center">
       {isMobile ? <div className="flex-1 relative" onClick={toggleDrawer}>
          <Menu size={32} />
          {openDrawer && <div className="absolute top-12 left-0 right-0 mx-auto h-52 w-full bg-black">drwaer</div>}
        </div> :  <ul className="flex gap-2 flex-1 items-center">
          <li className="hover:text-white transition-all duration-150">
            <Link href={pathname === "/" ? "#about" : "/about"}>About</Link>
          </li>
          <li className="hover:text-white transition-all duration-150">
            <Link href={pathname === "/" ? "#reserve" : "/reserve"}>
              Reserve
            </Link>
          </li>
          <li className="hover:text-white transition-all duration-150">
            <Link href={"/contact"}>Contact us</Link>
          </li>
          <li className="hover:text-white transition-all duration-150">
            <Link href={"/events"}>Events</Link>
          </li>
        </ul>}
        <div className=" flex items-center gap-2">
          <Link href={"/"}>
            <Image
              src={"/GREEN.png"}
              alt="kauphi-logo"
              height={100}
              width={100}
            />
          </Link>
        </div>
        <ul className=" flex flex-1 gap-4 justify-end items-center ">
          <li>
            <Search />
          </li>
          <li>
            <Info />
          </li>
        </ul>
      </nav>
    </header>
  );
}
