import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Specialized AI for Farmers and Aspiring Farmers",
  description: "FarmWise is a platform that leverages AI and IoT to transform agriculture in SierraLeone. With our voice assistant agent, Iot Device and a Online Community of Farmers we helped farmers and aspiring farmers engage in sustainable agriculture and precision farming. We help aspiring farmers gets a headstart. We help illiterate farmers with our voice assistant agent to get ai recommendations. With our Iot Devices that monitor crop and soil condition we help farmers make informed decision about their crop. Then with the farmwise community we enable farmers to support each other and connect with a market where they can sell their produce. Overall we answer the questions: What to Plant? When to Plant? and How to Plant?"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
