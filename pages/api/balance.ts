import type { NextApiRequest, NextApiResponse } from "next";
import { isDebit, isCredit } from "@/models/Transactions";
import { mockedInitialValues } from "./Data";
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
