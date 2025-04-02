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
  } from "@/components/ui/alert-dialog"
import { Input } from "./ui/input"
  
  export function ModalCreateWorkSpaceComponent() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button >
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

        <AlertDialogContent className=" bg-white">
        <section className="flex flex-col gap-7">
          <AlertDialogHeader>
            <section className="flex justify-between -pt-5">
            <AlertDialogTitle>Create New Workspace </AlertDialogTitle>
              <AlertDialogCancel className="text-red-500">X</AlertDialogCancel>
              </section>
            <AlertDialogDescription className="text-gray-600 ">
           <section className="flex flex-col gap-3">
           WorkSpace Name : 
           <Input type="text" placeholder="Please typ your work space name" />
           </section>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="bg-gray-600 hover:bg-gray-900  text-white">Create</AlertDialogAction>
          </AlertDialogFooter>
          </section>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
