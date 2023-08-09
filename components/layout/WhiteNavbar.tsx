import React, { useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import AdotWhite from "../../public/images/landing/adot-white.png";
import Adot from "../../public/images/landing/adot.png";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Popover } from "@headlessui/react";
import { useDeleteUserMutation } from "@/store/user/user-api";

interface Links {
  name: string;
  link: string;
}
interface MobileLinkProps {
  href: string;
  content: string;
}

const links: Links[] = [
  { name: "Home", link: "#home" },
  { name: "Features", link: "#features" },
  { name: "Insights", link: "/insights" },
];

function MenuIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavLink({ href, content }: MobileLinkProps) {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="block leading-7 tracking-tight text-sm font-medium text-gray-900"
    >
      {content}
    </Popover.Button>
  );
}
const WhiteNavbar: React.FC = () => {
  let [ deleteUser, { data, isError, isSuccess, error, isLoading }]=useDeleteUserMutation()
  let [hoveredIndex, setHoveredIndex] = useState(-1);
  const handleLogOut = () => {
    // deleteUser();
    
   // if(isSuccess){
    Cookies.remove('token');

   // }
  }
  return (
    <header>
      <nav className="absolute top-0 left-0 w-full">
        <div className="relative z-50 flex justify-between py-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative  flex items-center justify-between w-full">
            <Link href={"/"}>
              <Image
                className="relative py-4"
                src={AdotWhite}
                alt="Adot Logo"
                width={150}
                height={37}
                priority
              />
            </Link>
            <div className="hidden lg:flex  lg:gap-10">
              {links.map(({ name, link }, index) => (
                <Link
                  key={name}
                  href={link}
                  className="relative rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                >
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.span
                        className="absolute inset-0 rounded-lg bg-gray-100"
                        layoutId="hoverBackground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.15 } }}
                        exit={{
                          opacity: 0,
                          transition: { duration: 0.15, delay: 0.2 },
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{name}</span>
                </Link>
              ))}
              <button onClick={()=>handleLogOut()}>Logout</button>
            </div>
          </div>
          <div className="flex items-center justify-end gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 shadow-2xl shadow-gray-900/20"
                        >
                                         <Link href={"/"}>
                            <Image
                              className="relative pt-14"
                              src={Adot}
                              alt="Adot Logo"
                              width={150}
                              height={37}
                              priority
                            />
                          </Link>
           
                          <div className="space-y-4 pt-8">
                            <MobileNavLink href="#home" content="Home" />
                            <MobileNavLink
                              href="#features"
                              content="Features"
                            />
                            <MobileNavLink
                              href="/insights"
                              content="Insights"
                            />
                              <button onClick={()=>handleLogOut()}>Logout</button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default WhiteNavbar;
