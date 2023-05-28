import { Form, Link } from "@remix-run/react";

function ExpenseListItem({ title, amount, id } : { title: string, amount: number, id: string }) {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <Form method="delete" action={`/expenses/${id}`}>
          <button onClick={deleteExpenseItemHandler}>Delete</button>
        </Form>
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
