import { BsList } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
export const Header = () => {
  return (
    <header className="fixed bg-[#fffff] w-full z-[0] px-4 shadow-sm shadow-slate-500/40 pl-[20rem] ">
      <div className="h-[4.5rem] flex items-center justify-between ">
        <button className="float-right w-[30px] h-[30px] flex items-center justify-center rounded-md shadow-md ml-3 shadow-black/10 hover:bg-[#e1c9ef] bg-[#f4f0f6]">
          <BsList></BsList>
        </button>

        <div className="flex items-center justify-center text-center">
          <button className="float-right w-[40px] h-[40px] flex items-center justify-center mr-3">
            <FaRegBell />
          </button>

          <div className="h-10 w-10 rounded-full pl-1 bg-[url('http://localhost:3000/img/user.png')]"></div>

          {/* <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
           
            <image
              className="w-8 h-8 rounded-full"
              src="/img/user.png"
              alt="user photo"
            />
          </button> */}

          <button className="float-right w-[30px] h-[30px] flex items-center justify-center mr-3">
            <IoIosArrowDown />
          </button>
        </div>
      </div>
    </header>
  );
};
