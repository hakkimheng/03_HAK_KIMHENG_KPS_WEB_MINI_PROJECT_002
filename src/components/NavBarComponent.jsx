import React from "react";

function NavBarComponent() {
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
          <h2>HRD Design</h2>
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
          <img
            className="rounded-full h-10"
            src="https://i.pinimg.com/736x/f7/b0/d5/f7b0d524b0e150b9cbae3cd1ed4c7a74.jpg"
            alt="profile"
          />
          <div className="flex flex-col">
            <h2>Monster</h2>
            <p className="text-green-700">Hakkimhengg@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavBarComponent;
