import { ActionArgs, redirect } from "@remix-run/node";
import type { NavigateFunction} from "@remix-run/react";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { addExpense } from "~/data/expense.server";

export default function AddExpensesPage() {
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

export async function action({ request } : ActionArgs) {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);

  if(typeof expenseData.title !== "string" || typeof expenseData.amount !== "string" || typeof expenseData.date !== "string") {
    return redirect("/");
  }

  await addExpense({
    title: expenseData.title,
    amount: expenseData.amount,
    date: expenseData.date,
  });
  return redirect("/expenses");
}