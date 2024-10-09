import {
  Debit,
  Credit,
  Transactions,
  isDebit,
  isCredit,
} from "@/models/Transactions";
import { TransactionType } from "@/models/TransactionType";
import type { NextApiRequest, NextApiResponse } from "next";

const credit: Credit = { value: 10000.1, kind: TransactionType.Salario };
const debit: Debit = { value: 2000.0, kind: TransactionType.DOC };
const mockedInitialValues: Transactions[] = [credit, debit];

export type BalanceData = {
  value: string;
};

export default function (
  req: NextApiRequest,
  res: NextApiResponse<BalanceData>
) {
  const balance = getAllBalance();
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const finalText = formatter.format(balance);
  res.status(200).json({ value: `${finalText}` });
}

function getAllBalance() {
  let finalBalance = 0.0;
  mockedInitialValues.forEach((transaction) => {
    if (isDebit(transaction)) {
      finalBalance -= transaction.value;
    }
    if (isCredit(transaction)) {
      finalBalance += transaction.value;
    }
  });
  return finalBalance;
}
