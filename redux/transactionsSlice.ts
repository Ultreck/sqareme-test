import { Transaction } from "@/types/types-file";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const res = await fetch("/api/transactions");
    if (!res.ok) throw new Error("API error");
    return (await res.json()) as Transaction[];
  }
);

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
