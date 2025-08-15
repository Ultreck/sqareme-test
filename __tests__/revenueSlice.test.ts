import { configureStore } from '@reduxjs/toolkit';
import revenueReducer, { fetchRevenue } from '../redux/revenueSlice';

// Mock fetch globally
global.fetch = jest.fn();

describe('revenueSlice', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        revenue: revenueReducer,
      },
    });
    (fetch as jest.Mock).mockClear();
  });

  it('should handle initial state', () => {
    expect(store.getState().revenue.data).toEqual([]);
    expect(store.getState().revenue.loading).toBe(false);
  });

  it('should handle fetchRevenue.pending', () => {
    store.dispatch(fetchRevenue.pending('test', undefined));
    expect(store.getState().revenue.loading).toBe(true);
  });

  it('should handle fetchRevenue.fulfilled', () => {
    const mockRevenue = [{ id: '1', amount: 200, description: 'Test Revenue' }];
    store.dispatch(fetchRevenue.fulfilled(mockRevenue, 'test', undefined));
    expect(store.getState().revenue.data).toEqual(mockRevenue);
    expect(store.getState().revenue.loading).toBe(false);
  });
});

