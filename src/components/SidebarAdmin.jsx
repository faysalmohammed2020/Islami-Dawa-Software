"use client";
import React from "react";
import { useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdPeople } from "react-icons/md";
import { FcAcceptDatabase } from "react-icons/fc";
import { LuArrowLeftFromLine } from "react-icons/lu";
import { LuArrowRightToLine } from "react-icons/lu";
import { LuLayoutDashboard } from "react-icons/lu";

import { usePathname } from "next/navigation"; // Use usePathname for the App Router

const SidebarAdmin = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  const pathname = usePathname(); // Get the current route
  const isActive = (path) => pathname === path; // Check if the current path matches

  return (
    <aside
      className={`flex flex-col ${
        isCollapsed ? "w-[68px]" : "w-52"
      } transition-width duration-500 h-screen bg-[#155E75] overflow-x-hidden`}
    >
      <div className="p-4 text-right">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none transform transition-transform duration-300"
        >
          {isCollapsed ? (
            <LuArrowRightToLine className="size-6 font-extrabold flex justify-center text-center" />
          ) : (
            <LuArrowLeftFromLine className="size-6 flex justify-end font-extrabold" />
          )}
        </button>
      </div>

      <nav className="p-4 grow overflow-y-auto overflow-x-hidden">
        <ul className="space-y-2">
          <a
            href="/dashboard"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dashboard")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <LuLayoutDashboard className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              ড্যাশবোর্ড
            </li>
          </a>

          <a
            href="/admin/register"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/amoli-muhasaba")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <IoPersonAddSharp className="size-5"/>

            </div>

            <li className={`text-sm mb-0 ${isCollapsed ? "hidden" : "block"}`}>
              দায়ী এড করা 
            </li>
          </a>

          <a
            href="moktob"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/moktob")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <MdPeople className="size-5"/>

            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              দায়ী দেখুন
            </li>
          </a>

          <a
            href="talim"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/talim")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <FcAcceptDatabase className="size-5"/>
            </div>

            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              অনুমুতি দিন
            </li>
          </a>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
