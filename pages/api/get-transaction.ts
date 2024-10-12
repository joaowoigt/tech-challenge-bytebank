import type { NextApiRequest, NextApiResponse } from "next";
import connectMongoDB from "../lib/connectDB";
import transaction from "@/domain/models/Transactions";
import { TransactionResponse } from "@/data/responses/ExtractResponse";
import { mapTransactionFromDB } from "@/domain/mappers/transactionMapper";
import { console } from "inspector/promises";
import mongoose from "mongoose";

export type GetTransactionRequest = {
  id: string;
};
export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse<TransactionResponse>
) {
  await connectMongoDB();
  const id = req.body.id;
  console.log(id);
  const _id = new mongoose.Types.ObjectId(id);
  const item = await transaction.findOne({ _id: _id });
  const mappedItem = mapTransactionFromDB(item);
  res.status(200).json(mappedItem);
}
