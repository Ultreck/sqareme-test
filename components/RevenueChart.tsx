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

type Props = { data: { month: string; value: number }[] };

export default function RevenueChart({ data }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100">
      <div className="text-sm font-medium text-gray-700 mb-4">
        Revenue Overview
      </div>
      <div style={{ height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={18}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(v) => `${v / 1000}k`}
              tick={{ fontSize: 12, fill: "#6b7280" }}
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
              radius={[6, 6, 0, 0]}
              fill="#3B82F6"
              maxBarSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
