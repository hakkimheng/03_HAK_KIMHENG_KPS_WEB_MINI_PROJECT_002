import SideBarComponent from "@/components/SideBarComponent";
import "../globals.css";
import LogoComponent from "@/components/LogoComponent";
import { Provider } from "@/context/provider";

export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default function AuthenticationLayout({ children }) {
  return (
    <main>
      <Provider>
      {children}
      </Provider>
      </main>
  );
}
