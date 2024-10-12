import type { NextApiRequest, NextApiResponse } from "next";
import transaction, { isDebit, isCredit } from "@/domain/models/Transactions";
import connectMongoDB from "../lib/connectDB";
import { Transaction } from "mongodb";
import { mapTransactionFromDB } from "@/domain/mappers/transactionMapper";
import { TransactionResponse } from "@/data/responses/ExtractResponse";

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<TransactionResponse[]>
) {
  await connectMongoDB();
  const extract = await transaction.find();
  const mappedList: TransactionResponse[] = extract.map((item) => {
    return mapTransactionFromDB(item);
  });
  res.status(200).json(mappedList);
}
