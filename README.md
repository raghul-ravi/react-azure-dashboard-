# React Azure Loan Dashboard

This project is a minimal React + TypeScript dashboard secured with Azure AD. Only users who belong to a specific Azure AD group can view the dashboard. The dashboard currently displays a static list of loans.

## Getting Started

1. Copy `.env.example` to `.env` and fill in your Azure AD configuration.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Run tests:
   ```bash
   npm test
   ```

## Docker

Build and run the application with Docker:

```bash
docker build -t loan-dashboard .
docker run -p 3000:3000 --env-file .env loan-dashboard
```

## Azure AD Group Enforcement

The application checks the `groups` claim in the user's ID token. If the required group ID is not present, an authorization message is shown instead of the dashboard.
