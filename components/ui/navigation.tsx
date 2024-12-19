import { navItems } from "@/constants";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="relative flex items-center justify-between gap-[3.2rem] rounded-full border-2 border-primary bg-primary/50 p-[3.2rem] text-[1.6rem] uppercase leading-[85%] backdrop-blur-sm after:absolute after:inset-0 after:z-hidden after:bg-primary/25 after:blur-[2.4rem] after:content-['']">
        {navItems.map((navItem, i) => (
          <li key={navItem.label}>
            <Link href={navItem.href}>{`00${i + 1}/${navItem.label}`}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
