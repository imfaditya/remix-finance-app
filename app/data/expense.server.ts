import { prisma } from "./database.server";

export async function addExpense(expenseData: { title: string, amount: string, date: string }) {
  try {
    return await prisma.expense.create({data: {
      title: expenseData.title,
      amount: +expenseData.amount,
      date: new Date(expenseData.date),
    }})
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getExpenses() {
  try {
    const expenses = await prisma.expense.findMany({orderBy: {date: 'desc'}});
    return expenses;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getExpense(id: string) {
  try {
    const expense = await prisma.expense.findFirst({where: {id: id}});
    return expense;
  } catch (error) {
    throw error;
  }
}