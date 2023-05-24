import {
  Form,
  Link, 
  useActionData,
  useNavigation, 
  // useSubmit
} from "@remix-run/react";

function ExpenseForm() {
  const today: string = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const validationErrors = useActionData<object>();
  const isSubmitting = useNavigation().state !== 'idle';

  // const submit = useSubmit();
  // const handleSubmit = (event: React.SyntheticEvent) => {
  //   event.preventDefault();
  //   submit(event.target as HTMLFormElement, {
  //     method: "post",
  //   })
  // }

  return (
    <Form 
      method="post" 
      className="form" 
      id="expense-form" 
      // onSubmit={handleSubmit}
    >
      <p>
        <label htmlFor="title">Expense Title</label>
        <input type="text" id="title" name="title" required maxLength={30} />
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
            required
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" max={today} required />
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
