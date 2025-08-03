import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoanList from './LoanList';

describe('LoanList', () => {
  it('renders provided loans', () => {
    render(<LoanList loans={[{ id: 1, borrower: 'Alice', amount: 1000 }]} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
  });
});
