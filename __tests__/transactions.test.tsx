// __tests__/transactions.test.tsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import TransactionsPage from "../app/transactions/page";
import * as api from "../redux/transactionsSlice";

// Mock the fetchTransactions thunk
jest.spyOn(api, "fetchTransactions").mockImplementation(() => {
  return {
    type: "transactions/fetchTransactions/fulfilled",
    payload: [
      { id: 1, date: "2025-08-12", description: "Payment", amount: 2500, status: "Completed" },
      { id: 2, date: "2025-08-13", description: "Refund", amount: -500, status: "Pending" },
    ],
  } as any;
});

describe("Transactions Page", () => {
  it("renders table headers", () => {
    render(
      <Provider store={store}>
        <TransactionsPage />
      </Provider>
    );

    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Description/i)).toBeInTheDocument();
    expect(screen.getByText(/Amount/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
  });

  it("displays transactions after API call", async () => {
    render(
      <Provider store={store}>
        <TransactionsPage />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("Payment")).toBeInTheDocument();
      expect(screen.getByText("Refund")).toBeInTheDocument();
    });
  });
});
