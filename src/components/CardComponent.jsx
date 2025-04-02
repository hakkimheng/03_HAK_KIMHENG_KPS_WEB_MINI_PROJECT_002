
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import React from "react";
import ModalUpdateTaskComponent from "./ModalUpdateTaskComponent";

export default function CardComponent() {
  return (
    <div className="border border-gray-300 rounded-xl mt-8 w-90">
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold capitalize">HRD Design</h2>
          <ModalUpdateTaskComponent />
          
        </div>

        {/* task detials */}
        <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
        Add a field in the portal to let the user connect their Slack account
        </p>

        <div className="flex justify-between items-center mt-4">
          {/* tag */}
          <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
            DESIGN
          </p>

          {/* status */}
          <div className={`rounded-full w-8 h-8 bg-watermelon-red`}></div>
        </div>
      </div>

      {/* progress */}
      <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
        <Select>
          <SelectTrigger
            className={`w-38 truncate border-watermelon-red text-watermelon-red`}
          >
            <SelectValue placeholder={"NOT_STARTED"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
            <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
            <SelectItem value="FINISHED">FINISHED</SelectItem>
          </SelectContent>
        </Select>

        {/* date */}
        <p className="flex gap-3 text-light-steel-blue">
          <Clock size={22} /> Mar 23, 2025
        </p>
      </div>
    </div>
  );
}
