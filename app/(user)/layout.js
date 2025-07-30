import Navigation from "@/components/Navigation";
import Marquee from "react-fast-marquee";
import { Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";

export const metadata = {
  title: {
    default: "Sk Technical | Learn Web Development",
    template: "%s | Sk Technical",
  },
  description:
    "Free tutorials on React.js, Next.js, and web development by Sk Technical.",
  keywords: ["React", "Next.js", "Web Development", "Sk Technical"],
  icons: {
    icon: "/vercel.svg",
  },
  metadataBase: new URL("https://Sktechical.com"),
  openGraph: {
    title: "Sk Technical",
    description: "Join the best web dev tutorials!",
    url: "https://yourdomain.com",
    siteName: "Sk Technical",
    images: [
      {
        url: "/globe.png",
        width: 1200,
        height: 630,
        alt: "Sk Technical Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sk Technical",
    description: "Learn Web Dev from scratch with Sk Technical!",
    creator: "@Sktechnical",
    images: ["/globe.png"],
  },
};

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
      <body>
        <Marquee className= {`${workSans.variable} ${roboto.variable}`}>
  I can be a React Marquee Component, Use in Next.js.
</Marquee>
      <Navigation />
      {children}
      </body>
    </html>
  );
};