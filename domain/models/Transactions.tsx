import mongoose, { Schema } from "mongoose";
import { TransactionType } from "./TransactionType";

const transactionSchema = new Schema(
  {
    value: Number,
    kind: Number,
    fullDate: String,
    month: String,
  },
  {
    timestamps: true,
  }
);

const transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema);

export default transaction;

export interface Transaction {
  value: number;
  kind: TransactionType;
  fullDate: string;
  month: string;
}

export function isDebit(transaction: any): boolean {
  return (
    transaction.kind == TransactionType.DOC ||
    transaction.kind == TransactionType.CambioDeMoeda
  );
}

export function isCredit(transaction: any): boolean {
  return (
    transaction.kind == TransactionType.Salario ||
    transaction.kind == TransactionType.Emprestimo
  );
}
