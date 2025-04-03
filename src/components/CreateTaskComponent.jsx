"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

import { usePathname } from "next/navigation";
import { CreateTaskAction, getAllTaskAction } from "@/action/WorkSpaceAction";
import TaskForm from "./TaskFormComponent";
function CreateTaskComponent() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const hadleCreateTask = async (data) => {
    await CreateTaskAction(data, id);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="bg-blue-700 w-40 flex items-center rounded-2xl py-3 justify-center gap-3">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.53 12H16.54"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.54004 12H12.35"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.54 16V8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.54004 13.04V15C2.54004 20 4.54004 22 9.54004 22H15.54C20.54 22 22.54 20 22.54 15V9C22.54 4 20.54 2 15.54 2H9.54004C4.54004 2 2.54004 4 2.54004 9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-white font-bold">New Task</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <section className="flex flex-col gap-7">
          <AlertDialogHeader>
            <section className="flex justify-between">
              <AlertDialogTitle>Create New Task</AlertDialogTitle>
              <AlertDialogCancel className="text-red-500">X</AlertDialogCancel>
            </section>
            <div className="text-gray-600">
              <TaskForm onSubmit={hadleCreateTask} buttonLabel="Create" />
            </div>
          </AlertDialogHeader>
        </section>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default CreateTaskComponent;
