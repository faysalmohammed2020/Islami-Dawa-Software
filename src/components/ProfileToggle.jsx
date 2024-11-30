"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdArrowDropDown, MdPerson, MdLogout } from "react-icons/md";

const ProfileToggol = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Retrieve user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("user"); // Clear user data
    router.push("/login"); // Navigate to login page
  };

  return (
    <div className="relative">
      <div
        className="flex items-center space-x-2 bg-white text-[#155E75] px-1 mr-1 sm:px-4 rounded-full shadow-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#155E75] flex items-center justify-center">
          <FaUserCircle className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        {/* Dynamically Display User Data */}
        <div className="flex flex-col">
          <p className="font-bold text-[8px] sm:text-sm md:text-base">
            {user ? user.fullName : "Guest"}
          </p>
          <p className="text-[6px] font-semibold sm:text-xs md:text-sm text-gray-900">
            {user ? `ID : 100${user.id}` : "Loading"}
          </p>
          <p className="text-[6px] font-semibold sm:text-xs md:text-sm text-gray-900">
            {user ? `Role: ${user.role}` : "Loading"}
          </p>
        </div>

        <div className="text-gray-950">
          <MdArrowDropDown className="size-6 sm:size-6" />
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#155E75] shadow-lg rounded-md text-sm">
          <div
            className="flex items-center px-4 py-2 hover:bg-[#2284a1] cursor-pointer"
            onClick={() => alert("Navigate to Profile")}
          >
            <MdPerson className="mr-2" />
            Profile
          </div>
          <div
            className="flex items-center px-4 py-2 hover:bg-[#2284a1] cursor-pointer"
            onClick={handleSignOut}
          >
            <MdLogout className="mr-2" />
            Sign Out
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileToggol;
