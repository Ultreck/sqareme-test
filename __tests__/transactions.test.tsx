// __tests__/transactions.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import TransactionsPage from '../app/transactions/page';

// Mock the entire slice before importing the page
jest.mock('@/redux/transactionsSlice', () => ({
  __esModule: true,
  ...jest.requireActual('@/redux/transactionsSlice'),
  fetchTransactions: jest.fn(() => ({
    type: 'transactions/fetchTransactions/fulfilled',
    payload: [
      { id: 1, description: 'Mock Transaction 1', amount: 100 },
      { id: 2, description: 'Mock Transaction 2', amount: 200 },
    ],
  })),
}));

describe('Transactions Page', () => {
  it('renders transactions', () => {
    render(
      <Provider store={store}>
        <TransactionsPage />
      </Provider>
    );

    expect(screen.getByText(/mock transaction 1/i)).toBeInTheDocument();
    expect(screen.getByText(/mock transaction 2/i)).toBeInTheDocument();
  });
});
