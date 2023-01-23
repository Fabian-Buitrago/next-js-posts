import "../styles/globals.css";
import { Navigation } from "../components/navigation";

import { Space_Grotesk } from "@next/font/google";

const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});


export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={space_Grotesk.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
