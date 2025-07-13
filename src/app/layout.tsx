import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ROGISTECH",
  description: "AI Consulting & Automation",
  icons: {
    icon: "/rogistech-logo.png",
  },
  openGraph: {
    title: "ROGISTECH",
    description: "AI Consulting & Automation",
    url: "https://www.rogistech.online",
    siteName: "ROGISTECH",
    images: [
      {
        url: "/rogistech-logo.png",
        width: 1200,
        height: 630,
        alt: "ROGISTECH Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROGISTECH",
    description: "AI Consulting & Automation",
    images: ["/rogistech-logo.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="antialiased font-primary">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
