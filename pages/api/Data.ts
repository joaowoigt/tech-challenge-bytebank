import { Transaction, isDebit, isCredit } from "@/models/Transactions";
import { TransactionType } from "@/models/TransactionType";

export const credit: Transaction = {
  value: 10000.0,
  kind: TransactionType.Salario,
  fullDate: "10/11/2024",
  month: "Novembro",
};
export const debit: Transaction = {
  value: 2000.0,
  kind: TransactionType.DOC,
  fullDate: "10/11/2024",
  month: "Novembro",
};
export const mockedInitialValues: Transaction[] = [credit, debit];
