import type { NavigateFunction} from "@remix-run/react";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

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