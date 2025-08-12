import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Transaction = {
  id: number;
  amount: string;
  transactionId: string;
  type: string;
  date: string;
  time: string;
  status: "Processed" | "Failed";
};

const mockData: Transaction[] = [
  { id: 1, amount: "₦43,644", transactionId: "TR_8401857902", type: "Transfer", date: "Feb 12, 2022", time: "10:30AM", status: "Processed" },
  { id: 2, amount: "₦35,471", transactionId: "TR_8401857902", type: "Withdrawal", date: "Feb 12, 2022", time: "10:30AM", status: "Failed" },
  { id: 3, amount: "₦43,644", transactionId: "TR_8401857902", type: "Deposit", date: "Feb 12, 2022", time: "10:30AM", status: "Processed" },
  { id: 4, amount: "₦35,471", transactionId: "TR_8401857902", type: "Request", date: "Feb 12, 2022", time: "10:30AM", status: "Failed" },
  { id: 5, amount: "₦43,644", transactionId: "TR_8401857902", type: "Transfer", date: "Feb 12, 2022", time: "10:30AM", status: "Processed" },
  { id: 6, amount: "₦35,471", transactionId: "TR_8401857902", type: "Transfer", date: "Feb 12, 2022", time: "10:30AM", status: "Failed" },
  { id: 7, amount: "₦38,948", transactionId: "TR_8401857902", type: "Transfer", date: "Feb 12, 2022", time: "10:30AM", status: "Processed" },
];

export const fetchTransactions = createAsyncThunk("transactions/fetch", async () => {
  return new Promise<Transaction[]>((resolve) => {
    setTimeout(() => resolve(mockData), 300);
  });
});

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    data: [] as Transaction[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default transactionsSlice.reducer;
