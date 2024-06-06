import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
export const Sidebar = () => {
  return (
    <aside className="fixed bg-[#33074F] text-white z-50 h-full shadow-gray-900/20 transition duration-200 ease-in-out w-[18rem]">
      <div className="flex relative items-center bg-[#EBE6ED1A] py-5 px-3.5">
        <h3 className="mx-auto font-[600] text-2xl min-w-max">
          Acmy Solutions
        </h3>
      </div>

      <Link href="/#">
        <div className="flex items-center justify-start bg-[#EBE6ED1A] m-8 h-[40px] w-[240px] rounded-full pl-4">
          <MdDashboard className="w-[30px] h-[30px]"></MdDashboard>

          <div className="pl-4">
            <strong>Dashboard</strong>
          </div>
        </div>
      </Link>
    </aside>
  );
};
