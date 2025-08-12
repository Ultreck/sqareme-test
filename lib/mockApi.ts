export async function getRevenueData() {
  return [
    { month: "Jan", value: 120000 },
    { month: "Feb", value: 90000 },
    { month: "Mar", value: 140000 },
    { month: "Apr", value: 80000 },
    { month: "May", value: 125000 },
    { month: "Jun", value: 110000 },
  ];
}

export async function getTransactionsData() {
  return [
    {
      id: 1,
      amount: "₦20,000",
      transactionId: "TXN123456",
      type: "Credit",
      date: "2025-08-08",
      time: "10:45 AM",
      status: "Processed",
    },
    {
      id: 2,
      amount: "₦15,000",
      transactionId: "TXN789012",
      type: "Debit",
      date: "2025-08-09",
      time: "1:30 PM",
      status: "Failed",
    },
  ];
}
