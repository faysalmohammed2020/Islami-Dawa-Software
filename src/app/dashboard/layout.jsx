"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const page = ({ children }) => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[calc(100vh-104px)]">
        <Sidebar />
        <div className="p-6 grow">{children}</div>
      </div>
    </div>
  );
};

export default page;
