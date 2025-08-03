import { useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import LoanList, { type Loan } from './components/LoanList';
import { REQUIRED_GROUP_ID } from './authConfig';

const loans: Loan[] = [
  { id: 1, borrower: 'Alice', amount: 1000 },
  { id: 2, borrower: 'Bob', amount: 1500 },
  { id: 3, borrower: 'Charlie', amount: 2000 },
];

function App() {
  const { instance, accounts } = useMsal();
  const account = accounts[0];

  useEffect(() => {
    if (!account) {
      instance.loginRedirect();
    }
  }, [account, instance]);

  if (!account) {
    return <div>Signing in...</div>;
  }

  const groups = account.idTokenClaims?.groups as string[] | undefined;
  if (!groups?.includes(REQUIRED_GROUP_ID)) {
    return <div>You are not authorized to view this site.</div>;
  }

  return (
    <div>
      <h1>Loan Dashboard</h1>
      <LoanList loans={loans} />
    </div>
  );
}

export default App;
