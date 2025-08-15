import transactionsReducer, { fetchTransactions } from '../redux/transactionsSlice';
import { configureStore } from '@reduxjs/toolkit';

global.fetch = jest.fn();

describe('transactionsSlice', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        transactions: transactionsReducer,
      }
    });
    (fetch as jest.Mock).mockClear();
  })
  it('should handle initial state', () => {
   expect(store.getState().transactions.data).toEqual([]);
   expect(store.getState().transactions.loading).toEqual(false);
  });

  it('should handle fetchTransactions.pending', () => {
    store.dispatch(fetchTransactions.pending('test', undefined));
    expect(store.getState().transactions.loading).toBe(true);
  })

  it('should handle fetchTransactions.fulfilled', () => {
   const mockTransactions = [{
        id: 1,
        amount: "₦43,644",
        transactionId: "TR_8401857902",
        type: "Transfer",
        date: "Feb 12, 2022",
        time: "10:30AM",
        status: "Processed",
      }, ];
      store.dispatch(fetchTransactions.fulfilled(mockTransactions, 'test', undefined));
      expect(store.getState().transactions.data).toEqual(mockTransactions);
      expect(store.getState().transactions.loading).toBe(false);
  });
});
