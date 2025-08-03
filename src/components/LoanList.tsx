export interface Loan {
  id: number;
  borrower: string;
  amount: number;
}

interface LoanListProps {
  loans: Loan[];
}

export function LoanList({ loans }: LoanListProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Borrower</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {loans.map((loan) => (
          <tr key={loan.id}>
            <td>{loan.borrower}</td>
            <td>{loan.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LoanList;
