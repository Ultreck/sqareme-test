"use client";

import React, { useState } from "react";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react"; // you can swap icons if needed
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DateRange } from "react-day-picker";
import { FaRegCalendarAlt } from "react-icons/fa";


const TransactionDateRange = () => {
const [date, setDate] = useState<DateRange | undefined>(undefined)


  const handleFrom = (dateFrom: DateRange | undefined) => {
    if (dateFrom?.from) {
      return dateFrom.from.toLocaleDateString("en", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    }
  };
  const handleTo = (dateTo: DateRange | undefined) => {
    if (dateTo?.to) {
      return dateTo.to.toLocaleDateString("en", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    }
  };

    const handleSelect = (selected: DateRange | undefined) => {
    if (!selected) {
      setDate(undefined);
      return;
    }
    const isSingleClick =
      selected.from &&
      selected.to &&
      selected.from.getTime() === selected.to.getTime();

    if (isSingleClick && selected.from) {
      const nextDay = new Date(selected?.from);
      nextDay.setDate(nextDay.getDate() + 1);
      setDate({ from: selected.from, to: nextDay });
    } else {
      setDate(selected);
    }
  };
  return (
     <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex border bg-white outline-0 justify-between md:px-3 px-1 py-2 rounded-lg items-center space-x-2 font-normal">
          <FaRegCalendarAlt className="h-4 w-4 text-[#71717A] hover:text-gray-700 flex-shrink-0" />
          {date?.from ?  <span className="text-[#71717A] flex text-xs md:text-sm items-center ">{handleFrom(date)} - {handleTo(date)}</span> : <span className="text text-xs md:text-sm">Aug 12, 2025 - Aug 13, 2025</span>}
          <ChevronDown size={16} className="text-gray-400" />
        </button>
       
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-full">
        <Calendar
          mode="range"
          defaultMonth={date?.from}
          numberOfMonths={2}
          selected={date}
          disabled={{ before: new Date() }}
          onSelect={handleSelect}
          className="rounded-lg border shadow-sm"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default TransactionDateRange;