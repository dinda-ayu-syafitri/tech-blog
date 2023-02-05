import React from "react";
import { FaBell, FaUtensils } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
    return (
      <header className="bg-gray-200">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">

          <div className="shrink w-80 sm:order-2">
              <a className="font-bold uppercase text-3xl">Tech Blog</a>
          </div>
          <div className="w-96 order-3 flex justify-center">
              <div className="flex gap-6">
                <Link href="/">Home</Link>
                <Link href="/">Login</Link>
                <Link href="/articleDetail">Detail</Link>
              </div>
          </div>
      </div>
  </header>
    )
}