import Chart from '~/components/expenses/Chart';
import ExpenseStatisc from '~/components/expenses/ExpenseStatistics';
import { DUMMY_EXPENSES } from './_app.expenses';

export default function ExpensesAnalysisPage() {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatisc expenses={DUMMY_EXPENSES} />
    </main>
  )
}