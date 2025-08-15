# SquareMe Test Project

This project is a **Next.js (App Router) + TypeScript** web app that implements a mock banking dashboard with pages for:
- **Dashboard**
- **Transactions**
- **Transfer**
- **Accounts**
- **Settings**

The app uses **Redux Toolkit** for state management, **MSW v2+** for API mocking, and is fully tested with **Jest** and **React Testing Library**.  
It is deployed on **Netlify**.

---

## 🚀 Features
- **Next.js 15 (App Router)**
- **TypeScript**
- **Redux Toolkit** for global state
- **Mock API** via **MSW v2+**
- **Unit & Integration Tests** with Jest & Testing Library
- **Responsive Design** (based on Figma designs)
- **Deployed on Netlify**

---

## 📂 Project Structure
.
├── app/ # Next.js App Router pages
│ ├── dashboard/
│ ├── transactions/
│ ├── transfer/
│ ├── accounts/
│ └── settings/
├── redux/ # Redux Toolkit slices & store
│ ├── transactionsSlice.ts
│ ├── dashboardSlice.ts
│ └── store.ts
├── mocks/ # MSW v2+ mock API setup
│ ├── handlers.ts
│ └── server.ts
├── tests/ # Jest test files
│ ├── transactionsSlice.test.ts
│ ├── transactions.test.tsx
│ └── dashboard.test.tsx
├── jest.setup.ts # Jest setup file
├── jest.config.ts # Jest configuration
├── tsconfig.json # TypeScript configuration
└── package.json

---

## 🛠️ Installation

Clone the repository:
```bash
git clone https://github.com/Ultreck/sqareme-test.git
cd squareme-test
npm install
npm run dev
Mock API (MSW v2+)

The mock API is powered by MSW v2+ and runs in both:

Development → intercepts fetch calls in the browser

Tests → intercepts requests in Node using setupServer

Example handler (mocks/handlers.ts):

import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/transactions", () => {
    return HttpResponse.json([
      { id: 1, description: "Coffee", amount: -3.5 },
      { id: 2, description: "Salary", amount: 1500 }
    ]);
  }),
];
Test Stack:

Jest (test runner)

React Testing Library

Jest DOM Matchers

MSW v2+ for mocking network requests

Example test:

import { render, screen } from "@testing-library/react";
import TransactionsPage from "@/app/transactions/page";

test("renders Transactions heading", () => {
  render(<TransactionsPage />);
  expect(screen.getByText(/transactions/i)).toBeInTheDocument();
});
npm run build
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "test": "jest --watchAll",
  "test:ci": "jest --runInBand"
}