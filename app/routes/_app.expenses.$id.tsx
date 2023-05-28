// import type { LoaderArgs } from "@remix-run/node";
import type { NavigateFunction } from "@remix-run/react";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
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