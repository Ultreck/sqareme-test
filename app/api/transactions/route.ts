// app/api/transactions/route.ts
import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json([
   { id: 1, amount: "₦43,644", transactionId: "TR_8401857902", type: "Transfer", date: "Feb 12, 2022", time: "10:30AM", status: "Processed" },
  { id: 2, amount: "₦35,471", transactionId: "TR_8401857902", type: "Withdrawal", date: "Feb 12, 2022", time: "10:30AM", status: "Failed" },
  { id: 3, amount: "₦43,644", transactionId: "TR_8401857902", type: "Deposit", date: "Feb 12, 2022", time: "10:30AM", status: "Processed" },
  { id: 4, amount: "₦35,471", transactionId: "TR_8401857902", type: "Request", date: "Feb 12, 2022", time: "10:30AM", status: "Failed" },
  { id: 5, amount: "₦43,644", transactionId: "TR_8401857902", type: "Transfer", date: "Feb 12, 2022", time: "10:30AM", status: "Processed" },
  { id: 6, amount: "₦35,471", transactionId: "TR_8401857902", type: "Transfer", date: "Feb 12, 2022", time: "10:30AM", status: "Failed" },
  { id: 7, amount: "₦38,948", transactionId: "TR_8401857902", type: "Transfer", date: "Feb 12, 2022", time: "10:30AM", status: "Processed" },
  ]);
}
