'use client'

import React, { useEffect, useState } from "react";
import AccountCard from "./AccountCard";
import DateDropdown from "./DateDropdown";
import { Button } from "./ui/button";
import RevenueChart from "./RevenueChart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchRevenue } from "@/redux/revenueSlice";
const selectData = [
  "Last 7 days",
  "Last 30 days",
  "Last 3 months",
  "Last 6 months",
  "Last 1 year",
];
const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((s: RootState) => s.revenue);
  const [range, setRange] = useState<"today" | "7" | "30">("7");

  useEffect(() => {
    dispatch(fetchRevenue());
  }, [dispatch]);

  const chartData = data;
  return (
    <div className="space-y-8 md:pl-5 py-16">
      <div className="text border-b px-5">
        <h1 className="text-[20px] w-48 text-center border-b-2 border-[#3976E8] font-semibold text-gray-800">
          Online Payments
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6  md:px-5 px-3">
        {/* Left card */}
        <AccountCard />

        {/* Right chart */}
        <div className="md:col-span-2">
          <div className="bg-transparent rounded-[6px] md:border border-gray-200 md:p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="text-sm hidden md:flex items-center gap-2 text-gray-600 font-medium">
                Showing data for: <DateDropdown data={selectData} />
              </div>
              <div className="flex gap-2">
                {["today", "7", "30"].map((val: string) => (
                  <Button
                    key={val}
                    size="sm"
                    className={`rounded hidden md:block shadow-none  text-black ${
                      range === val
                        ? "bg-[#00C6FB0F] hover:bg-[#00c5fb07]"
                        : "bg-[#d5ecf30e] hover:bg-[#00C6FB0F]"
                    }  px-4 text-sm`}
                    onClick={() => setRange(val as "today" | "7" | "30")}
                  >
                    {val === "today"
                      ? "Today"
                      : val === "7"
                      ? "Last 7 days"
                      : "Last 30 days"}
                  </Button>
                ))}
              </div>
            </div>

            {loading ? (
              <div className="md:p-8 text-center text-gray-500 text-sm">
                Loading chart...
              </div>
            ) : (
              <RevenueChart data={chartData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
