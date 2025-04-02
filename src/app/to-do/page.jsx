import CreateWorkSpace from "@/components/CreateWorkSpace";
import FinishedCardComponent from "@/components/FinishedCardComponent";
import InprocessCardConponent from "@/components/InprocessCardConponent";
import LogoComponent from "@/components/LogoComponent";
import NavBarComponent from "@/components/NavBarComponent";
import NonStartedCardComponent from "@/components/NonStartedCardComponent";
import SideBarComponent from "@/components/SideBarComponent";
export default function HomePage() {
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

          <section className="flex justify-between">
            <h2 className="font-bold text-2xl">HRD DESIGN</h2>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1 8.61001C22.14 8.95001 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.01997 21.35C5.87997 22.62 4.57997 21.67 5.13997 19.25L5.84997 16.18C5.97997 15.6 5.74997 14.79 5.32997 14.37L2.84997 11.89C1.38997 10.43 1.85997 8.95001 3.89997 8.61001L7.08997 8.08001C7.61997 7.99001 8.25997 7.52002 8.49997 7.03001L10.26 3.51001C11.21 1.60001 12.77 1.60001 13.73 3.51001L15.49 7.03001C15.59 7.24001 15.77 7.45001 15.98 7.62001"
                  stroke="#94A3B8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </section>

          <section className="flex gap-20 justify-center flex-wrap">
            <NonStartedCardComponent />
            <InprocessCardConponent />
            <FinishedCardComponent />
          </section>
          <div className="fixed bottom-10 right-10">
            <div className="flex gap-10 items-center">
            
            <CreateWorkSpace />
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
    </>
  );
}
