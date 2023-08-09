import React, { useState, useEffect } from "react";
import Image from "next/image";
import Adot from "../../public/images/landing/adot.png"
import Link from "next/link";

const Navbar: React.FC = () => {
    const [scrollActive, setScrollActive] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        setScrollActive(window.scrollY > 20);
        });
    }, []);

  return (
    <div className={"fixed top-0 left-0 right-0 w-full z-30 transition-all h-20 py-4 pl:24 pl-10 md:pl-16 lg:pl-24 bg-[#F9F8F9]" + (scrollActive ? " shadow-sm pt-0 bg-white" : " pt-4")}>
      <Link href={'/'}>
        <Image
          className="relative py-4"
          src={Adot}
          alt="Adot Logo"
          width={150}
          height={37}
          priority
          />
      </Link>
         
    </div>
  );
};

export default Navbar;
