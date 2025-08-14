import transactionsReducer, { fetchTransactions } from '../redux/transactionsSlice';
import { configureStore } from "@reduxjs/toolkit";

describe("transactionsSlice", () => {
  it("should handle initial state", () => {
    expect(transactionsReducer(undefined, { type: "unknown" })).toEqual({
      data: [],
      loading: false,
    });
  });

  it("fetchTransactions works with mock API", async () => {
    const store = configureStore({
      reducer: { transactions: transactionsReducer },
    });
    await store.dispatch(fetchTransactions() as any);
    const state = store.getState().transactions;
    expect(state.data.length).toBeGreaterThan(0);
  });
});
