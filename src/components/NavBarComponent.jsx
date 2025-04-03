
import { getUserInfomation } from "@/action/GetUserInfomationAction";
import { getAllWorkSpaceAction } from "@/action/WorkSpaceAction";
import React from "react";

const NavBarComponent = async () => {
  const {user} = await getUserInfomation();
  const { workspace } = await getAllWorkSpaceAction();
  return (
    <>
      <section className="flex justify-between">
        <div className="flex gap-5 align-center">
          <h2>Workspace</h2>
          <span className="self-baseline">
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.41 16.92L7.93 10.4C8.7 9.62999 8.7 8.36999 7.93 7.59999L1.41 1.07999"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h2 className="text-black">
            {workspace.workspaceName}</h2>
        </div>
        <div className="flex gap-5">
          <span className="self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </span>
                <div className="flex gap-3">
                <img
                  className="rounded-full h-10"
                  src={user.profile}
                  alt="profile"
                />
                <div className="flex flex-col">
                  <h2>{user.username}</h2>
                  <p className="text-green-700">{user.email}</p>
                </div>
              </div>

        </div>
      </section>
    </>
  );
};

export default NavBarComponent;
