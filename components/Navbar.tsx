"use client";
import Image from "next/image";
import logo from "../assets/images/Logo.png";
import { Bell } from "lucide-react";
import { UserDropdown } from "./UserDropdown";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { HiOutlineBars4 } from "react-icons/hi2";
export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full fixed z-30 h-[80px] bg-[#f8f8f8] border-b px-6 py-4 flex justify-between items-center">
      <h1
        className={`text-[20px] ${
          pathname === "/transactions" ? "md:hidden flex" : "hidden"
        } mx-5  font-semibold text-gray-800  items-center gap-5`}
      >
        <HiOutlineArrowNarrowLeft /> Transactions
      </h1>
      <div className="text md:hidden">
        <HiOutlineBars4 size={26} />
      </div>
      <div
        className={`${
          pathname === "/dashboard" ? "flex" : "hidden md:flex"
        }  items-center gap-3`}
      >
        <Image src={logo} width={100} height={50} alt="Brand logo" />
      </div>
      <div
        className={`md:flex ${
          pathname === "/dashboard" ? "flex" : "hidden md:flex"
        } items-center gap-3`}
      >
        <Bell />
        <div
          className={`w-10 md:w-12 h-10 md:h-12 rounded-full bg-[#0CBC8B] text-white flex items-center justify-center`}
        >
          GA
        </div>
        <UserDropdown />
      </div>
    </header>
  );
}
