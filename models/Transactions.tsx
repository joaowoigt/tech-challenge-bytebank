import { TransactionType } from "./TransactionType";

export interface Credit {
  value: number;
  kind: TransactionType;
}

export interface Debit {
  value: number;
  kind: TransactionType;
}

export type Transactions = Debit | Credit;

export function isDebit(transaction: Transactions): transaction is Debit {
  return (
    transaction.kind == TransactionType.DOC ||
    transaction.kind == TransactionType.CambioDeMoeda
  );
}

export function isCredit(transaction: Transactions): transaction is Credit {
  return (
    transaction.kind == TransactionType.Salario ||
    transaction.kind == TransactionType.Emprestimo
  );
}
