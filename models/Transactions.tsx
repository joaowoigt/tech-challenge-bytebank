import { TransactionType } from "./TransactionType";

export interface Transaction {
  value: number;
  kind: TransactionType;
  fullDate: string;
  month: string;
}

export function isDebit(transaction: Transaction): boolean {
  return (
    transaction.kind == TransactionType.DOC ||
    transaction.kind == TransactionType.CambioDeMoeda
  );
}

export function isCredit(transaction: Transaction): boolean {
  return (
    transaction.kind == TransactionType.Salario ||
    transaction.kind == TransactionType.Emprestimo
  );
}
