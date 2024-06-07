import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
import { BsList } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export const Header = ({
  toggleCollapse,
  setToggleCollapse,
}: {
  toggleCollapse: boolean;
  setToggleCollapse: Dispatch<SetStateAction<boolean>>;
}) => {
  const sideBarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const headerStyle = classNames(
    "fixed bg-[#fffff] w-full z-[70] px-4 shadow-sm shadow-slate-500/40  ",
    { ["sm:pl-[6rem] "]: toggleCollapse, ["sm:pl-[20rem] "]: !toggleCollapse }
  );
  return (
    <header className={headerStyle}>
      <div className="h-[4.5rem] flex items-center justify-between bg-white">
        <div className="flex items-center order-2 sm:order-1">
          <button
            onClick={sideBarToggle}
            className="float-right w-[30px] h-[30px] flex items-center justify-center rounded-md shadow-md ml-0.5 shadow-black/10 hover:bg-[#e1c9ef] bg-[#f4f0f6]"
          >
            <BsList></BsList>
          </button>
          <h1 className="pl-5 text-[20px] font-[600] tiHiden">Dashboard</h1>
        </div>

        <div className="flex items-center justify-center text-center order-1 sm:order-2">
          <button className="float-right w-[40px] h-[40px] flex items-center justify-center mr-3">
            <FaRegBell />
          </button>

          <div className="h-10 w-10 rounded-full pl-1 bg-cover bg-[url('https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg')]"></div>

          <button className="float-right w-[30px] h-[30px] flex items-center justify-center mr-3">
            <IoIosArrowDown />
          </button>
        </div>
      </div>
    </header>
  );
};
