import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionsSlice";
import revenueReducer from "./revenueSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    revenue: revenueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
