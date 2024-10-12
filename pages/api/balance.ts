import type { NextApiRequest, NextApiResponse } from "next";
import transaction, { isDebit, isCredit } from "@/domain/models/Transactions";
import { connect } from "http2";
import connectMongoDB from "../lib/connectDB";
export type BalanceData = {
  value: string;
};

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<BalanceData>
) {
  const balance = await getAllBalance();
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const finalText = formatter.format(balance);
  res.status(200).json({ value: `${finalText}` });
}

async function getAllBalance() {
  await connectMongoDB();
  const extractList = await transaction.find();
  let finalBalance = 0.0;
  extractList.forEach((transaction) => {
    if (isDebit(transaction)) {
      finalBalance -= transaction.value;
    }
    if (isCredit(transaction)) {
      finalBalance += transaction.value;
    }
  });
  return finalBalance;
}
