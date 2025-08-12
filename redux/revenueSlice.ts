// src/redux/revenueSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type RevenuePoint = { month: string; value: number };

const mockRevenue: RevenuePoint[] = [
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
];

export const fetchRevenue = createAsyncThunk("revenue/fetch", async () => {
  return new Promise<RevenuePoint[]>((resolve) => {
    setTimeout(() => resolve(mockRevenue), 300);
  });
});

const revenueSlice = createSlice({
  name: "revenue",
  initialState: {
    data: [] as RevenuePoint[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRevenue.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRevenue.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default revenueSlice.reducer;
