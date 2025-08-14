import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Providers } from "@/redux/Providers";

export const metadata: Metadata = {
  title: "FundR Dashboard",
  description: "Admin dashboard for FundR",
};

if (typeof window !== "undefined") {
  import("../mocks/browser").then(({ worker }) => worker.start());
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="  bg-gray-50">
        <Providers >
          <div className="text overflow-hidden w-full">
            <Navbar />
          </div>
          <div className="flex md:mt-20 mt-10 w-full">
            <Sidebar />
            <main className="border w-full md:pl-64">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
