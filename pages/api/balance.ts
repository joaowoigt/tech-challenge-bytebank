import { Transaction, isDebit, isCredit } from "@/models/Transactions";
import { TransactionType } from "@/models/TransactionType";
import type { NextApiRequest, NextApiResponse } from "next";

const credit: Transaction = {
  value: 10000.0,
  kind: TransactionType.Salario,
  fullDate: "10/11/2024",
  month: "Novembro",
};
const debit: Transaction = {
  value: 2000.0,
  kind: TransactionType.DOC,
  fullDate: "10/11/2024",
  month: "Novembro",
};
const mockedInitialValues: Transaction[] = [credit, debit];

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
