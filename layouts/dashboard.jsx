import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Head from "next/head";
import Authenticated from "@/layouts/authenticated";
import Sidebar from "@/components/sidebar";
import classNames from "@/utils/classnames";

export default function Dashboard({ children }) {
  let [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event) {
      if (!mobileOpen) return;

      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [mobileOpen]);

  return (
    <>
      <Authenticated>
        <Head>
          <title>Dashboard</title>
        </Head>

        <div className="bg-gray-100 flex h-screen overflow-hidden">
          {/* Off-canvas menu for mobile */}
          <Transition
            show={mobileOpen}
            unmount={false}
            className="fixed inset-0 z-40 flex"
          >
            {/* Off-canvas menu overlay, show/hide based on off-canvas menu state. */}
            <Transition.Child
              unmount={false}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {() => (
                <div className="fixed inset-0">
                  <div
                    onClick={() => setMobileOpen(false)}
                    className="bg-gray-600 absolute inset-0 opacity-75"
                  />
                </div>
              )}
            </Transition.Child>

            {/* Off-canvas menu, show/hide based on off-canvas menu state. */}
            <Transition.Child
              unmount={false}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
              className="relative flex w-full max-w-xs flex-1 flex-col bg-white pb-4"
            >
              <div className="absolute top-0 right-0 -mr-14 p-1">
                <Transition.Child
                  unmount={false}
                  className="focus:bg-gray-600 flex h-12 w-12 items-center justify-center rounded-full focus:outline-none"
                  aria-label="Close sidebar"
                  as="button"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg
                    className="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Transition.Child>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <Sidebar />
              </div>
            </Transition.Child>
            <div className="w-14 flex-shrink-0">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Transition>

          {/* Static sidebar for desktop */}
          <div className="hidden lg:flex lg:flex-shrink-0">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <Sidebar />
          </div>
          <div className="flex-1 overflow-auto focus:outline-none" tabIndex={0}>
            <div className="relative z-10 flex h-16 flex-shrink-0 shadow-sm bg-white lg:border-none">
              <button
                className="border-gray-200 text-gray-400 focus:bg-gray-100 focus:text-gray-600 border-r px-4 focus:outline-none lg:hidden"
                aria-label="Open sidebar"
                onClick={() => setMobileOpen(true)}
              >
                <svg
                  className="h-6 w-6 transition duration-150 ease-in-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <div className="w-full flex items-center justify-end px-8">
                <Menu as="div" className=" relative">
                  <div>
                    <Menu.Button className="flex items-center text-sm rounded-full">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <main className="relative z-0 flex-1 overflow-y-auto md:p-8">
              {children}
            </main>
          </div>
        </div>
      </Authenticated>
    </>
  );
}
