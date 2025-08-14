import { RevenuePoint } from "@/types/types-file";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRevenue = createAsyncThunk(
  "revenues/fetchRevenues",
  async () => {
    const res = await fetch("/api/revenues");

    if (!res.ok) throw new Error("API error");
    return (await res.json()) as RevenuePoint[];
  }
);

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
