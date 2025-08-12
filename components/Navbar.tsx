"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../assets/images/Logo.png";
import { Bell } from "lucide-react";
import { UserDropdown } from "./UserDropdown";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function Navbar() {
  return (
    <header className="w-full h-[80px] bg-[#f8f8f8] border-b md:px-6 py-4 flex justify-between items-center">
      <h1 className="text-[20px] mx-5 md:hidden font-semibold text-gray-800 flex items-center gap-5">
        <HiOutlineArrowNarrowLeft /> Transactions
      </h1>
      <div className="hidden md:flex items-center gap-3">
        <Image src={logo} width={100} height={50} alt="Brand logo" />
      </div>
      <div className="md:flex hidden items-center gap-3">
        <Bell />
        <div className="w-12 h-12 rounded-full bg-[#0CBC8B] text-white flex items-center justify-center">
          GA
        </div>
        <UserDropdown />
      </div>
    </header>
  );
}
