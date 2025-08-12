"use client";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function AccountCard() {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };
  return (
    <div className="bg-white rounded-[6px] relative px-6 py-5 w-full md:w-[370px] border border-gray-200">
      <div className="text-[11px] font-medium text-[#8F8E8E] tracking-wide mb-2">
        ACCOUNT DETAILS
      </div>

      <div className="text-sm font-semibold text-[#000000] mb-1">
        STERLING BANK
      </div>

      <div className="flex items-center justify-between mb-1">
        <div className="text-[26px] font-bold text-[#000000] tracking-wide">
          8000000000
        </div>
        <Button
          onClick={() => handleCopy("8000000000")}
          size="sm"
          variant="ghost"
          className="hover:bg-transparent"
        >
          {isCopied ? (
            <span className="text-[#9F56D4] text-[12px] cursor-pointer flex items-center gap-1 hover:bg-[#ba5efb33] px-3 bg-[#9F56D433] py-1.5 rounded-[8px] ">
              <Copy className="w-3 h-3 text-[#9F56D4]" />
              Copied
            </span>
          ) : (
            <span className="text-[#9F56D4] text-[12px] cursor-pointer flex items-center gap-1 hover:bg-[#ba5efb33] px-3 bg-[#9F56D433] py-1.5 rounded-[8px]">
              <Copy className="w-3 h-3 text-[#9F56D4]" /> Copy
            </span>
          )}
        </Button>
      </div>
      <h1 className="text md:hidden">OGEDENGBE FRUITS STORE</h1>
      {/* {isCopied && (
        <div className="text-green-700 bg-green-200/30 rounded-lg px-5 py-2 top-0 right-0 w-full">
          Account number is copied
        </div>
      )} */}
    </div>
  );
}
