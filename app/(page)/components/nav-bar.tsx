"use client";

import Image from "next/image";
import Link from "next/link";
import { navigations } from "@/config/routes";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { throttle } from "lodash";

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const setTop = () => void setIsTop(window.scrollY == 0 ? true : false);
    const throttledSetTop = throttle(setTop, 300);
    window.addEventListener("scroll", throttledSetTop);
    return () => window.removeEventListener("scroll", throttledSetTop);
  }, []);
  return (
    <div
      className={clsx(
        "w-full text-black px-0 md:px-8 text-lg shadow-md block md:fixed top-0 left-0",
        isTop ? "bg-transparent" : "bg-white"
      )}
    >
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between max-w-pc mx-auto py-3">
        <Link href="/" className="flex">
          <Image
            src="/images/logo.png"
            alt="静夜聆雨的头像"
            width={40}
            height={40}
            className="mr-5 mb-3 md:mb-0"
          />
          <h1 className="md:text-2xl text-lg leading-9">静夜聆雨</h1>
        </Link>
        <ul className="flex items-center">
          {navigations.map(nav => (
            <li
              key={nav.path}
              className={clsx("mr-5 hover:underline text-base md:text-lg", {
                "text-blue-400": pathname.startsWith(nav.path),
              })}
            >
              <a href={nav.path}>{nav.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
