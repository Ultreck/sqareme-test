// mocks/handlers.ts
import { http, HttpResponse } from "msw";
export const handlers = [
  http.get("/api/transactions", () =>
    HttpResponse.json([
      {
        id: 1,
        amount: "₦43,644",
        transactionId: "TR_8401857902",
        type: "Transfer",
        date: "Feb 12, 2022",
        time: "10:30AM",
        status: "Processed",
      },
      {
        id: 2,
        amount: "₦35,471",
        transactionId: "TR_8401857902",
        type: "Withdrawal",
        date: "Feb 12, 2022",
        time: "10:30AM",
        status: "Failed",
      },
      {
        id: 3,
        amount: "₦43,644",
        transactionId: "TR_8401857902",
        type: "Deposit",
        date: "Feb 12, 2022",
        time: "10:30AM",
        status: "Processed",
      },
      {
        id: 4,
        amount: "₦35,471",
        transactionId: "TR_8401857902",
        type: "Request",
        date: "Feb 12, 2022",
        time: "10:30AM",
        status: "Failed",
      },
      {
        id: 5,
        amount: "₦43,644",
        transactionId: "TR_8401857902",
        type: "Transfer",
        date: "Feb 12, 2022",
        time: "10:30AM",
        status: "Processed",
      },
      {
        id: 6,
        amount: "₦35,471",
        transactionId: "TR_8401857902",
        type: "Transfer",
        date: "Feb 12, 2022",
        time: "10:30AM",
        status: "Failed",
      },
      {
        id: 7,
        amount: "₦38,948",
        transactionId: "TR_8401857902",
        type: "Transfer",
        date: "Feb 12, 2022",
        time: "10:30AM",
        status: "Processed",
      },
    ])
  ),

  http.get("/api/revenues", () =>
    HttpResponse.json([
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
    ])
  ),
];
