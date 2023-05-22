import type { ActionArgs} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import type { NavigateFunction} from "@remix-run/react";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { addExpense } from "~/data/expense.server";
import { validateExpenseInput } from "~/data/validation.server";

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
  const {title, amount, date} = Object.fromEntries(formData);

  if(typeof title !== "string" || typeof amount !== "string" || typeof date !== "string") {
    return redirect("/");
  }

  try {
    validateExpenseInput({ title, amount, date });
  } catch (error) {
    return error;
  }

  await addExpense({ title, amount, date });
  return redirect("/expenses");
}