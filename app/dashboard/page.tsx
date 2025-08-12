"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchRevenue } from "@/redux/revenueSlice";
import AccountCard from "@/components/AccountCard";
import RevenueChart from "@/components/RevenueChart";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((s: RootState) => s.revenue);
  const [range, setRange] = useState<"today" | "7" | "30">("7");

  useEffect(() => {
    dispatch(fetchRevenue());
  }, [dispatch]);

  const chartData = data;

  return (
    <div className="space-y-8">
      <h1 className="text-[20px] font-semibold text-gray-800">Online Payments</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left card */}
        <AccountCard />

        {/* Right chart */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="text-sm text-gray-600 font-medium">
                Revenue Chart
              </div>
              <div className="flex gap-2">
                {["today", "7", "30"].map((val) => (
                  <Button
                    key={val}
                    variant={range === val ? "default" : "ghost"}
                    size="sm"
                    className="rounded-full px-4 text-sm"
                    onClick={() => setRange(val as any)}
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
              <div className="p-8 text-center text-gray-500 text-sm">
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
}
