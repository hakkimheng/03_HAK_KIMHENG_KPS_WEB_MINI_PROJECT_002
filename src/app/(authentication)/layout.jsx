import SideBarComponent from "@/components/SideBarComponent";
import "../globals.css";


export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
    
      {children}
      
      </body>
    </html>
  );
}
