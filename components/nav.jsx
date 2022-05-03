import React from "react";
import TextCodexLogo from "@/components/logoText";

export default function Nav() {
  return (
    <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
      <nav className="border-b border-white/5">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a className="flex items-center space-x-3" href="/">
            <TextCodexLogo />
          </a>
          <ul className="items-center hidden space-x-8 text-sm font-medium md:flex text-blue-100">
            <li>
              <a
                className="transition hover:text-cyan-200 focus:outline-none focus:underline focus:text-white"
                href="#"
              >
                Members
              </a>
            </li>
            <li>
              <a
                className="transition hover:text-cyan-200 focus:outline-none focus:underline focus:text-white"
                href="#"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="transition hover:text-cyan-200 focus:outline-none focus:underline focus:text-white"
                href="#"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                className="transition hover:text-cyan-200 focus:outline-none focus:underline focus:text-white"
                href="#"
              >
                Events
              </a>
            </li>
            <li>
              <a
                className="transition hover:text-cyan-200 focus:outline-none focus:underline focus:text-white"
                href="#"
              >
                Login
              </a>
            </li>
          </ul>
          <button
            className="flex items-center justify-center transition rounded-lg w-9 h-9 md:hidden bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            type="button"
          >
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 5.75H19.25"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 18.25H19.25"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 12H19.25"
              ></path>
            </svg>{" "}
          </button>
        </div>
      </nav>
    </div>
  );
}
