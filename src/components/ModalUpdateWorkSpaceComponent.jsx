"use client"; // Required since we're using hooks (useForm)

import {
  AlertDialog,
  AlertDialogAction,
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
import {  UpdateWorkSpaceAction } from "@/action/WorkSpaceAction";
import { Button } from "./ui/button";
import { Ellipsis } from "lucide-react";

export function ModalUpdateWorkSpaceComponent( { workId } ) {

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    await UpdateWorkSpaceAction(data.workspaceName , workId);
  };
  return (
    <AlertDialog>
      {/* Trigger Button */}
      <AlertDialogTrigger asChild>
          <button>
          <Ellipsis/>
        </button> 
      </AlertDialogTrigger>

      {/* Modal Content */}
      <AlertDialogContent className="bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
          <AlertDialogHeader>
            <section className="flex justify-between items-center">
              <AlertDialogTitle>
                Update WorkSpace
                </AlertDialogTitle>
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
              Update
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}