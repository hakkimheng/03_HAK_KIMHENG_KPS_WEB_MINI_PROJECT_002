
import { Provider } from "@/context/provider";

export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
      <Provider>
      {children}
      </Provider>
      </body>
    </html>
  );
}
