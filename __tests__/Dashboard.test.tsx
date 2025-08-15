import { render, screen } from '@testing-library/react';
import DashboardPage from '../app/dashboard/page';
import { Providers } from '../redux/Providers';

describe('Dashboard Page', () => {
  it('should renders dashboard page', () => {
    render(
      <Providers >
        <DashboardPage />
      </Providers>
    );
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
});
