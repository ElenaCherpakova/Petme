import React from "react";
import Link from "next/link";

function Nav() {
  return <> <nav className="flex items-center">
    <ul className="md:flex gap-5">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/">Categories</Link></li>
    </ul>
    <div className="relative md:block mx-5">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
      </div>
      <input type="text" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm" placeholder="Search..." />
    </div>
  </nav></>;
}

export default Nav;
