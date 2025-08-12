"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DateDropdown from "./DateDropdown";

type Props = { data: { month: string; value: number }[] };
const selectData = ["Weekly", "Monthly", "Quarterly", "Yearly"];
const ticks = [100000, 200000, 300000, 400000, 500000];
export default function RevenueChart({ data }: Props) {
  return (
    <div className="bg-white rounded-[6px] md:p-5 border border-gray-200">
      <div className="text-sm hidden md:grid ml-8 font-medium text-gray-700 mb-4">
        <div className="text">
          Revenue <span className="text-green-400 font-normal">+0.00% </span>{" "}
          <span className="text-[#000000] font-normal">vs Last 7 days</span>
        </div>
        <div className="text mt-3 flex items-center gap-2">
          <h1 className="text-[#424242] font-bold text-[28.14px] ">₦0.00</h1>
          <span className="text-[#000000] font-normal">in total value</span>
        </div>
      </div>
      <div className="text md:hidden px-5 flex justify-between items-center py-5">
        <h1 className="text-[#424242] font-bold text-[28.14px] ">Revenue</h1>
        <span className="text-[#000000] font-normal">
          <DateDropdown className="rounded-full w-28" data={selectData} />{" "}
        </span>
      </div>
      <div className="lg:hidden" style={{ height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.slice(0, 7)} barCategoryGap={18}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#8686AC" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[100000, 500000]}
              tickFormatter={(value) => `${value / 1000}k`}
              tick={{ fontSize: 12, fill: "#8686AC" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              }}
              formatter={(v: number) => [`₦${v.toLocaleString()}`, "Revenue"]}
            />
            <Bar
              dataKey="value"
              radius={[0, 0, 0, 0]}
              fill="#FFC145"
              maxBarSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="hidden lg:flex" style={{ height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={18}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#8686AC" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[100000, 500000]}
              tickFormatter={(value) => `${value / 1000}k`}
              tick={{ fontSize: 12, fill: "#8686AC" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              }}
              formatter={(v: number) => [`₦${v.toLocaleString()}`, "Revenue"]}
            />
            <Bar
              dataKey="value"
              radius={[0, 0, 0, 0]}
              fill="#FFC145"
              maxBarSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
