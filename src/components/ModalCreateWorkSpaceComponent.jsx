"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { CreateNewWorkSpaceAction } from "@/action/WorkSpaceAction";
import { Button } from "./ui/button";

export function ModalCreateWorkSpaceComponent() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await CreateNewWorkSpaceAction(data.workspaceName);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.53 12H16.54"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.54004 12H12.35"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.54 16V8"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.54004 13.04V15C2.54004 20 4.54004 22 9.54004 22H15.54C20.54 22 22.54 20 22.54 15V9C22.54 4 20.54 2 15.54 2H9.54004C4.54004 2 2.54004 4 2.54004 9"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
          <AlertDialogHeader>
            <section className="flex justify-between items-center">
              <AlertDialogTitle>Create New Workspace</AlertDialogTitle>
              <AlertDialogCancel className="text-red-500 border-none bg-transparent hover:bg-gray-100">
                X
              </AlertDialogCancel>
            </section>
            <AlertDialogDescription className="text-gray-600">
              <label className="block mb-1">Workspace Name:</label>
              <Input
                type="text"
                placeholder="Please type your workspace name"
                {...register("workspaceName", {
                  required: "Workspace name is required",
                })}
                className={errors.workspaceName ? "border-red-500" : ""}
              />
              {errors.workspaceName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.workspaceName.message}
                </p>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button
              type="submit"
              className="bg-gray-600 hover:bg-gray-900 text-white"
            >
              Create
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}