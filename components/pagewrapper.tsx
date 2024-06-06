import { ReactNode } from "react";

export const Pagewrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-slate-50 flex-grow text-black p-2 mt-20 pl-[20.4rem]">
      {children}
    </div>
  );
};
