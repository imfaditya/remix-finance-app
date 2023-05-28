// import type { LoaderArgs } from "@remix-run/node";
import { ActionArgs, redirect } from "@remix-run/node";
import type { NavigateFunction } from "@remix-run/react";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { deleteExpense, updateExpense } from "~/data/expense.server";
import { validateExpenseInput } from "~/data/validation.server";
// import { getExpense } from "~/data/expense.server";

export default function UpdateExpensesPage() {
  const navigate: NavigateFunction = useNavigate();
  
  function closeHandler() {
    navigate("..");
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  )
}

// export async function loader({ params }: LoaderArgs) {
//   const expense = await getExpense(params.id || "");
// }

export async function action ({ params, request } : ActionArgs) {
  const expenseId = params.id;

  if(!expenseId) {
    return redirect("/expenses");
  }

  if(request.method === 'DELETE') {
    await deleteExpense(expenseId);
  }

  if(request.method === 'PATCH') {
    const formData = await request.formData();
    const { title, amount, date } = Object.fromEntries(formData);

    if(typeof title !== "string" || typeof amount !== "string" || typeof date !== "string") {
      return redirect("/expenses");
    }

    try {
      validateExpenseInput({ title, amount, date });
      await updateExpense(expenseId, { title, amount, date });
    } catch (error) {
      return error;
    }
  }

  return redirect("/expenses");
}