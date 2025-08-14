// app/api/transactions/route.ts
import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json([
    { month: "Jan", value: 250000 },
    { month: "Feb", value: 420000 },
    { month: "Mar", value: 340000 },
    { month: "Apr", value: 230000 },
    { month: "May", value: 40000 },
    { month: "Jun", value: 80000 },
    { month: "Jul", value: 90000 },
    { month: "Aug", value: 85000 },
    { month: "Sep", value: 90000 },
    { month: "Oct", value: 100000 },
    { month: "Nov", value: 200000 },
    { month: "Dec", value: 0 },
  ]);
}
