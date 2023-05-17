import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";


export type expenses = {
  id: string,
  title: string,
  amount: number,
  date: string
}

export const DUMMY_EXPENSES : expenses[] = [
  {
    id: 'e1',
    title: 'First Expense',
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: 'e2',
    title: 'Second Expense',
    amount: 16.99,
    date: new Date().toISOString(),
  }
]

export default function ExpensesPage() {
  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  )
}