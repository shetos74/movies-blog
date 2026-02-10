"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="flex p-4">
      <h2 className="text-2xl">Shetos</h2>
      <ul className="flex gap-4 ml-4">
        <li className={clsx("flex items-center justify-center px-3 py-1 rounded-2xl", { "bg-red-800": pathname === "/" })}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={clsx("flex items-center justify-center px-3 py-1 rounded-2xl", { "bg-red-800": pathname === "/anime" })}>
          <Link href={"/anime"}>Anime</Link>
        </li>
      </ul>
    </div>
  );
}
