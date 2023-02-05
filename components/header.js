import React from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";import Link from "next/link";
import { IconContext } from "react-icons";

export default function Header() {
    return (
      <header className="navbar drop-shadow-2xl sticky top-0 z-10">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">

          <div className="shrink w-80 sm:order-2 flex ml-0 sm:ml-14 pt-3 sm:pt-0 justify-center align-middle fill-white">
          <IconContext.Provider
      value={{ color: 'white' }}
    >
      <div>
      <HiOutlineDesktopComputer className="text-4xl mr-3" value={{ color: 'white' }}></HiOutlineDesktopComputer>
      </div>
    </IconContext.Provider>
                
              <a className="font-bold uppercase text-3xl">Tech Blog</a>
          </div>
          <div className="w-96 order-3 flex justify-center">
              <div className="flex gap-6">
                <Link href="/">Home</Link>
                <Link href="/">Login</Link>
              </div>
          </div>
      </div>      
  </header>
    )
}