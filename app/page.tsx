import { TaskList } from "../components/TaskList";

import { ActivityFeed } from "@/components/ActivityFeed";
import { AlertWithContent } from "../components/Alert";

export default function Home() {
  return (
    <>
      <div className="ml-auto mr-2 mb-8">
        <div className="grid md:grid-cols-1 lg:grid-cols-1   gap-2 my-2">
          <div className="bg-white border-3 rounded-xl flex flex-col items-center justify-center">
            <AlertWithContent />
          </div>
        </div>
      </div>
      <div className="ml-auto mr-2">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 my-1">
          <TaskList></TaskList>
          <div className="bg-yellow-200 border-2 rounded-xl p-2 flex flex-col items-center justify-center"></div>
          <div className="rounded-xl flex flex-col items-start justify-start pt-0 mt-0 ">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </>
  );
}
