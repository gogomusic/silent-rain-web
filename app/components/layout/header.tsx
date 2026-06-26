"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Bgm from "../bgm";
import { ModeToggle } from "./theme-toggle";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "文章",
    href: "/docs",
  },
];

function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  if (item.href) {
    return (
      <li>
        <Link
          href={item.href}
          className="inline-block px-4 py-2 text-sm tracking-wide text-foreground/80 transition-colors "
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li ref={ref} className="relative">
      <button
        type="button"
        onPointerDown={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-4 py-2 text-sm tracking-wide text-white/80 transition-colors "
      >
        {item.label}
        <svg
          className={clsx("h-3 w-3 transition-transform", open && "rotate-180")}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 5l3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 min-w-48 bg-[#0d1117]/95 backdrop-blur-md border border-white/10 shadow-xl">
          <ul className="py-1">
            {item.children?.map((child) => (
              <li key={child.label}>
                <Link
                  href={child.href}
                  className="flex items-center justify-between px-5 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {child.label}
                  <svg
                    className="h-3 w-3 text-white/30"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/10 bg-background/0 backdrop-blur-xs">
      <div className="mx-auto flex h-14 max-w-7xl items-center px-6">
        {/* Logo */}
        <Link
          href="/"
          className="mr-10 flex items-center gap-2 text-lg font-thin tracking-widest"
        >
          <div className="w-7 h-7 rounded-[14px] overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="LOGO"
              width={275}
              height={275}
              className="w-7 h-7 "
            />
          </div>
          <span className="text-foreground font-extralight">静夜聆雨</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block" aria-label="主导航">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <NavDropdown key={item.label} item={item} />
            ))}
          </ul>
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Music toggle */}
          <Bgm />

          {/* Theme toggle */}
          <ModeToggle />

          {/* Signup */}
          <Link
            href="/signup"
            className="rounded-full px-4 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-foreground/10 hover:text-foreground"
          >
            注册
          </Link>

          {/* Login */}
          <Link
            href="/login"
            className="rounded-full px-4 py-1.5 text-sm bg-foreground/10 text-foreground/90 transition-colors hover:bg-foreground/20 hover:text-foreground"
          >
            登录
          </Link>
        </div>
      </div>
    </header>
  );
}
