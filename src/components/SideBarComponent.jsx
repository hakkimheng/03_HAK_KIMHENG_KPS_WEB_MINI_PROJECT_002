
import React from "react";
import { ModalCreateWorkSpaceComponent } from "./ModalCreateWorkSpaceComponent";
import { getAllWorkSpaceAction } from "@/action/WorkSpaceAction";

import { ModalUpdateWorkSpaceComponent } from "./ModalUpdateWorkSpaceComponent";
import Link from "next/link";
import FavoriteSideBarComponent from "./FavoriteSideBarComponent";
import LogoComponent from "./LogoComponent";
import LogoutButton from "./LogOutButton";
async function SideBarComponent() {

  const { workspace } = await getAllWorkSpaceAction();

  const getRandomColor = () => {
    const colors = ["#FF5733", "#3366FF", "#33CC99", "#9966CC", "#FFD700"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <>
      <section className="flex flex-col w-50 gap-8">
        <div className="flex justify-between">
          <h2 className="font-bold text-[#94A3B8] text-xl">Workspace</h2>
          <ModalCreateWorkSpaceComponent />
        </div>
        <section className="flex flex-col gap-4 h-60 overflow-scroll">

          {workspace.map((workspace, index) => {
            return (
              <div className="flex justify-between" key={index} >
                <Link className="flex gap-4 items-center w-full" href={`/to-do/${workspace.workspaceId}`}>
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getRandomColor() }}
                  />
                  <p
                    className="font-bold text-gray-500"

                  >
                    {workspace.workspaceName}{" "}

                  </p>

                </Link>
                <button>
                  <ModalUpdateWorkSpaceComponent
                    workId={workspace.workspaceId}
                  />
                </button>

              </div>
            );
          })}
        </section>
        <FavoriteSideBarComponent
        workspace = {workspace}
        />
        <div  className= "fixed bottom-10">
        <LogoutButton/>
        </div>
       
      </section>
    </>
  );
}

export default SideBarComponent;
