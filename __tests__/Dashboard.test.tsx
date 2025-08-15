import { render, screen } from '@testing-library/react';
import DashboardPage from '../app/dashboard/page';
import { Providers } from '../redux/Providers';

describe('Dashboard Page', () => {
  it('renders dashboard heading', () => {
    render(
      <Providers >
        <DashboardPage />
      </Providers>
    );
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
});
