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
    <div className="bg-white rounded-2xl relative shadow-md px-6 py-5 w-full max-w-md border border-gray-100">
      <div className="text-[11px] font-medium text-gray-500 tracking-wide mb-2">
        ACCOUNT DETAILS
      </div>

      <div className="text-sm font-semibold text-gray-400 mb-1">
        STERLING BANK
      </div>

      <div className="flex items-center justify-between mb-1">
        <div className="text-[28px] font-bold tracking-wide">8000000000</div>
        <Button
          onClick={() => handleCopy("8000000000")}
          size="sm"
          variant="ghost"
          className="p-1 hover:bg-gray-100 rounded-full"
          >
        {isCopied? "Copied" : <Copy className="w-4 h-4 text-gray-500" />}
        </Button>
      </div>

      <div className="text-sm text-gray-500 mb-3">OGEDENGBE FRUITS STORE</div>
            {isCopied && <div className="text-green-700 bg-green-200/30 rounded-lg px-5 py-2 top-0 right-0 w-full">Account number is copied</div>}
    </div>
  );
}
