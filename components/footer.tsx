import Image from "next/image";
export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 right-0 bg-primary">
      <section className="py-4 px-4 max-w-6xl mx-auto flex flex-col gap-5 md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <Image
            src={"/KAUPHILOGO.svg"}
            alt="beige logo"
            height={100}
            width={100}
          />
          <p className="text-xs text-gray-900">©️ Rights Reserved</p>
        </div>
        <ul className="flex flex-col md:flex-row items-center text-xs gap-5 text-secondary font-medium ">
          <li className="hover:text-white transition-colors duration-150 ease-in">
            Contact us
          </li>
          <li className="hover:text-white transition-colors duration-150 ease-in">
            Reserve
          </li>
          <li className="hover:text-white transition-colors duration-150 ease-in">
            Privacy Policy
          </li>
          <li className="hover:text-white transition-colors duration-150 ease-in">
            Terms & Conditions
          </li>
        </ul>
        <div className="text-secondary font-medium text-xs text-center">
          <h4>Follow us on : </h4>
          <ul className="flex gap-4">
            <li>FB</li>
            <li>Insta</li>
            <li>Tiktok</li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
