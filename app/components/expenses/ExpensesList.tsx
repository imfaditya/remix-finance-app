import ExpenseListItem from './ExpenseListItem';
import type { expenses } from '~/routes/expenses';

function ExpensesList({ expenses }: { expenses: expenses[] }) {
  return (
    <ol id="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            // date={expense.date}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
