import { Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-primary p-4  text-secondary">
      <nav className="flex justify-between">
        <ul className="flex gap-2 flex-1 items-center">
          <li>About</li>
          <li>Reserve</li>
          <li>Contact us</li>
          <li>Events</li>
        </ul>
        <div className="mr-10 flex items-center gap-2">
          <Image
            src={"/GREEN.png"}
            alt="kauphi-logo"
            height={100}
            width={100}
          />
          {/* <h2 className="text-3xl">Kauphi</h2> */}
        </div>
        <ul className=" flex flex-1 gap-4 justify-end items-center ">
          <li>
            <User />
          </li>
          <li>
            <Search />
          </li>
          <li>
            <ShoppingCart />
          </li>
        </ul>
      </nav>
    </header>
  );
}
