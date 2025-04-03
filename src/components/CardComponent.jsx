
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock } from "lucide-react";
import React from "react";
import ModalUpdateTaskComponent from "./ModalUpdateTaskComponent";

 async function CardComponent( {task}) {
  return (
        <>
         <div key={task.id} className="border border-gray-300 rounded-xl mt-8 w-90">
          <div className="p-5">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold capitalize">HRD Design</h2>
              <ModalUpdateTaskComponent />
            </div>
      
            {/* task detials */}
            <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
            {task.taskDetails}
            </p>
      
            <div className="flex justify-between items-center mt-4">
              {/* tag */}
              <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
                {task.tag}
              </p>
      
              {/* status */}
              <div className={`
                  ${task.status === "NOT_STARTED" && "bg-watermelon-red"}
                  ${task.status === "IN_PROGRESS" && "bg-blue-500"}
                  ${task.status === "FINISHED" && "bg-green-500"}
                rounded-full w-8 h-8`}>
               
              </div>
            </div>
          </div>
      
          {/* progress */}
          <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
            <Select>
              <SelectTrigger
                className={`w-38 truncate 
                  ${task.status === "NOT_STARTED" && "border-watermelon-red text-watermelon-red"}
                  ${task.status === "IN_PROGRESS" && "border-blue-500 text-blue-500"}
                  ${task.status === "FINISHED" && "border-green-500 text-green-500"}
                  `}
              >
                <SelectValue placeholder={task.status} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
                <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
                <SelectItem value="FINISHED">FINISHED</SelectItem>
              </SelectContent>
            </Select>
      
            {/* date */}
            <p className="flex gap-3 text-light-steel-blue">
              <Clock size={22} /> {task.endDate.split("T")[0]}
            </p>
          </div>
        </div>
        </>
  )
}
export default CardComponent;
