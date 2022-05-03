import React, { forwardRef, Fragment, useEffect, useState } from "react";
import Link from "next/link";

import ApplicationLogo from "@/components/applicationLogo";
import box20Filled from "@iconify/icons-fluent/box-20-filled";
import calendarEmpty20Filled from "@iconify/icons-fluent/calendar-empty-20-filled";
import home20Filled from "@iconify/icons-fluent/home-20-filled";
import news20Filled from "@iconify/icons-fluent/news-20-filled";
import people20Filled from "@iconify/icons-fluent/people-20-filled";
import personFeedback20Filled from "@iconify/icons-fluent/person-feedback-20-filled";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import classNames from "@/utils/classnames";
import TextCodexLogo from "./logoText";

const NavItem = forwardRef(({ href, children, icon }, ref) => {
  const { pathname } = useRouter();
  const isActive = pathname == href;
  return (
    <li ref={ref}>
      <Link href={href ?? ""}>
        <a
          className={classNames(
            isActive ? " bg-gray-100 dark:bg-gray-700" : "",
            "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          )}
        >
          <Icon
            className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            icon={icon}
          />
          <span className="ml-3">{children}</span>
        </a>
      </Link>
    </li>
  );
});

const Sidebar = () => {
  const navs = [
    { icon: home20Filled, name: "Dashboard", href: "/dashboard" },
    {
      icon: box20Filled,
      name: "Projects",
      href: "/dashboard/projects",
    },
    {
      icon: people20Filled,
      name: "Members",
      href: "/dashboard/members",
    },
    {
      icon: calendarEmpty20Filled,
      name: "Events",
      href: "/dashboard/events",
    },
    {
      icon: news20Filled,
      name: "Blogs",
      href: "/dashboard/blogs",
    },
    {
      icon: personFeedback20Filled,
      name: "Feedback",
      href: "/dashboard/feedback",
    },
  ];
  return (
    <aside className="flex w-64 flex-col" aria-label="Sidebar">
      <div className="flex flex-grow flex-col overflow-y-auto pb-4 px-3 bg-white lg:border-r border-gray-200 dark:bg-gray-900">
        <div className="border-b h-16 flex">
          <Link href="/dashboard">
            <a className="flex items-center pl-2">
              <TextCodexLogo className="h-6 mr-3 sm:h-7" mode="dark" />
            </a>
          </Link>
        </div>
        <ul className="space-y-2 mt-4">
          {navs.map(({ icon, name, href }) => (
            <NavItem key={href} icon={icon} href={href}>
              {name}
            </NavItem>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
