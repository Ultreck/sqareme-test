// __tests__/transactionsSlice.test.ts
import { fetchTransactions } from "@/redux/transactionsSlice";
import { store } from "@/redux/store";

describe("transactionsSlice", () => {
  it("fetches transactions successfully", async () => {
    await store.dispatch(fetchTransactions());
    const state = store.getState().transactions;
    expect(state.data.length).toBeGreaterThan(0);
  });
});
