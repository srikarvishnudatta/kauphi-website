import Image from "next/image";
export default function Footer() {
  return <footer className="relative bg-primary mt-5 min-h-72 py-10">
    <section className=" max-w-6xl mx-auto flex flex-col items-center">
      <div>
        <Image src={"/GREEN.png"} alt="beige logo" height={100} width={100} className="rounded-xl"/>
        <p className="text-xs text-secondary">rights reserved</p>
      </div>
      <ul>
        <li>Contact us</li>
        <li>Reserve</li>
      </ul>
      <ul>
        <li>Follow us on:</li>
        <li>FB</li>
        <li>Insta</li>
      </ul>
    </section>
          <p className="absolute right-1 bottom-0 text-xs">Made in Canada</p>

  </footer>;
}
