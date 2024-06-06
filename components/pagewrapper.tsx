import { ReactNode } from "react";
import classNames from "classnames";
export const Pagewrapper = ({
  children,
  toggleCollapse,
}: {
  children: ReactNode;
  toggleCollapse: boolean;
}) => {
  const childStyle = classNames("bg-slate-50 flex-grow text-black p-2 mt-20", {
    ["sm:pl-[6rem]"]: toggleCollapse,
    ["pl-[20.4rem]"]: !toggleCollapse,
  });

  return <div className={childStyle}>{children}</div>;
};
