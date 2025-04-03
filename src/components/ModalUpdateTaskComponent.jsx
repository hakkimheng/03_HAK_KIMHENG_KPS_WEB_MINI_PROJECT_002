"use client";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react"; // Assuming Ellipsis is an icon
import { usePathname } from "next/navigation";
import { DeleteTaskAction, UpdateTaskAction } from "@/action/WorkSpaceAction";
import TaskForm from "./TaskFormComponent";


const ModalUpdateTaskComponent = ({ task }) => {
  const [openParent, setOpenParent] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const pathname = usePathname();
  const workspaceId = pathname.split("/")[2];

  const handleUpdateTask = async () => {
    setOpenParent(false); 
    setOpenUpdate(true); 
    
  };
  const handleClickDelete = async () => {
    setOpenDelete(false)
    await DeleteTaskAction(task.taskId, workspaceId );
  }

  const handleDeleteTask = () => {
    setOpenParent(false); // Close first modal
    setOpenDelete(true); // Open second modal after a small delay
  };
  const hadleUpdateTask = async (data)=>{
 await UpdateTaskAction(data ,task.taskId, workspaceId );
  }

  return (
    <>
      {/* Parent Modal (Edit Task) */}
      <AlertDialog open={openParent} onOpenChange={setOpenParent}>
        <AlertDialogTrigger asChild>
          <Button onClick={() => setOpenParent(true)}>
            <Ellipsis />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <div className="flex justify-between">
              <AlertDialogTitle>Edit Task</AlertDialogTitle>
              <AlertDialogCancel
                className="text-red-500"
                onClick={() => setOpenParent(false)}
              >
                X
              </AlertDialogCancel>
            </div>
          </AlertDialogHeader>
          <div className="flex flex-col gap-5">
            <AlertDialogAction
              onClick={handleUpdateTask}
              className="hover:bg-gray-500 border border-gray-400 font-bold text-gray-500 hover:text-white w-full"
            >
              Update Task
            </AlertDialogAction>
            <AlertDialogAction
              onClick={handleDeleteTask}
              className="bg-red-200 font-bold text-red-500 hover:bg-red-700 hover:text-white w-full"
            >
              Delete Task
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      {/* Child Modal (New Modal After Update Task) */}
      <AlertDialog open={openUpdate} onOpenChange={setOpenUpdate}>
      <AlertDialogContent className="bg-white">
        <section className="flex flex-col gap-7">
          <AlertDialogHeader>
            <section className="flex justify-between">
              <AlertDialogTitle>Create New Task</AlertDialogTitle>
              <AlertDialogCancel className="text-red-500">X</AlertDialogCancel>
            </section>
            <div className="text-gray-600">
              <TaskForm onSubmit={hadleUpdateTask} buttonLabel="Update" />
            </div>
          </AlertDialogHeader>
        </section>
      </AlertDialogContent>
      </AlertDialog>

      {/* Child Modal (New Modal After Delete Task) */}
      <AlertDialog open={openDelete} onOpenChange={setOpenDelete}>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are You Sure you want to delete ?
            </AlertDialogTitle>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              className="border-1 bg-red-200 font-bold text-red-500 hover:bg-red-700 hover:text-white"
              onClick={handleClickDelete}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ModalUpdateTaskComponent;
