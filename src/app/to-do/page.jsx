import LogoComponent from "@/components/LogoComponent";
import NavBarComponent from "@/components/NavBarComponent";
import SideBarComponent from "@/components/SideBarComponent";
import CreateTaskComponent from "@/components/CreateTaskComponent";
import React from 'react'

async function WorkIdPage() {
  return (
    <>
     <section className="flex justify-around pt-10">
      <section className="flex flex-col gap-15">
        <LogoComponent />
        <SideBarComponent />
      </section>
      <section className="flex flex-col gap-10">
        <section className="flex flex-col gap-3">
          <NavBarComponent />
          <hr />
        </section>
          <section className="flex gap-20 justify-center flex-wrap">
           <div className="w-300">
           </div>
          </section>
          <div className="fixed bottom-10 right-10">
            
            <div className="flex gap-10 items-center">
            
            <CreateTaskComponent />
            <div className="bg-white rounded-full p-4  shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="3.40728"
                    cy="3.22222"
                    r="3.22222"
                    fill="#F96666"
                  />
                  <circle
                    cx="3.40728"
                    cy="13.9629"
                    r="3.22222"
                    fill="#B771E5"
                  />
                  <circle cx="14.148" cy="3.22222" r="3.22222" fill="#4379F2" />
                  <path
                    d="M17.3702 13.9629C17.3702 15.7425 15.9276 17.1852 14.148 17.1852C12.3684 17.1852 10.9258 15.7425 10.9258 13.9629C10.9258 12.1834 12.3684 10.7407 14.148 10.7407C15.9276 10.7407 17.3702 12.1834 17.3702 13.9629Z"
                    fill="#009990"
                  />
                </svg>
              </div>
            </div>
          </div>
      </section>
      
    </section>
    
    {/* ------------------- */}

       
    </>
  )
}

export default WorkIdPage