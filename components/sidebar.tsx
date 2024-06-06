import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
export const Sidebar = ({ toggleCollapse }: { toggleCollapse: boolean }) => {
  const asideStyle = classNames(
    "fixed bg-[#33074F] text-white z-50 h-full shadow-gray-900/20 transition duration-200 ease-in-out w-[18rem]",
    {
      ["sm:w-[5rem] sm:left-0 left-[-100%]"]: toggleCollapse,
      ["w-[18rem]"]: !toggleCollapse,
    }
  );
  return (
    <aside className={asideStyle}>
      <div className="flex relative items-center bg-[#EBE6ED1A] py-5 px-3.5">
        {toggleCollapse ? (
          <h3 className="mx-auto font-[600]  text-2xl min-w-max">A.S.</h3>
        ) : (
          <h3 className="mx-auto font-[600]  text-2xl min-w-max">
            Acmy Solutions
          </h3>
        )}
      </div>

      <Link href="/#">
        {toggleCollapse ? (
          <div className="flex items-center justify-center bg-[#EBE6ED1A] m-5 h-[40px] w-[40px] rounded-full">
            <MdDashboard className="w-[25px] h-[25px]"></MdDashboard>
          </div>
        ) : (
          <div className="flex items-center justify-start bg-[#EBE6ED1A] m-8 h-[40px] w-[240px] rounded-full pl-4">
            <MdDashboard className="w-[30px] h-[30px]"></MdDashboard>

            <div className="pl-4">
              <strong>Dashboard</strong>
            </div>
          </div>
        )}
      </Link>
    </aside>
  );
};
