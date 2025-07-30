import Navigation from "@/components/Navigation";
import Marquee from "react-fast-marquee";
import { Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Marquee className= {`${workSans.variable} ${roboto.variable}`}>
  I can be a React Marquee Component, Use in Next.js.
</Marquee>
      <Navigation />
      {children}
      </body>
    </html>
  );
};
