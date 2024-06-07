import { TableData } from "../components/TableData";

import { ActivityFeed } from "@/components/ActivityFeed";
export default function Home() {
  return (
    <>
      <div className="ml-auto mr-2 mb-8">
        <div className="grid md:grid-cols-1 lg:grid-cols-1   gap-2 my-2">
          {" "}
          <div className="bg-yellow-800 border-2 rounded-xl p-2 flex flex-col items-center justify-center">
            Notification
          </div>
        </div>
      </div>
      <div className="ml-auto mr-2">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 my-1">
          <TableData></TableData>
          <div className="bg-yellow-200 border-2 rounded-xl p-2 flex flex-col items-center justify-center"></div>
          <div className="rounded-xl flex flex-col items-start justify-start pt-0 mt-0 ">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </>
  );
}
