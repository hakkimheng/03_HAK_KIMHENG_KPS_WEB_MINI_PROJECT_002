'use client';
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
    AlertDialogFooter
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react"; // Assuming Ellipsis is an icon
import { Input } from "./ui/input";

const ModalUpdateTaskComponent = () => {
    const [openParent, setOpenParent] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const handleUpdateTask = () => {
        setOpenParent(false); // Close first modal
        setOpenUpdate(true); // Open second modal after a small delay
    };
    const handleDeleteTask = () => {
        setOpenParent(false); // Close first modal
        setOpenDelete(true); // Open second modal after a small delay
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
                            <AlertDialogCancel className="text-red-500" onClick={() => setOpenParent(false)}>X</AlertDialogCancel>
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
                    <AlertDialogHeader>
                        <section className="flex justify-between -pt-5">
                            <AlertDialogTitle>Update Task</AlertDialogTitle>
                            <AlertDialogCancel className="text-red-500">X</AlertDialogCancel>
                        </section>
                    </AlertDialogHeader>
                    <div className="text-gray-600">
                        <div className="flex flex-col gap-5 pb-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name">name</label>
                                <Input type="text" placeholder="Please typ your work space name" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="name">name</label>
                                <Input type="text" placeholder="Please typ your work space name" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="name">name</label>
                                <Input type="text" placeholder="Please typ your work space name" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="name">name</label>
                                <Input type="text" placeholder="Please typ your work space name" />
                            </div>

                        </div>
                    </div>
                    <AlertDialogFooter>

                        <AlertDialogAction className="border-1 w-full bg-gray-500 text-white" onClick={() => setOpenUpdate(false)}>Update</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* Child Modal (New Modal After Delete Task) */}
            <AlertDialog open={openDelete} onOpenChange={setOpenDelete}>
                <AlertDialogContent className="bg-white">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are You Sure you want to delete ?</AlertDialogTitle>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel >Cancel</AlertDialogCancel>
                        <AlertDialogAction className="border-1 bg-red-200 font-bold text-red-500 hover:bg-red-700 hover:text-white" onClick={() => setOpenDelete(false)}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default ModalUpdateTaskComponent;