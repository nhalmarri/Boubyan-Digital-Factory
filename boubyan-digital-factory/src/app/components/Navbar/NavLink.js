"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ children, href }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`${
        isActive ? "active" : ""
      }  text-red-600 hover:bg-white hover:text-red-600 px-1 py-1 rounded-md text-sm font-medium`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
