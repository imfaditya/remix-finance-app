import {
  Form,
  Link, 
  useActionData,
  useMatches,
  useNavigation,
  // useParams, 
  // useSubmit
} from "@remix-run/react";

function ExpenseForm() {
  const today: string = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const validationErrors = useActionData<object>();
  const expenses = useMatches().find((match) => match.id === 'routes/_app.expenses');
  const expense = expenses?.data.find((expense: any) => expense.id === expenses.params.id);
  const isSubmitting = useNavigation().state !== 'idle';
  console.log("expense: ", expense);

  // const submit = useSubmit();
  // const handleSubmit = (event: React.SyntheticEvent) => {
  //   event.preventDefault();
  //   submit(event.target as HTMLFormElement, {
  //     method: "post",
  //   })
  // }

  const defaultValues: {
    title: string,
    amount: number,
    date: string
  } = {
    title: expense?.title || "",
    amount: expense?.amount || 0,
    date: expense?.date || "",
  }

  return (
    <Form 
      method={expense ? "patch" : "post"} 
      className="form" 
      id="expense-form" 
      // onSubmit={handleSubmit}
    >
      <p>
        <label htmlFor="title">Expense Title</label>
        <input type="text" id="title" name="title" required maxLength={30} defaultValue={defaultValues.title} />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            defaultValue={defaultValues.amount}
            required
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" max={today} required defaultValue={defaultValues.date ? defaultValues.date.slice(0, 10) : ""}/>
        </p>
      </div>
      {
        validationErrors && 
        <ul>
          {Object.values(validationErrors).map((error: string) => (<li key={error}>{error}</li>))}
        </ul>
      }
      <div className="form-actions">
        <button disabled={isSubmitting}>{ isSubmitting ? 'Saving...' : 'Save Expense' }</button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
